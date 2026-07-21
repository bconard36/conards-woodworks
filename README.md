# Conard's Woodworks 
A React application for my dad's woodworking business - designed and coded from scratch. Working with
a real-life client, I developed an application that allows customers, vendors, or just curious DIY-ers
to examine the work of a local, veteran-owned, small business. 

**Live Site:** https://conards-woodworks.vercel.app/

# Folder List 
- public: houses all image assets to be served 
- src: parent folder for components, stylesheets, and assets
    - components: parent folder for individual components
        - About.jsx
        - CategoryFilter.jsx
        - Contact.jsx
        - Footer.jsx
        - Gallery.jsx
        - Home.jsx 
        - ImageCycler.jsx
        - NavBar.jsx
        - NotFound.jsx
        - Product.jsx
        - ProductCard.jsx
        - Products.jsx 
        - StatsStrip.jsx
    - data: parent folder for db.json file 
        - db.json
    - email: parent folder for EmailJS logic 
        - emailService.js
        - emailTemplates.js
    - hooks: parent folder for reusable custom hooks
        - useClickOutside.js
    - styles: houses all component-specific style sheets and one global stylesheet
        - About.css
        - Contact.css
        - Footer.css
        - global.css
        - Home.css
        - ImageCycler.css
        - NavBar.css
        - NotFound.css
        - Products.css
        - StatsStrip.css 
    - App.jsx
    - main.jsx
- .gitignore
- eslint.config.js 
- index.html
- package-lock.json
- package.json
- README.md
- vite.config.js

# Features 
- Category-filtered image gallery 
- Product-to-contact-form state handoff 
- Custom 404 page
- EmailJS auto reply
- Fully responsive nav bar with scroll-locking overlay

# How To Run 
- _To view the production build locally_:
    - npm run build
    - npm run preview
    - Open a browser and navigate to the URL shown in the terminal (typically http://localhost:4173/)

- _To launch via VS Code_:
    - Open the root folder in VS Code (or preferred code editor) 
        - conards-woodworks 
    - Open a terminal window (CTRL + `)
        - _To install the necessary dependencies_: npm install  
        - _To start the application_: npm run dev 
    - Open a browser of your choice and navigate to: 
        - http://localhost:5173/

# When Running
- Once a browser window is opened with the above URL, the home page of Conard's Woodworks will appear. 
- This page features: 
    - Mobile responsiveness and viewport-specific layouts 
    - Dynamic content and page rendering based on component states
    - EmailJS functionality with form submission 

# What I Learned / Built From Scratch

This project took me through the full pipeline of client work — not just writing 
code, but translating a real conversation with a real client (my dad) into a 
lo-fi wireframe, then a hi-fi mockup, then a working application, with actual 
feedback and revisions along the way. A few specific things I built and 
understood for the first time on this project:

- **Lifting state up**: the gallery's category filter buttons and the product 
grid are separate components, but they both need to know the "active 
category" at the same time. I learned to hold that state in their shared 
parent (`Gallery.jsx`) and pass it down as props, rather than trying to 
manage it in either child independently.

- **CSS positioning contexts**: I used `position: sticky` on the nav bar and 
`position: absolute` with `top: 100%` on the dropdown menu, so the menu 
always sits flush against the nav bar automatically — instead of hardcoding 
a pixel value that would break the moment the nav bar's height changed.

- **Scroll locking**: when the mobile nav is open, the page underneath no 
longer scrolls, using a `useEffect` tied to the menu's open state.

- **Cross-page state handoff with React Router**: clicking "Request a Custom 
Quote" on a product navigates to the Contact page and pre-fills the form 
with that product's name, using React Router's `navigate(path, { state })` 
API — so state travels between pages without needing a global store.

- **Client communication**: this was my first project built around actual 
back-and-forth with a client rather than my own assumptions — reworking 
copy for tone and clarity while preserving my dad's voice, adjusting the 
gallery structure based on what he actually wanted to showcase, and 
iterating on visual design until it stopped looking like a generic template 
and started looking like *his* shop.

# Tools Used 
- React + Vite
- vite-plugin-svgr (SVG as React components)
- EmailJS (@emailjs/browser)
- Vercel (deployment)
- VS Code + GitHub
