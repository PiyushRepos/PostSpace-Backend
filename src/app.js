import dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
const PORT = process.env.PORT || 8000;
import connectToDB from "./db/index.js";
import cors from "cors";
import path from "path";

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static(path.join(__dirname, "public")));

// Database connection
connectToDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("Error while starting server");
      throw error;
    });
    app.listen(PORT, () => {
      console.log(`Server is started at PORT ${PORT}`);
    });
  })
  .catch((error) => console.log("MongoDB connection failed", error));
