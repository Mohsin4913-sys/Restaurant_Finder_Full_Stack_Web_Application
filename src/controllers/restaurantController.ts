import { Request, Response } from "express";
import Restaurant from "../models/Restaurant";

export const getRestaurants = async (req: Request, res: Response) => {
  try {
    const restaurants = await Restaurant.find();
    res.json(restaurants);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch restaurants" });
  }
};

export const searchRestaurants = async (req: Request, res: Response) => {
  try {
    const query = req.query.q as string;

    const results = await Restaurant.find({
      name: { $regex: query, $options: "i" }
    });

    res.json(results);
  } catch (err) {
    res.status(500).json({ error: "Search failed" });
  }
};

export const filterRestaurants = async (req: Request, res: Response) => {
  try {
    const { cuisine, rating, cost } = req.query;

    const filters: any = {};
    if (cuisine) filters.cuisine = cuisine;
    if (rating) filters.rating = { $gte: Number(rating) };
    if (cost) filters.cost = { $lte: Number(cost) };

    const results = await Restaurant.find(filters);
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: "Filter failed" });
  }
};

export const getRestaurantById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const restaurant = await Restaurant.findById(id);

    if (!restaurant) {
      return res.status(404).json({ message: "Restaurant not found" });
    }

    res.json(restaurant);
  } catch (error) {
    console.error("Error fetching restaurant by ID:", error);
    res.status(500).json({ message: "Server error" });
  }
};
