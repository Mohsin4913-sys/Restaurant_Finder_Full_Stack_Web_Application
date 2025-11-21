import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import restaurantRoutes from "./routes/restaurantRoutes";
import feedbackRoutes from "./routes/feedbackRoutes"; // ⭐ ADD THIS

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json()); // parse JSON request body

// API Routes
app.use("/restaurants", restaurantRoutes);
app.use("/feedbacks", feedbackRoutes);   // ⭐ ADD THIS

export default app;
