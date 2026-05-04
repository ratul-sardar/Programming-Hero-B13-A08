# 🐾 Qurbani Animals

A modern web application for browsing and booking Qurbani animals, built with Next.js and HeroUI.

## 🌐 Live Demo

[View Live Site](https://programming-hero-b13-a08.vercel.app/)

## ✨ Features

- **Animal Listings** - Browse available Qurbani animals with detailed information
- **Animal Details** - View comprehensive details for each animal
- **Booking System** - Book animals directly through the platform
- **User Authentication** - Secure login and registration powered by Better Auth
- **User Dashboard** - Manage your profile and bookings
- **Qurbani Tips** - Helpful guides for Qurbani
- **FAQ Section** - Common questions answered
- **Responsive Design** - Works seamlessly across all devices
- **Smooth Animations** - Powered by React Spring
- **Loading States** - Polished loading and 404 pages

## 🛠️ Tech Stack

- **Framework:** Next.js 16
- **UI Library:** React 19
- **Styling:** Tailwind CSS v4
- **UI Components:** HeroUI
- **Authentication:** Better Auth with MongoDB
- **Database:** MongoDB
- **Animations:** React Spring
- **Icons:** React Icons & Gravity UI Icons
- **Deployment:** Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- MongoDB instance
- Bun or npm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/ratul-sardar/Programming-Hero-B13-A08.git
cd Programming-Hero-B13-A08
```

2. Install dependencies:

```bash
npm install
# or
bun install
```

3. Set up environment variables:

Create a `.env` file in the root directory with the required variables for MongoDB and Better Auth.

4. Run the development server:

```bash
npm run dev
# or
bun dev
```

Open [http://localhost:3002](http://localhost:3002) to view it in your browser.

## 📁 Project Structure

```
src/
├── app/
│   ├── api/              # API routes & auth handlers
│   ├── animals/          # Animal listing & details pages
│   ├── login/            # Login page
│   ├── register/         # Registration page
│   ├── user/             # User dashboard & profile update
│   ├── layout.js         # Root layout
│   └── page.js           # Home page
├── components/
│   ├── shared/           # Reusable components (Navbar, Footer, Hero, etc.)
│   └── ui/               # Feature-specific components
└── lib/                  # Auth configuration & utilities
```

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on port 3002 |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

## 📄 License

This project is part of the Programming Hero B13 course.
