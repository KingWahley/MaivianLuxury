"use client";

import { useState } from "react";

export default function ReadMoreText({ text, maxLength = 250 }) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!text) return null;

  if (text.length <= maxLength) {
    return (
      <p className="text-gray-muted leading-relaxed font-light text-lg">
        {text}
      </p>
    );
  }

  const displayText = isExpanded ? text : `${text.slice(0, maxLength).trim()}...`;

  return (
    <div>
      <p className="text-gray-muted leading-relaxed font-light text-lg mb-3">
        {displayText}
      </p>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-gold hover:text-white transition-colors font-medium underline underline-offset-4 text-sm tracking-wider"
      >
        {isExpanded ? "Read Less" : "Read More"}
      </button>
    </div>
  );
}
