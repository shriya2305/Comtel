const path = require("path");
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");

const app = express();

/* -------------------- DATABASE -------------------- */
connectDB();

/* -------------------- MIDDLEWARE -------------------- */
app.use(express.json());

// CORS only needed in development
if (process.env.NODE_ENV !== "production") {
  app.use(cors());
}

/* -------------------- API ROUTES -------------------- */
app.use("/api/services", require("./routes/serviceRoutes"));
app.use("/api/contact", require("./routes/contactRoutes"));

/* -------------------- FRONTEND (PRODUCTION) -------------------- */
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));

  app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("Comtel API running");
  });
}

/* -------------------- SERVER -------------------- */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
