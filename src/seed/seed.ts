import mongoose from "mongoose";
import dotenv from "dotenv";
import Restaurant from "../models/Restaurant";

dotenv.config();

const data = [
  { name: "Spice Hub", cuisine: "Indian", rating: 4.2, cost: 350, location: "MG Road, Bangalore", image: "https://picsum.photos/seed/1/400/300" },
  { name: "Pizza Palace", cuisine: "Italian", rating: 4.0, cost: 400, location: "Indiranagar, Bangalore", image: "https://picsum.photos/seed/2/400/300" },
  { name: "Sushi World", cuisine: "Japanese", rating: 4.5, cost: 800, location: "Koramangala, Bangalore", image: "https://picsum.photos/seed/3/400/300" },
  { name: "Burger Barn", cuisine: "Fast Food", rating: 3.9, cost: 250, location: "Jayanagar, Bangalore", image: "https://picsum.photos/seed/4/400/300" },
  { name: "Green Bowl", cuisine: "Salads", rating: 4.1, cost: 300, location: "Whitefield, Bangalore", image: "https://picsum.photos/seed/5/400/300" },
  { name: "Curry Corner", cuisine: "Indian", rating: 4.3, cost: 280, location: "HSR Layout, Bangalore", image: "https://picsum.photos/seed/6/400/300" },
  { name: "Taco Town", cuisine: "Mexican", rating: 4.0, cost: 320, location: "Brigade Road, Bangalore", image: "https://picsum.photos/seed/7/400/300" },
  { name: "Noodle Nest", cuisine: "Chinese", rating: 3.8, cost: 220, location: "Electronic City, Bangalore", image: "https://picsum.photos/seed/8/400/300" },
  { name: "Grill Master", cuisine: "BBQ", rating: 4.4, cost: 700, location: "Ub City, Bangalore", image: "https://picsum.photos/seed/9/400/300" },
  { name: "Veg Delight", cuisine: "Indian", rating: 4.0, cost: 200, location: "Basavanagudi, Bangalore", image: "https://picsum.photos/seed/10/400/300" },
  { name: "Pasta Point", cuisine: "Italian", rating: 4.1, cost: 380, location: "Malleswaram, Bangalore", image: "https://picsum.photos/seed/11/400/300" },
  { name: "Biryani Bliss", cuisine: "Indian", rating: 4.6, cost: 420, location: "Shivajinagar, Bangalore", image: "https://picsum.photos/seed/12/400/300" },
  { name: "Seafood Shack", cuisine: "Seafood", rating: 4.2, cost: 650, location: "J.P. Nagar, Bangalore", image: "https://picsum.photos/seed/13/400/300" },
  { name: "Cafe Aroma", cuisine: "Cafe", rating: 3.9, cost: 180, location: "Church Street, Bangalore", image: "https://picsum.photos/seed/14/400/300" },
  { name: "Kebab King", cuisine: "Middle Eastern", rating: 4.0, cost: 340, location: "Residency Road, Bangalore", image: "https://picsum.photos/seed/15/400/300" },
  { name: "Dosa Den", cuisine: "South Indian", rating: 4.5, cost: 150, location: "Vijayanagar, Bangalore", image: "httpsum.photos/seed/16/400/300" },
  { name: "Pan-Asian Palace", cuisine: "Pan-Asian", rating: 4.3, cost: 500, location: "Whitefield, Bangalore", image: "https://picsum.photos/seed/17/400/300" },
  { name: "Wrap & Roll", cuisine: "Fast Food", rating: 3.7, cost: 220, location: "Koramangala, Bangalore", image: "https://picsum.photos/seed/18/400/300" },
  { name: "Sweets Studio", cuisine: "Desserts", rating: 4.4, cost: 200, location: "Lavelle Road, Bangalore", image: "https://picsum.photos/seed/19/400/300" },
  { name: "Healthy Hearth", cuisine: "Healthy", rating: 4.1, cost: 360, location: "Banashankari, Bangalore", image: "https://picsum.photos/seed/20/400/300" }
];

const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log("Connected to Mongo for seeding");

    await Restaurant.deleteMany({});
    await Restaurant.insertMany(data);

    console.log("Seed data inserted");
    process.exit(0);
  } catch (err) {
    console.error("Seeding error:", err);
    process.exit(1);
  }
};

seed();
