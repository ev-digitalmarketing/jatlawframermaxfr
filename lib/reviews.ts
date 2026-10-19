export type Review = {
  id: string;
  name: string;
  /** public Google Maps contributor page */
  url: string;
  /** assumed 5-star: adjust if any review is rated differently */
  rating: number;
  /** service slugs (or "general") this review is relevant to */
  topics: string[];
  text: string;
};

/** Reviews are reproduced verbatim from Google. */
export const reviews: Review[] = [
  {
    id: "nihar-raval",
    name: "Nihar Raval",
    url: "https://www.google.com/maps/contrib/114260337387141382498/reviews?hl=en-CA",
    rating: 5,
    topics: ["general"],
    text: "Rizwan Jat is a fantastic lawyer—professional, knowledgeable, and incredibly dedicated. From our first interaction, it was very clear that he genuinely cares about his clients, he took the time to explain everything clearly, always made himself available, and handled every detail with care and precision. His attention to detail and commitment to achieving the best outcome is truly commendable. Rizwan’s professionalism, responsiveness, and calm demeanor provided a great sense of confidence and reassurance during a stressful time. I highly recommend him to anyone seeking expert legal support, you'll be in the best hands!",
  },
  {
    id: "ranchan-bhardwaj",
    name: "Ranchan Bhardwaj",
    url: "https://www.google.com/maps/contrib/103274212174111772702/reviews?hl=en-CA",
    rating: 5,
    topics: ["real-estate-transactions"],
    text: "The best legal services in around all of GTA. I had the closing of my house done through Jat law corporation in 2024. My whole experience was smooth and hassle free. Mr Rizwan dealt with the whole matter so professionally and accurately and till date it’s been 2 years and still If have any enquiries or questions or any legal issues, Mr Rizwan goes out of his way and help me out even with such busy routines. I would give 10 stars if there was option. I would recommend Jat Law for any sort of legal services at very reasonable cost and more importantly the reliability.",
  },
  {
    id: "khalid-elkhazeen",
    name: "Khalid Elkhazeen",
    url: "https://www.google.com/maps/contrib/114220165095946314924/reviews?hl=en",
    rating: 5,
    topics: ["general"],
    text: "We had an excellent experience working with Mr. Jat. He is extremely detail-oriented and took the time to meet with us in person, which made a big difference. He walked us through every step of the process with care and patience, even bringing up important points we hadn’t thought about. We truly felt supported and well-informed throughout. We were so lucky to have him on our side, and we will definitely continue working with him in the future. We highly recommend him to all our family and friends.",
  },
  {
    id: "tamara-shephard",
    name: "Tamara Shephard",
    url: "https://www.google.com/maps/contrib/111256501459190013257/reviews?hl=en-CA",
    rating: 5,
    topics: ["real-estate-transactions"],
    text: "Recently, I secured Jat Law through a friend's referral for the closings of my house sale and new home purchase. I'm incredibly grateful to lawyer Rizwan Jat. He is hardworking, dedicated, and professional. He explains legal processes and documents in layman's language. He is accessible directly by phone and email. I felt confident I was in great hands with Rizwan as my lawyer. I'll be highly recommending Rizwan to any of my family and friends selling or buying a home.",
  },
  {
    id: "jara-mae",
    name: "Jara Mae",
    url: "https://www.google.com/maps/contrib/108572664964407915597/reviews?hl=en-CA",
    rating: 5,
    topics: ["real-estate-transactions"],
    text: "We worked with Rizwan on our mortgage renewal/refinance process that needed a quick turnaround for processing. The two main things you hope for in a lawyer is knowledgeable and responsive and Rizwan did both exceptionally. From the moment I called, I felt reassured that he understood the process matched against my circumstances. His quoted pricing was accurate for the final costs. He provided many updates along the way and kept up communication (both phone and email) with my constant request for updates. We were more than pleased with his support. We will certainly reach out in the future for legal needs.",
  },
];

/** Short verbatim excerpts for the About page. */
export const highlights = [
  { quote: "Professional, knowledgeable, and incredibly dedicated.", name: "Nihar Raval" },
  { quote: "He is extremely detail-oriented and took the time to meet with us in person.", name: "Khalid Elkhazeen" },
  { quote: "He explains legal processes and documents in layman's language.", name: "Tamara Shephard" },
  { quote: "His quoted pricing was accurate for the final costs.", name: "Jara Mae" },
];

export const reviewsFor = (slug: string, max = 3): Review[] => {
  const topical = reviews.filter((r) => r.topics.includes(slug));
  const general = reviews.filter((r) => r.topics.includes("general"));
  return [...topical, ...general].slice(0, max);
};
