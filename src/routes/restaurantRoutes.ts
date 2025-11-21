import express from "express";
import {
  getRestaurants,
  searchRestaurants,
  filterRestaurants,
  getRestaurantById
} from "../controllers/restaurantController";

const router = express.Router();

router.get("/", getRestaurants);
router.get("/search", searchRestaurants);
router.get("/filter", filterRestaurants);
router.get("/:id", getRestaurantById); // <-- IMPORTANT

export default router;
