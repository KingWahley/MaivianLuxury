import { readdir, stat } from "node:fs/promises";
import path from "node:path";

import { apartments } from "./data/apartments";

const APP_DIRECTORY = path.join(process.cwd(), "app");
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.SITE_URL ||
  process.env.VERCEL_PROJECT_PRODUCTION_URL ||
  process.env.VERCEL_URL ||
  "https://www.maivanluxuryapartments.com";

const EXACT_ROUTE_CONFIG = {
  "/": { changeFrequency: "daily", priority: 1.0 },
  "/about": { changeFrequency: "monthly", priority: 0.8 },
  "/contact": { changeFrequency: "monthly", priority: 0.8 },
  "/apartments": { changeFrequency: "weekly", priority: 0.9 },
};

const PREFIX_ROUTE_CONFIG = [
  {
    prefix: "/apartments/",
    config: { changeFrequency: "weekly", priority: 0.7 },
  },
];

const EXCLUDED_PREFIXES = ["/api", "/admin", "/dashboard"];
const PAGE_FILE_PATTERN = /^page\.(js|jsx|ts|tsx)$/;
const DYNAMIC_ROUTE_FILE = path.join(APP_DIRECTORY, "apartments", "[id]", "page.js");
const APARTMENTS_DATA_FILE = path.join(APP_DIRECTORY, "data", "apartments.js");

function normalizeSiteUrl(value) {
  const withProtocol = value.startsWith("http") ? value : `https://${value}`;
  return withProtocol.replace(/\/+$/, "");
}

function isExcludedRoute(route) {
  return EXCLUDED_PREFIXES.some(
    (prefix) => route === prefix || route.startsWith(`${prefix}/`)
  );
}

function toRoutePath(segments) {
  const cleanSegments = segments
    .filter((segment) => segment && !segment.startsWith("(") && !segment.startsWith("@"))
    .filter((segment) => segment !== "app");

  if (cleanSegments.length === 0) {
    return "/";
  }

  return `/${cleanSegments.join("/")}`;
}

function isDynamicSegment(segment) {
  return segment.startsWith("[") && segment.endsWith("]");
}

function getRouteConfig(route) {
  if (EXACT_ROUTE_CONFIG[route]) {
    return EXACT_ROUTE_CONFIG[route];
  }

  const matchingPrefix = PREFIX_ROUTE_CONFIG.find(({ prefix }) =>
    route.startsWith(prefix)
  );

  if (matchingPrefix) {
    return matchingPrefix.config;
  }

  return {
    changeFrequency: route.split("/").length > 2 ? "weekly" : "monthly",
    priority: route.split("/").length > 2 ? 0.7 : 0.8,
  };
}

async function getLastModified(...filePaths) {
  const timestamps = await Promise.all(
    filePaths.map(async (filePath) => {
      const fileStats = await stat(filePath);
      return fileStats.mtime.getTime();
    })
  );

  return new Date(Math.max(...timestamps));
}

async function collectStaticRoutes(directory = APP_DIRECTORY, parentSegments = []) {
  const entries = await readdir(directory, { withFileTypes: true });
  const discoveredRoutes = [];

  for (const entry of entries) {
    const absolutePath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      const nextSegments = [...parentSegments, entry.name];
      const nestedRoutes = await collectStaticRoutes(absolutePath, nextSegments);
      discoveredRoutes.push(...nestedRoutes);
      continue;
    }

    if (!entry.isFile() || !PAGE_FILE_PATTERN.test(entry.name)) {
      continue;
    }

    if (parentSegments.some(isDynamicSegment)) {
      continue;
    }

    const route = toRoutePath(parentSegments);

    if (isExcludedRoute(route)) {
      continue;
    }

    discoveredRoutes.push({
      route,
      filePath: absolutePath,
    });
  }

  return discoveredRoutes;
}

async function getStaticEntries(baseUrl) {
  const staticRoutes = await collectStaticRoutes();

  return Promise.all(
    staticRoutes.map(async ({ route, filePath }) => {
      const { changeFrequency, priority } = getRouteConfig(route);

      return {
        url: `${baseUrl}${route}`,
        lastModified: await getLastModified(filePath),
        changeFrequency,
        priority,
      };
    })
  );
}

async function getApartmentEntries(baseUrl) {
  const sharedLastModified = await getLastModified(
    DYNAMIC_ROUTE_FILE,
    APARTMENTS_DATA_FILE
  );

  return apartments.map((apartment) => ({
    url: `${baseUrl}/apartments/${apartment.id}`,
    lastModified: sharedLastModified,
    ...getRouteConfig("/apartments/[id]".replace("[id]", String(apartment.id))),
  }));
}

function dedupeEntries(entries) {
  return Array.from(
    new Map(entries.map((entry) => [entry.url, entry])).values()
  ).sort((left, right) => {
    if (right.priority !== left.priority) {
      return right.priority - left.priority;
    }

    return left.url.localeCompare(right.url);
  });
}

export default async function sitemap() {
  const baseUrl = normalizeSiteUrl(SITE_URL);
  const [staticEntries, apartmentEntries] = await Promise.all([
    getStaticEntries(baseUrl),
    getApartmentEntries(baseUrl),
  ]);

  return dedupeEntries([...staticEntries, ...apartmentEntries]);
}
