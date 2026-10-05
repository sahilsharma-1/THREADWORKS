import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/cart";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

const bricolage = Bricolage_Grotesque({ subsets: ["latin"], axes: ["opsz", "wdth"], variable: "--font-bricolage", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://rawbusinesspvt.com"),
  title: { default: "Raw Business | Custom t-shirts for teams, colleges, schools and fests", template: "%s | Raw Business" },
  description: "Custom printed t-shirts, jerseys and hoodies for sports teams, college fests, schools and companies. Free mockup, bulk pricing, printed in Jaipur and shipped across India.",
  openGraph: { siteName: "Raw Business", locale: "en_IN", type: "website" },
};

export const viewport: Viewport = { themeColor: "#ffffff", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={bricolage.variable}>
      <body>
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
