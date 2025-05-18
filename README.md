# pftracker

# PFTracker UI Clone

A **pixel-perfect, open-source UI clone** of the public landing page and dashboard for [PFTracker](https://tracker.project-flight.com/). This project is for learning, UI/UX inspiration, and demonstration purposes only.

---

## Table of Contents
- [About This Project](#about-this-project)
- [Screenshots](#screenshots)
- [Demo](#demo)
- [Features](#features)
- [What Is NOT Included & Why](#what-is-not-included--why)
- [Technical Stack](#technical-stack)
- [Folder Structure](#folder-structure)
- [Getting Started](#getting-started)
- [FAQ](#faq)
- [Contributing](#contributing)
- [Contact](#contact)
- [Legal / Disclaimer](#legal--disclaimer)

---

## About This Project
PFTracker is a modern web-based flight tracker for Roblox, with a beautifully crafted, dark-themed dashboard and intuitive navigation. **This repository provides a React-based recreation of the dashboard UI** for reference, prototyping, or frontend experiments. 

- **No real data, APIs, or backend**—this is *just* the visual/SPA shell.
- **Main goals:** learning, UI mimicry, code inspiration for dashboards.

## Screenshots
> Screenshots go here. (Paste or drag images of the clone in this section after running locally!)

---

## Demo
To try the live site this clone is based on, visit: https://tracker.project-flight.com/

---

## Features
- **Pixel-accurate navigation bar with logo, support link, login button**
- **Left sidebar** with icon buttons
- "Most Tracked Flights" leaderboard with real card layout
- **Map panel design** (static only, accurate color and style)
- **Top action/search bar**: blue "Public ATC Server" button, input, dropdown
- **Route-based navigation** using React Router (dashboard, My Flight, Flight Plan, Support)
- **Proper hover/focus effects** on clickable elements, just like the original
- **Inter font fully included** for authentic typography
- **All SVG icons and styles**
- **Desktop layout first**

---

## What Is NOT Included & Why

| Feature/Area         | Included?    | Explanation                                                                                                                    |
|--------------------- |------------- |-------------------------------------------------------------------------------------------------------------------------------|
| Live flight data     | ❌           | No backend, no API keys. Data is private, proprietary, or not public.                                                          |
| Real interactive map | ❌           | The map panel is a static container only. No real map, markers, or geodata shown.                                              |
| Login/auth           | ❌           | Button is non-functional. No login modal/auth logic to avoid imitating real PFTracker infrastructure without authorization.    |
| Search/filter logic  | ❌           | UI only; no implementation. Requires backend access and logic not publicly available.                                          |
| Notifications/toasts | ❌           | No notification system. This requires a backend or client-side data/state, plus design access not public.                      |
| Real sub-pages       | ❌           | "My Flight", "Flight Plan", and "Support" are placeholders—true internal content is not available without login/screenshots. |
| Mobile optimization  | 🚧           | Best effort for desktop. No deep mobile testing or tailoring performed.                                                        |
| Real user/account    | ❌           | User logic is outside of scope/intent.                                                                                         |
| Proprietary content  | ❌           | No attempt is made to copy backend logic, private APIs, or any IP not visible on public pages.                                 |

**Why:**
- PFTracker is a proprietary app, and this clone is for UI inspiration or frontend prototyping only; no attempt is made to copy non-public features, business logic, or circumvent logins.
- Cloning backend integrations or handling user data would raise legal, ethical, and security concerns for both projects.
- If you are affiliated with PFTracker and want features added/removed, contact rzjx (see below).

---

## Technical Stack
- **React 18 + Vite** – modern JavaScript SPA foundation
- **TypeScript** – for type safety
- **Tailwind CSS** – utility-first styling, exactly matching the PFTracker look
- **shadcn/ui** – component primitives for consistency
- **react-router-dom** – multi-page SPA navigation
- **Inter font** and **SVG assets** from the original site

---

## Folder Structure
```
pftracker-clone/
├── public/             # static assets
├── src/
│   ├── App.tsx        # main app and route logic
│   ├── index.css      # global styles, font import, tailwind
│   ├── pages/         # page components (if you add more)
│   └── ...            # additional UI/layout code
├── tailwind.config.js
├── package.json
├── README.md          # You are here!
└── ...
```

---

## Getting Started

1. **Clone this repo**
   ```sh
   git clone <your-clone-url>
   cd pftracker-clone
   ```
2. **Install dependencies:**
   ```sh
   bun install # or npm install or pnpm install
   ```
3. **Run the local dev server:**
   ```sh
   bun run dev
   # or npm run dev
   ```
4. **Visit [http://localhost:5173/](http://localhost:5173/) in your browser**

---

## FAQ

### Q: Will this ever have real PFTracker functionality?
A: Not unless you own/provide backend endpoints, data, or API keys legally. This project’s intention is strictly for open UI demo purposes.

### Q: Can I use this for my own (non-Roblox) project?
A: Yes! Use the codebase for reference, learning, or remixes—just avoid misrepresenting it as the real PFTracker or violating any copyrights.

### Q: Can the “Login” button be made functional?
A: You’d need to implement your own authentication hook-up, as this clone contains no such wiring.

### Q: Who owns the PFTracker brand or any assets?
A: All brand assets, logos, and original backend/content are property of PFTracker and its creators. This clone is for reference only.

### Q: How can I add more real pages?
A: Provide screenshots or content of any internal/protected pages and I can help add pixel-perfect UI for those layouts as well.

### Q: Can I contribute improvements?
A: Forks and pull requests for UX improvements, bugfixes, or mobile tweaks are welcome—see CONTRIBUTING below.

---

## Contributing
- See a bug or pixel-off margin? Open an issue or submit a PR.
- Want to add support for mobile/tablet breakpoints? PR welcome!
- Want to make UX buttery-smooth? Go for it (so long as the main layout remains true to PFTracker’s public look).

---

## Contact
For all questions, suggestions, or if you are affiliated with PFTracker and want changes:
**Message `rzjx` on Discord.**

---

## Legal / Disclaimer
- This project is **not** affiliated with, endorsed by, or officially supported by the creators/owners of PFTracker or Project Flight.
- All trademarks, logos, and proprietary language or designs observed on tracker.project-flight.com belong to their respective owners.
- This repository exists for UI/UX reference, coding education, and legal fair use only.
- If you represent PFTracker and wish this clone to be removed, updated, or credited differently, please contact `rzjx` by Discord immediately.
