# Audiophile E-commerce

A multi-page e-commerce storefront for [Audiophile](https://www.frontendmentor.io/challenges/audiophile-ecommerce-website-C8cuSd_wx), the Frontend Mentor challenge for browsing and purchasing premium headphones, speakers, and earphones.

Built with React, Vite, and React Router.

## Features

- Responsive home, category, product, and checkout pages
- Product catalog driven by local JSON data (`src/data.json`)
- Shopping cart with add, remove, quantity updates, and cart popup
- Shared layout with navbar, footer, and branding sections
- Checkout form with billing, shipping, and payment options (including cash on delivery)

## Tech stack

- [React 19](https://react.dev/)
- [Vite](https://vite.dev/)
- [React Router](https://reactrouter.com/)
- CSS Modules

## Getting started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Install and run

```bash
npm install
npm run dev
```

Then open the local URL shown in the terminal (usually `http://localhost:5173`).

### Other scripts

| Command         | Description                          |
| --------------- | ------------------------------------ |
| `npm run dev`   | Start the development server         |
| `npm run build` | Create a production build            |
| `npm run preview` | Preview the production build locally |
| `npm run lint`  | Run ESLint                           |

## Project structure

```
src/
├── components/     # Reusable UI (Button, ItemCard, TextInput, …)
├── context/        # Cart context provider
├── layouts/        # Navbar, Footer, Cart popup, shared page shell
├── pages/          # Home, Headphones, Speakers, Earphones, Product, Checkout
├── svg/            # Icon components
├── data.json       # Product catalog
├── App.jsx         # Route definitions
└── index.jsx       # App entry point
```

## Routes

| Path                    | Page                          |
| ----------------------- | ----------------------------- |
| `/`                     | Home                          |
| `/headphones`           | Headphones category           |
| `/speakers`             | Speakers category             |
| `/earphones`            | Earphones category            |
| `/:category/:slug`      | Individual product page       |
| `/checkout`             | Checkout                      |

## Challenge

This project is a solution to the [Audiophile e-commerce website](https://www.frontendmentor.io/challenges/audiophile-ecommerce-website-C8cuSd_wx) challenge on Frontend Mentor.
