export type HoursRow = {
  day: string;
  short: string;
  /** 24-hour clock, America/Toronto. null = closed */
  open: number | null;
  close: number | null;
  label: string;
};

export const site = {
  name: "Jat Law Professional Corporation",
  short: "Jat Law",
  descriptor: "Barrister & Solicitor",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.jatlawpc.com").replace(/\/$/, ""),
  phone: { display: "(647) 748-3279", href: "tel:+16477483279" },
  email: "info@jatlawpc.com",
  address: {
    line1: "West Tower, 90 Burnhamthorpe Rd W",
    line2: "Suite 1400 (14th Floor)",
    line3: "Mississauga, ON L5B 3C3",
    street: "90 Burnhamthorpe Rd W, Suite 1400",
    locality: "Mississauga",
    region: "ON",
    postal: "L5B 3C3",
  },
};

const mapQuery = "90 Burnhamthorpe Rd W, Suite 1400, Mississauga, ON L5B 3C3";
export const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`;
export const mapsEmbed = `https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`;

export const hours: HoursRow[] = [
  { day: "Monday", short: "Mon", open: 10, close: 18, label: "10 a.m. – 6 p.m." },
  { day: "Tuesday", short: "Tue", open: 9, close: 18, label: "9 a.m. – 6 p.m." },
  { day: "Wednesday", short: "Wed", open: 9, close: 18, label: "9 a.m. – 6 p.m." },
  { day: "Thursday", short: "Thu", open: 9, close: 18, label: "9 a.m. – 6 p.m." },
  { day: "Friday", short: "Fri", open: 10, close: 18, label: "10 a.m. – 6 p.m." },
  { day: "Saturday", short: "Sat", open: null, close: null, label: "Closed" },
  { day: "Sunday", short: "Sun", open: null, close: null, label: "Closed" },
];

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

/** What clients say they value most (drawn from the reviews). Used on Home. */
export const values = [
  {
    icon: "file",
    title: "Plain-language advice",
    text: "Every document and every step explained in terms you can follow, so you always know where you stand.",
  },
  {
    icon: "phone",
    title: "Direct access to your lawyer",
    text: "Reach us by phone or email and get updates without having to chase them.",
  },
  {
    icon: "shield",
    title: "Attention to detail",
    text: "Careful review of every agreement, filing and deadline, because small errors become expensive ones.",
  },
  {
    icon: "list",
    title: "Clear, upfront quotes",
    text: "You will know what to expect on fees before the work begins.",
  },
];
