export const apartments = [
  {
    id: 1,
    name: "The Penthouse",
    location: "No 1 Oladikpo ige street harmony estate news engineering Dawaki",
    area: "Dawaki",
    price: "₦170,000 - ₦180,000",
    pricing: [
      { beds: 2, price: 180000 },
      { beds: 3, price: 170000 }
    ],
    beds: 3,
    baths: 3,
    guests: 6,
    amenities: [
      "PS5",
      "NETFLIX",
      "24/7 FREE WIFI",
      "SNOOKER POOL TABLE",
      "SMART APPLIANCES",
      "STANDBY LISTER",
      "INVERTER SOLAR SYSTEM FOR 24/7 UNINTERRUPTED POWER SUPPLY",
      "FITTED LUXURY KITCHEN",
      "WASHING MACHINE",
      "IN-HOUSE CLEANER AT YOUR SERVICES 24/7",
      "NO PARTIES ALLOWED"
    ],
    images: Array.from({length: 18}, (_, i) => `/images/Penthouse/${i + 1}.jpeg`),
    img: "/images/Penthouse/3.jpeg",
    description: "Step into unparalleled luxury at our stunning 3-bedroom penthouse in the heart of Abuja, Nigeria—your ultimate luxury home away from home. With a capacity to host up to 10 guests, this exquisite property blends sophistication and ambiance, making it perfect for corporate retreats, family gatherings, or a romantic getaway. Marvel at the opulence of three spacious balconies offering breathtaking views, while enjoying entertainment at its finest with a PS5 and a snooker table for friendly competition. The fitted kitchen is a chef's dream, equipped with an inbuilt microwave, oven for grilling, gas burner, and washing machine, ensuring you have everything you need for seamless comfort. Stay connected and comfortable with our fully functional smart home powered by Alexa, and enjoy peace of mind with 24/7 electricity backed by a solar inverter and a robust 55KVA Lister generator. Plus, our dedicated cleaning team ensures your space stays immaculate during your stay. Don’t miss the chance to elevate your next event—book your unforgettable experience now and make this luxurious penthouse your go-to short-term rental in Abuja!"
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
    amenities: [
      "Netflix",
      "24hrs free internet",
      "PS5",
      "Luxury fitted kitchen",
      "Balcony front and back",
      "Secured mini estate"
    ],
    images: Array.from({length: 24}, (_, i) => `/images/3 bedroom luxury apartment/${i + 1}.jpeg`),
    img: "/images/3 bedroom luxury apartment/1.jpeg",
    description: "Discover true comfort in this 3 bedroom luxury apartment. Handpicked for its unique charm, premium amenities, and unparalleled elegance. Make yourself at home in our curated collection of extraordinary residences."
  }
];
