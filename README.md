# Personal Portfolio Website

A modern, fast and fully responsive personal portfolio website built with **vanilla HTML, CSS and JavaScript**.

This project focuses on **clarity, performance and maintainability**, avoiding unnecessary abstractions while still following a scalable frontend architecture.

---

## ✨ Features

- Modular and scalable CSS architecture
- Fully responsive, mobile-first design
- Featured content support (Articles)
- Dynamic rendering using vanilla JavaScript
- Portfolio modal for project details
- Smooth scrolling and subtle UI interactions
- No build step, no framework, no runtime dependencies

---

## 🧱 Architecture Overview

The project is structured around **separation of concerns**, keeping responsibilities clearly defined:

- **Base styles**  
  Normalize browser behavior and provide a clean foundation (reset, grid, helpers).

- **Layout styles**  
  Define global structural patterns such as sections, headers and shared layouts.

- **Component styles**  
  Isolated, reusable UI elements like buttons, modals, icons and utilities.

- **Section styles**  
  Page-specific styling for Intro, About, Resume, Portfolio, Articles, Contact and Footer.

- **JavaScript modules**  
  Each major section that requires dynamic behavior is handled by its own script
  (portfolio, resume timeline, articles).

This approach keeps the codebase:
- Predictable
- Easy to reason about
- Simple to extend without side effects

---

## 🧠 Content Management (Vanilla JS)

Instead of a CMS or backend, all dynamic content is managed via **plain JavaScript data objects**.

Examples:
- Portfolio projects
- Resume timeline entries
- Articles list

Each dataset is rendered at runtime, allowing easy updates without touching HTML markup.

Benefits:
- Static hosting friendly
- No backend required
- SEO-friendly content
- Full control over rendering logic

---

## ❓ Why No Framework?

This project intentionally avoids frameworks like React, Vue or Angular.

### Reasons:

- ⚡ **Performance**
  - Zero runtime framework overhead
  - Faster initial load
- 🧠 **Clarity**
  - Explicit logic, no hidden abstractions
  - Easy to understand for any frontend developer
- 🧼 **Maintainability**
  - Fewer dependencies
  - Less breaking change risk
- 🌍 **Portability**
  - Runs on any static hosting
  - No build tools or configuration needed

Frameworks are powerful tools —  
but **not every project needs them**.

This website demonstrates that modern UX and clean architecture can be achieved
with **fundamentals done right**.

---

## 🧑‍💻 Technologies Used

- HTML5
- CSS3 (Grid, Flexbox, modern responsive techniques)
- Vanilla JavaScript (ES6+)
- Font Awesome
- Google Fonts

---

## 📦 Deployment

The project can be deployed on any static hosting provider:

- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages

No build step required.

---

## 👋 About Me

I'm **Gokhan Yilmaz**, a Native Android Developer with backend experience.
I enjoy building clean, maintainable software and sharing what I learn through technical articles.

- LinkedIn: https://www.linkedin.com/in/yilmaz-gokhan/
- Medium: https://medium.com/@yilmazgokhan
- GitHub: https://github.com/yilmazgokhan
