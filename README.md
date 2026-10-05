# Raw Business storefront (Next.js 15)

## Run it
```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start   # production
```
Deploy free on Vercel: push to GitHub, import the repo at vercel.com, then point rawbusinesspvt.com to it.

## Where to change things
- `lib/products.ts`: every product (name, price, MRP, sizes, colours, photo) plus store contact details.
- Photos: put your own shots in `public/products/` and set `image: "/products/your-file.jpg"`. The current photos are Unsplash demo images.
- `lib/policies.ts`: shipping, returns and terms text (taken from your current site).
- `app/globals.css`: colours and fonts (brand pink is `--color-gulabi`).
- `components/HeroTabs.tsx`: the Women / Men / Kids hero banners.

## Custom t-shirt business
- `lib/custom.ts`: **edit first.** Minimum order (`minQty`), turnaround time, who you print for, both slider lists, the 4 steps, garment types and print styles.
- `components/GridSlideshow.tsx`: hero bento grid. Each tile cycles its own photos; change the `shots` lists to your real order photos.
- `components/BoxSlider.tsx`: the two square-image sliders ("made for the game" and "fest & campus drops").
- `components/QuoteForm.tsx`: quote form. Opens WhatsApp with name, team, item, quantity and date filled in.
- `app/globals.css`: bright palette, `.glass` / `.glass-soft` glassmorphism, `.hero-grid` layout (rearrange tiles by editing the grid areas).
- The retail store (Women / Men / Kids, product pages, cart) is still there for ready-made stock.

## Checkout
The bag places orders over WhatsApp (pre-filled with items, sizes and total) to +91 93525 04482.
To take online payments instead, connect Razorpay or Cashfree in `app/cart/page.tsx`, or move the catalogue to Shopify / WooCommerce and use this as a headless front end.
