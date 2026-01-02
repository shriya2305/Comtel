# Comtel Website 🌐

A full-stack **MERN (MongoDB, Express, React, Node.js)** corporate website built for **Comtel**, featuring service listings, a contact form, and a modern responsive UI.
The project is deployed as a **single platform application** where the backend also serves the frontend build.

---

## 🚀 Tech Stack

### Frontend

* React (Create React App)
* Axios
* CSS

### Backend

* Node.js
* Express.js
* MongoDB (Mongoose)

### Deployment

* **Render** (single service)
* **MongoDB Atlas** (database)

---

## 📁 Project Structure

```
Comtel/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
│
├── client/
│   ├── build/          # React production build
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── package-lock.json
│
├── package.json        # Root scripts for deployment
├── .gitignore
└── README.md
```

---

## ✨ Features

* Responsive corporate website
* Services listing (dynamic from database)
* Contact form with backend integration
* REST API built with Express
* MongoDB database integration
* Single-platform deployment (no CORS issues)
* Production-ready setup

---

## 🔧 Environment Variables

### Local Development (`.env` – not committed)

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

### Production (Render Dashboard)

```
MONGO_URI=your_mongodb_connection_string
NODE_ENV=production
```

---

## ▶️ Running Locally

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/Comtel.git
cd Comtel
```

### 2️⃣ Install dependencies

```bash
npm install --prefix backend
npm install --prefix client
```

### 3️⃣ Run backend

```bash
npm start
```

### 4️⃣ Build frontend (production)

```bash
npm run build
```

---

## 🌍 Deployment (Render – Single Platform)

* Frontend is built using `npm run build`
* Backend serves React from `client/build`
* APIs available at `/api/*`

### Root `package.json` scripts:

```json
{
  "scripts": {
    "build": "npm install --prefix backend && npm install --prefix client && npm run build --prefix client",
    "start": "node backend/server.js"
  }
}
```

---

## 🧠 Important Notes

* `node_modules` and `.env` files are **not committed**
* Backend uses `app.use()` (no wildcard routes) for compatibility with **Node 22**
* MongoDB Atlas IP whitelist must allow `0.0.0.0/0` for deployment

---

## 📌 API Endpoints

| Method | Endpoint        | Description         |
| ------ | --------------- | ------------------- |
| GET    | `/api/services` | Fetch all services  |
| POST   | `/api/contact`  | Submit contact form |

---

## 👩‍💻 Author

**Shriya Avhad & Shreya Fulwane**
Built as a professional full-stack project using the MERN stack.

---

## 📄 License

This project is for educational and portfolio purposes.
