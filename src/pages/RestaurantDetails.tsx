import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

type Restaurant = {
  _id: string;
  name: string;
  image: string;
  cuisine: string;
  rating: number;
  cost: number;
  location?: string;
};

export default function RestaurantDetails() {
  const { id } = useParams();
  const [rest, setRest] = useState<Restaurant | null>(null);

  useEffect(() => {
    fetch(`http://localhost:5000/restaurants/${id}`)
      .then((res) => res.json())
      .then((data) => setRest(data))
      .catch(console.error);
  }, [id]);

  if (!rest) return <div style={{ padding: 20 }}>Loading...</div>;

  return (
    <div style={{ padding: "40px", maxWidth: "900px", margin: "0 auto" }}>
      <Link to="/restaurants" style={{ textDecoration: "none", fontSize: "26px" }}>
        ← Back
      </Link>

      <h1 style={{ marginTop: "20px", fontSize: "32px", fontWeight: "bold" }}>
        {rest.name}
      </h1>

      {/* Image */}
      <img
        src={rest.image}
        alt={rest.name}
        style={{
          width: "100%",
          maxWidth: "500px",
          borderRadius: "12px",
          display: "block",
          margin: "20px auto"
        }}
      />

      {/* Details Box */}
      <div
        style={{
          background: "#fafafa",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          marginTop: "20px"
        }}
      >
        <p><b>Cuisine:</b> {rest.cuisine}</p>
        <p><b>Rating:</b> ⭐ {rest.rating}</p>
        <p><b>Cost for two:</b> ₹{rest.cost}</p>
        <p><b>Location:</b> {rest.location}</p>
      </div>

      {/* Feedback Button */}
      <Link
        to={`/feedback/${rest._id}`}
        style={{
          marginTop: "25px",
          display: "inline-block",
          padding: "12px 22px",
          background: "#007bff",
          color: "white",
          borderRadius: "8px",
          fontSize: "20px",
          textDecoration: "none",
        }}
      >
        Give Feedback
      </Link>
    </div>
  );
}


