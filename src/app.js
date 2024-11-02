import dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
const PORT = process.env.PORT || 8000;
import connectToDB from "./db/index.js";

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
