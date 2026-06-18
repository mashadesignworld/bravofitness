# 🏋️‍♂️ BRAVO GYM — Premium Fitness Ecosystem

BRAVO Gym is a high-impact, modern single-page web application engineered for elite athletic training facilities. Inspired by luxury editorial layouts, the user interface features clean monochromatic sections, stark high-contrast typography, and fluid transitions built with Vue 3 and Tailwind CSS.

---

## ✨ Features

*   **Immersive Hero Interface:** A full-screen atmospheric landing deck that spans cleanly behind a blurred, low-profile navigation header.
*   **Luxury Editorial Tour:** A stark, high-contrast white content block breaking up the page to showcase world-class facilities and recovery zones.
*   **Dynamic Program Grid:** An interactive multi-column discipline hub showcasing training cards that reveal program specs and shift from grayscale to full color on cursor focus.
*   **Fluid Responsive Flow:** Tailored breakpoint distribution ensuring pixel-perfect viewing across smartphone devices and high-resolution monitors.

---

## 🛠️ Tech Stack

*   **Framework:** Vue 3 (Composition API with `<script setup>`)
*   **Build Tool:** Vite
*   **Styling Engine:** Tailwind CSS
*   **Language:** TypeScript
*   **Design Paradigm:** Utility-First CSS & BEM-optimized component structures

---

## 📂 Project Architecture

```text
src/
├── assets/            # High-impact local media assets (strength, cardio, recovery)
├── components/        # Isolated UI components
│   ├── Navbar.vue     # Absolute overlay navigation bar with mobile support
│   ├── Hero.vue       # Immersive cinematic landing section
│   ├── FacilityTour.vue # High-contrast editorial split showcase
│   └── Programs.vue   # Dynamic program cards with smooth hover states
├── App.vue            # Root view canvas mounting configuration
└── main.ts            # Application bootstrapper
