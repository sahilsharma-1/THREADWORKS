export type Gender = "women" | "men" | "kids";

export type Product = {
  slug: string;
  name: string;
  gender: Gender;
  category: string;
  price: number;
  mrp?: number;
  image: string;
  colors: { name: string; hex: string }[];
  sizes: string[];
  tag?: "New" | "Best seller" | "Limited";
  fabric: string;
  description: string;
};

// Demo photography. Replace with your own shots, e.g. "/products/black-printed-tee.jpg"
const u = (id: string) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=900&q=80`;

const ADULT = ["S", "M", "L", "XL", "XXL"];
const KIDS = ["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-11Y"];

export const products: Product[] = [
  // Men
  { slug: "black-printed-t-shirt-men", name: "Printed Crew Neck T-Shirt", gender: "men", category: "T-Shirts", price: 1499, mrp: 1999, image: u("1618354691373-d851c5c3a990"), colors: [{ name: "Black", hex: "#1b1b1b" }, { name: "White", hex: "#f7f7f5" }], sizes: ADULT, tag: "Best seller", fabric: "100% cotton, 180 GSM", description: "A heavyweight cotton tee with a small chest print. Holds its shape wash after wash." },
  { slug: "essential-white-t-shirt", name: "Essential Cotton T-Shirt", gender: "men", category: "T-Shirts", price: 599, image: u("1521572163474-6864f9cf17ab"), colors: [{ name: "White", hex: "#f7f7f5" }, { name: "Grey", hex: "#9a9a98" }, { name: "Navy", hex: "#22304d" }], sizes: ADULT, fabric: "100% combed cotton", description: "The everyday tee. Soft combed cotton, regular fit, ribbed neckline." },
  { slug: "graphic-oversized-t-shirt", name: "Oversized Graphic T-Shirt", gender: "men", category: "T-Shirts", price: 899, mrp: 1199, image: u("1576566588028-4147f3842f27"), colors: [{ name: "Beige", hex: "#e4dccb" }], sizes: ADULT, tag: "New", fabric: "100% cotton, 220 GSM", description: "Dropped shoulders, boxy fit and a bold front graphic." },
  { slug: "contrast-stitch-t-shirt", name: "Contrast Stitch T-Shirt", gender: "men", category: "T-Shirts", price: 799, image: u("1622519407650-3df9883f76a5"), colors: [{ name: "Black", hex: "#1b1b1b" }], sizes: ADULT, tag: "New", fabric: "Cotton blend", description: "Relaxed tee finished with white contrast piping along the seams." },
  { slug: "printing-hoodie-unisex", name: "Fleece Pullover Hoodie", gender: "men", category: "Hoodies", price: 1200, mrp: 1699, image: u("1556821840-3a63f95609a7"), colors: [{ name: "Grey melange", hex: "#a8a9ab" }, { name: "Black", hex: "#1b1b1b" }], sizes: ADULT, tag: "Best seller", fabric: "Cotton-poly brushed fleece", description: "Warm brushed fleece inside, kangaroo pocket, lined hood. Fits men and women." },
  { slug: "crew-neck-sweatshirt", name: "Crew Neck Sweatshirt", gender: "men", category: "Hoodies", price: 999, image: u("1620799140408-edc6dcb6d633"), colors: [{ name: "White", hex: "#f7f7f5" }, { name: "Black", hex: "#1b1b1b" }], sizes: ADULT, fabric: "Cotton fleece", description: "A clean sweatshirt with ribbed cuffs and hem. Layers easily over a tee." },
  { slug: "slim-fit-stretch-jeans", name: "Slim Fit Stretch Jeans", gender: "men", category: "Jeans", price: 1599, mrp: 2199, image: u("1542272604-787c3835535d"), colors: [{ name: "Indigo", hex: "#2c3e63" }, { name: "Black", hex: "#1b1b1b" }], sizes: ["28", "30", "32", "34", "36"], fabric: "98% cotton, 2% elastane", description: "Stretch denim that moves with you. Slim through the thigh, tapered leg." },
  { slug: "formal-cotton-shirt", name: "Formal Cotton Shirt", gender: "men", category: "Shirts", price: 1099, image: u("1602810318383-e386cc2a3ccf"), colors: [{ name: "Slate", hex: "#5a6372" }, { name: "White", hex: "#f7f7f5" }, { name: "Wine", hex: "#5b2236" }], sizes: ADULT, fabric: "100% cotton poplin", description: "Crisp poplin shirt with a spread collar. Office to evening." },
  { slug: "tailored-blazer-suit", name: "Tailored Two-Piece Suit", gender: "men", category: "Partywear", price: 5999, mrp: 7499, image: u("1617137968427-85924c800a22"), colors: [{ name: "Navy", hex: "#22304d" }], sizes: ["38", "40", "42", "44"], tag: "Limited", fabric: "Poly-viscose suiting", description: "Single-breasted blazer with matching trousers. Ready for weddings and functions." },
  { slug: "faux-leather-biker-jacket", name: "Faux Leather Biker Jacket", gender: "men", category: "Jackets", price: 2499, image: u("1520975954732-35dd22299614"), colors: [{ name: "Black", hex: "#1b1b1b" }], sizes: ADULT, fabric: "PU leather, polyester lining", description: "Asymmetric zip, quilted lining and zip pockets." },

  // Women
  { slug: "anarkali-ethnic-gown", name: "Flared Anarkali Gown", gender: "women", category: "Ethnic", price: 2899, mrp: 3999, image: u("1583391733956-3750e0ff4e8b"), colors: [{ name: "Ivory", hex: "#efe9dc" }], sizes: ["XS", ...ADULT], tag: "New", fabric: "Georgette with lining", description: "A floor-length Anarkali with a full flare and sheer dupatta." },
  { slug: "silk-blend-saree", name: "Silk Blend Saree with Zari Border", gender: "women", category: "Ethnic", price: 3499, image: u("1610030469983-98e550d6193c"), colors: [{ name: "Plum", hex: "#4a2b55" }], sizes: ["Free size"], tag: "Limited", fabric: "Silk blend, zari border", description: "Rich plum saree with a gold zari border and unstitched blouse piece." },
  { slug: "cotton-frock-kurti-top", name: "Cotton Frock Kurti Top", gender: "women", category: "Kurtis", price: 749, mrp: 999, image: u("1496747611176-843222e1e57c"), colors: [{ name: "Cream", hex: "#ece4d2" }], sizes: ["XS", ...ADULT], fabric: "100% cotton", description: "Single-piece cotton top for regular wear. Wear it as a frock top or over jeans." },
  { slug: "graphic-crop-t-shirt-women", name: "Graphic Crop T-Shirt", gender: "women", category: "T-Shirts", price: 649, image: u("1503342217505-b0a15ec3261c"), colors: [{ name: "Black", hex: "#1b1b1b" }], sizes: ["XS", "S", "M", "L"], tag: "Best seller", fabric: "100% cotton", description: "Cropped, boxy tee with a playful front print." },
  { slug: "six-pocket-women-jeans", name: "Six Pocket Cargo Jeans", gender: "women", category: "Jeans", price: 1399, mrp: 1799, image: u("1594633312681-425c7b97ccd1"), colors: [{ name: "Blush", hex: "#d9a7a0" }, { name: "Indigo", hex: "#2c3e63" }], sizes: ["26", "28", "30", "32", "34"], fabric: "Cotton twill", description: "Relaxed cargo fit with six utility pockets and cuffed ankles." },
  { slug: "fleece-co-ord-set", name: "Fleece Hoodie and Jogger Set", gender: "women", category: "Co-ords", price: 1899, image: u("1515886657613-9f3515b0c78f"), colors: [{ name: "Mustard", hex: "#e2a92b" }], sizes: ["XS", "S", "M", "L", "XL"], tag: "New", fabric: "Cotton fleece", description: "A matching cropped hoodie and jogger. Sold as a set." },
  { slug: "checked-wool-blend-coat", name: "Checked Long Coat", gender: "women", category: "Jackets", price: 3299, image: u("1485968579580-b6d095142e6e"), colors: [{ name: "Green check", hex: "#2f4a44" }], sizes: ["S", "M", "L"], fabric: "Wool blend", description: "A longline coat in a deep green check. Built for Rajasthan winters." },
  { slug: "statement-party-tee", name: "Statement Party Tee", gender: "women", category: "Partywear", price: 899, image: u("1529139574466-a303027c1d8b"), colors: [{ name: "Red", hex: "#c0322c" }], sizes: ["XS", "S", "M", "L"], fabric: "Cotton jersey", description: "Bold red tee with a raised gold print. Pair with a jacket for nights out." },

  // Kids
  { slug: "kids-casual-tee-set", name: "Kids Henley and Tee Pack", gender: "kids", category: "T-Shirts", price: 699, mrp: 899, image: u("1503944583220-79d8926ad5e2"), colors: [{ name: "Oatmeal", hex: "#ddd5c4" }], sizes: KIDS, tag: "Best seller", fabric: "100% cotton", description: "Soft everyday cotton tops for school and play." },
  { slug: "kids-cardigan-party-set", name: "Kids Cardigan Party Set", gender: "kids", category: "Partywear", price: 1299, image: u("1519238263530-99bdd11df2ea"), colors: [{ name: "Navy", hex: "#22304d" }], sizes: KIDS, tag: "New", fabric: "Cotton knit", description: "Cardigan, shirt, bow tie and shorts. Ready for birthdays and functions." },
  { slug: "kids-printed-denim-shirt", name: "Kids Printed Denim Shirt", gender: "kids", category: "Shirts", price: 799, image: u("1596755094514-f87e34085b2c"), colors: [{ name: "Light denim", hex: "#6a87a8" }], sizes: KIDS, fabric: "Cotton chambray", description: "Lightweight chambray shirt with a small all-over print." },
  // From the current rawbusinesspvt.com catalogue
  { slug: "christmas-lights-graphic-party-t-shirt", name: "Christmas Lights Graphic Party T-Shirt", gender: "men", category: "T-Shirts", price: 899, image: u("1529139574466-a303027c1d8b"), colors: [{ name: "Red", hex: "#c0322c" }, { name: "Black", hex: "#1b1b1b" }], sizes: ADULT, tag: "New", fabric: "Cotton jersey", description: "A festive graphic tee for Christmas and New Year parties." },
  { slug: "printed-sleeveless-t-shirt-men", name: "Printed Sleeveless T-Shirt", gender: "men", category: "T-Shirts", price: 549, image: u("1503341504253-dff4815485f1"), colors: [{ name: "Black", hex: "#1b1b1b" }], sizes: ADULT, fabric: "100% cotton", description: "Sleeveless printed tee with deep armholes. Made for the gym and hot afternoons." },
  { slug: "distress-wide-leg-ice-blue-jeans", name: "Distressed Wide Leg Ice Blue Jeans", gender: "women", category: "Jeans", price: 1499, mrp: 1999, image: u("1541099649105-f69ad21f3246"), colors: [{ name: "Ice blue", hex: "#a9c1d9" }], sizes: ["26", "28", "30", "32", "34"], tag: "New", fabric: "Cotton denim", description: "Baggy wide-leg jeans with knee-cut distressing in a pale ice-blue wash." },
  { slug: "light-blue-straight-fit-jeans", name: "Light Blue Straight Fit Jeans", gender: "women", category: "Jeans", price: 1299, image: u("1475178626620-a4d074967452"), colors: [{ name: "Light blue", hex: "#8fb0cf" }], sizes: ["26", "28", "30", "32", "34"], fabric: "Cotton denim with stretch", description: "A clean straight leg for women and girls. Easy to dress up or down." },
  { slug: "striped-wide-leg-trousers", name: "Striped Wide Leg Trousers", gender: "women", category: "Co-ords", price: 1199, mrp: 1599, image: u("1509631179647-0177331693ae"), colors: [{ name: "Black and white", hex: "#2a2a2a" }], sizes: ["XS", "S", "M", "L", "XL"], tag: "New", fabric: "Viscose crepe", description: "High-rise, super wide and very swishy. Pair with a crop top." },
  { slug: "oversized-denim-jacket", name: "Oversized Denim Jacket", gender: "women", category: "Jackets", price: 1899, image: u("1517841905240-472988babdf9"), colors: [{ name: "Mid blue", hex: "#5b7fb0" }], sizes: ["S", "M", "L", "XL"], tag: "Best seller", fabric: "100% cotton denim", description: "Boxy, dropped-shoulder denim jacket. Throw it over a hoodie." },
  { slug: "ruffle-party-top", name: "Ruffle Sleeve Party Top", gender: "women", category: "Partywear", price: 1099, mrp: 1499, image: u("1581044777550-4cfa60707c03"), colors: [{ name: "Candy pink", hex: "#f2b6c9" }], sizes: ["XS", "S", "M", "L"], tag: "New", fabric: "Polyester organza", description: "Puffy ruffle sleeves in candy pink. Main character energy." },
  { slug: "utility-overshirt-men", name: "Utility Overshirt", gender: "men", category: "Shirts", price: 1399, image: u("1488161628813-04466f872be2"), colors: [{ name: "Black", hex: "#1b1b1b" }, { name: "Khaki", hex: "#b08b5a" }], sizes: ADULT, tag: "New", fabric: "Cotton twill", description: "A shirt that works as a light jacket. Two chest pockets, snap buttons." },
];


export const categoriesFor = (g: Gender) =>
  Array.from(new Set(products.filter((p) => p.gender === g).map((p) => p.category)));

export const byGender = (g: Gender) => products.filter((p) => p.gender === g);
export const bySlug = (s: string) => products.find((p) => p.slug === s);

export const inr = (n: number) =>
  "₹" + n.toLocaleString("en-IN", { maximumFractionDigits: 0 });

export const GENDERS: { key: Gender; label: string }[] = [
  { key: "women", label: "Women" },
  { key: "men", label: "Men" },
  { key: "kids", label: "Kids" },
];

export const STORE = {
  name: "Raw Business",
  legal: "RAW BUSINESS PVT (Sole Proprietorship of Mr Ajay Singh)",
  phone: "+91 93525 04482",
  whatsapp: "919352504482",
  email: "admin@rawbusinesspvt.com",
  gstin: "08LCKPS9190Q2Z1",
  address:
    "C-702, 7th Floor, C Block, Ravi Surya Residency, Girdharipura, Gandhi Path West, Vaishali Nagar, Jaipur, Rajasthan 302021",
  regAddress: "165, Semarda, Meena Mohalla, Semarda, Karauli, Rajasthan 322255",
  tagline: "Shop ethnic, casual and partywear for men, women and kids. Anytime, anywhere.",
  freeShippingAbove: 999,
};