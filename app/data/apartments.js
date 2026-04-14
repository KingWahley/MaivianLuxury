export const apartments = [
  {
    id: 1,
    name: "The Penthouse",
    location: "No 1 Oladikpo ige street harmony estate news engineering Dawaki",
    area: "Dawaki",
    price: "₦170,000 - ₦180,000",
    pricing: [
      { beds: 2, price: 170000 },
      { beds: 3, price: 180000 }
    ],
    beds: 3,
    baths: 3,
    guests: 6,
    images: Array.from({length: 31}, (_, i) => `/images/Penthouse/${i + 1}.jpeg`),
    img: "/images/Penthouse/1.jpeg",
    description: "Experience unparalleled luxury in The Penthouse. Spanning the entire top floor, this residence offers breathtaking city views, custom designer furnishings, and state-of-the-art smart home integration. Perfect for families or executives seeking the finest accommodations."
  },
  {
    id: 2,
    name: "3 bedroom luxury apartment",
    location: "No 1 dr Goddy Idam street Aisha estate Dawaki. Behind Dawaki modern market",
    area: "Dawaki",
    price: "₦140,000 - ₦160,000",
    pricing: [
      { beds: 2, price: 140000 },
      { beds: 3, price: 160000 }
    ],
    beds: 3,
    baths: 3,
    guests: 6,
    images: Array.from({length: 18}, (_, i) => `/images/3 bedroom luxury apartment/${i + 1}.jpeg`),
    img: "/images/3 bedroom luxury apartment/1.jpeg",
    description: "Discover true comfort in this 3 bedroom luxury apartment. Handpicked for its unique charm, premium amenities, and unparalleled elegance. Make yourself at home in our curated collection of extraordinary residences."
  }
];
