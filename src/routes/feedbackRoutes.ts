import express from "express";
import { submitFeedback, getAllFeedback } from "../controllers/feedbackController";


console.log("⚡ feedbackRoutes loaded");

const router = express.Router();

// POST → Submit feedback
router.post("/", submitFeedback);

// GET → Admin view (fetch all feedback)
router.get("/", getAllFeedback);

export default router;
