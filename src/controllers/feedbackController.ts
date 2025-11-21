import { Request, Response } from "express";
import Feedback from "../models/Feedback";

export const submitFeedback = async (req: Request, res: Response) => {
  try {
    const feedback = await Feedback.create(req.body);
    res.json({ success: true, feedback });
  } catch (err) {
    res.status(500).json({ success: false, error: err });
  }
};

export const getAllFeedback = async (req: Request, res: Response) => {
  try {
    const data = await Feedback.find().sort({ createdAt: -1 });
    res.json({ success: true, feedbacks: data });
  } catch (err) {
    res.status(500).json({ success: false, error: err });
  }
};
