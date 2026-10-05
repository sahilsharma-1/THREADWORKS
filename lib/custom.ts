// Custom / bulk order settings. Edit these to match how you actually work.
export const CUSTOM = {
  minQty: 10,              // smallest order you accept
  turnaround: "7–10 days", // typical time from approved design to dispatch
};

export const img = (id: string, w = 900) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const AUDIENCES = [
  { key: "sports", title: "Sports teams", note: "Jerseys with names, numbers and sponsor logos", img: "1526232761682-d26e03ac148e", color: "var(--color-lime)" },
  { key: "college", title: "College fests", note: "Fest merch, fresher and farewell tees, society hoodies", img: "1529156069898-49953e39b3ac", color: "var(--color-pink)" },
  { key: "school", title: "Schools", note: "House colour tees, sports day kits, annual day", img: "1509062522246-3755977927d7", color: "var(--color-sun)" },
  { key: "corporate", title: "Companies and events", note: "Team polos, offsites, marathons, launch events", img: "1586363104862-3a5e2ab60d99", color: "var(--color-blue)" },
];

export const SPORTS_SLIDES = [
  { title: "Football", sub: "Jersey and shorts sets", img: "1517466787929-bc90951d0974", color: "var(--color-lime)" },
  { title: "Cricket", sub: "Whites and coloured kits", img: "1624526267942-ab0ff8a3e972", color: "var(--color-sun)" },
  { title: "Basketball", sub: "Reversible vests", img: "1546519638-68e109498ffc", color: "var(--color-orange)" },
  { title: "Running and marathons", sub: "Dri-fit event tees", img: "1552674605-db6ffd4facb5", color: "var(--color-blue)" },
  { title: "Cycling clubs", sub: "Full sublimation jerseys", img: "1517649763962-0c623066013b", color: "var(--color-pink)" },
  { title: "Kids teams", sub: "School and academy kits", img: "1526232761682-d26e03ac148e", color: "var(--color-lilac)" },
  { title: "Swimming", sub: "Team tees and hoodies", img: "1530549387789-4c1017266635", color: "var(--color-lime)" },
];

export const FEST_SLIDES = [
  { title: "College fests", sub: "Crew and volunteer tees", img: "1492684223066-81342ee5ff30", color: "var(--color-pink)" },
  { title: "Concert nights", sub: "Merch that sells out", img: "1533174072545-7a4b6ad7a6c3", color: "var(--color-blue)" },
  { title: "Farewell and freshers", sub: "Batch tees with everyone's name", img: "1511632765486-a01980e01a18", color: "var(--color-sun)" },
  { title: "Graduation", sub: "Class of 2026 hoodies", img: "1541339907198-e08756dedf3f", color: "var(--color-lime)" },
  { title: "Clubs and societies", sub: "Hoodies, polos, tees", img: "1517486808906-6ca8b3f04846", color: "var(--color-orange)" },
  { title: "Hackathons and conferences", sub: "Organiser and attendee tees", img: "1505373877841-8d25f7d46678", color: "var(--color-lilac)" },
  { title: "Office teams", sub: "Polos and event tees", img: "1600880292203-757bb62b4baf", color: "var(--color-pink)" },
];

export const STEPS = [
  { title: "Share your idea", body: "Send your logo, a sketch or just the vibe on WhatsApp. Tell us the quantity and date." },
  { title: "Free mockup", body: "We send a digital mockup with colours and print placement. Change it until it feels right." },
  { title: "Confirm sizes", body: "Share the size list and names or numbers. Pay an advance to lock your slot." },
  { title: "Printed and delivered", body: `Your order is printed, checked piece by piece and shipped in about ${CUSTOM.turnaround}.` },
];

export const GARMENTS = ["Round neck tees", "Oversized tees", "Polo tees", "Sports jerseys", "Hoodies", "Sweatshirts", "Track pants"];
export const PRINTS = ["Screen print", "DTF print", "Full sublimation", "Embroidery", "Name and number"];
export const OCCASIONS = ["Sports team", "College fest", "School", "Farewell or freshers", "Company or event", "Other"];
