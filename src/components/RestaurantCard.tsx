import { Link } from "react-router-dom";
import "./RestaurantCard.css";

type Props = {
  _id: string;
  name: string;
  image: string;
  cuisine: string;
  rating: number;
  cost: number;
};

export default function RestaurantCard({
  _id,
  name,
  image,
  cuisine,
  rating,
  cost,
}: Props) {
  return (
    <Link
      to={`/restaurant/${_id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div className="card">
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>{cuisine}</p>
        <p>⭐ {rating} · ₹{cost}</p>
      </div>
    </Link>
  );
}
