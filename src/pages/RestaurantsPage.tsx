import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Restaurant = {
  _id: string;
  name: string;
  image: string;
  cuisine: string;
  rating: number;
};

export default function RestaurantsPage() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/restaurants")
      .then((res) => res.json())
      .then((data) => setRestaurants(data))
      .catch(console.error);
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <h2 style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "20px" }}>
        Restaurants
      </h2>

      {/* Grid layout */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "30px",
        }}
      >
        {restaurants.map((r) => (
          <div
            key={r._id}
            style={{
              border: "1px solid #eee",
              borderRadius: "12px",
              padding: "15px",
              background: "#fff",
              boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
              transition: "0.3s",
            }}
          >
            <img
              src={r.image}
              alt={r.name}
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
                borderRadius: "10px",
                marginBottom: "15px",
              }}
            />

            <h3 style={{ margin: "5px 0", fontSize: "20px" }}>{r.name}</h3>
            <p style={{ margin: "5px 0", color: "#666" }}>{r.cuisine}</p>

            <p style={{ margin: "5px 0", fontWeight: "bold" }}>
              ⭐ {r.rating}
            </p>

            {/* Details button */}
            <Link
              to={`/restaurant/${r._id}`}
              style={{
                display: "inline-block",
                marginTop: "10px",
                padding: "8px 15px",
                background: "#ff7f50",
                color: "#fff",
                borderRadius: "8px",
                textDecoration: "none",
                fontSize: "14px",
                transition: "0.2s",
              }}
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
