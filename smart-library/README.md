# SmartLibrary – Startup-Grade Library Management System

SmartLibrary is a production-style full-stack project foundation you can evolve into a SaaS platform.

## Tech Stack
- **Frontend:** React + Vite
- **Backend:** Node.js + Express
- **Database:** MongoDB
- **Auth:** JWT
- **Charts:** Chart.js

## Project Structure

```
smart-library
├── backend
│   ├── server.js
│   ├── config/db.js
│   ├── middleware/auth.js
│   ├── models/{Book,User,Transaction}.js
│   └── routes/{auth,books,users,transactions}.js
├── frontend
│   ├── index.html
│   └── src
│       ├── main.jsx
│       ├── App.jsx
│       ├── pages/{Login,Dashboard,Books,Members}.jsx
│       ├── components/{Sidebar,Navbar}.jsx
│       └── api.js
└── package.json
```

## Quick Start

### 1) Backend
```bash
cd backend
cp .env.example .env
npm install
npm run dev
```

### 2) Frontend
```bash
cd frontend
npm install
npm run dev
```

Backend runs on `http://localhost:5000` and frontend on `http://localhost:5174`.

## API Endpoints
- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/books`
- `POST /api/books`
- `GET /api/users`
- `GET /api/transactions`
- `POST /api/transactions/issue`
- `POST /api/transactions/return/:id`

## Startup Roadmap
1. Core system ✅
2. Mobile-responsive UI
3. Multi-tenant SaaS architecture
4. Mobile app
5. Email reminders, reservations, and online fine payments

## Deployment
- Frontend: Vercel
- Backend: Render
- Database: MongoDB Atlas
