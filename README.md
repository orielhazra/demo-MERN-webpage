# GetHyped MERN Codebase

A full MERN starter inspired by the layout and feel of `www.gethyped.nl`.

## Stack
- MongoDB + Mongoose
- Express + Node.js
- React + Vite
- Tailwind CSS
- Framer Motion

## Project Structure

```text
gethyped-mern/
  client/
  server/
  package.json
```

## Setup

### 1. Install dependencies
```bash
npm install
npm install --workspace client
npm install --workspace server
```

### 2. Environment variables
Create `server/.env` from `server/.env.example`.

### 3. Start development
```bash
npm run dev
```

- Client: `http://localhost:5173`
- Server: `http://localhost:5000`

## API
- `GET /api/health`
- `GET /api/content/home`
- `GET /api/cases`
- `GET /api/brands`
- `POST /api/contact`

## Notes
- The contact form stores messages in MongoDB.
- Seed-like homepage content is served from the API.
- The frontend uses a responsive layout, mobile menu, and smooth Framer Motion animations.
