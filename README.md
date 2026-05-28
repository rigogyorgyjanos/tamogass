# Krikal Csaladi — Támogatói oldal

Személyes adománygyűjtő oldal, ahol látogatók előre összeállított csomagokkal tudnak Revolut-on keresztül támogatni.

## Tech stack

- **Vite** + **React** + **TypeScript**
- **Tailwind CSS** — stílusok
- **React Router v6** — oldalak közti navigáció (`/` és `/koszonom`)
- **Lucide React** — ikonok

## Indítás

```bash
npm install
npm run dev
```

Az oldal elérhető: `http://localhost:5173`

## Build & deploy (Vercel)

```bash
npm run build   # dist/ mappába buildel
```

Vercel automatikusan felismeri a Vite projektet. A `vercel.json` kezeli a React Router client-side routing-ját.

## Csomagok szerkesztése

Minden csomag a [`src/config/packages.config.ts`](src/config/packages.config.ts) fájlban van definiálva.

```ts
{
  id: 'egyedi-id',        // URL-safe, egyedi azonosító
  name: 'Csomag neve',
  description: 'Rövid leírás.',
  price: 5000,            // forintban
  icon: Utensils,         // Lucide React ikon
  popular: true,          // opcionális — kiemelt kártya
  badge: 'Legnépszerűbb', // opcionális — badge szöveg
}
```

Csomag hozzáadásához: adj hozzá egy új objektumot a `PACKAGES` tömbhöz, és importáld a kívánt ikont a `lucide-react` csomagból.

## Revolut

A fizetési link formátuma: `https://revolut.me/gyrgyjde5i?amount=XXXXX&currency=HUF`

Az összeg **fillérben** értendő (1 Ft = 100 fillér), a konverziót a `getRevolutLink()` függvény végzi automatikusan — a `price` értéke mindig forintban adandó meg.

## Projekt struktúra

```
src/
├── config/
│   └── packages.config.ts   ← csomagok szerkesztése itt
├── components/
│   ├── PackageCard.tsx
│   └── Footer.tsx
└── pages/
    ├── Home.tsx
    └── ThankYou.tsx
```
