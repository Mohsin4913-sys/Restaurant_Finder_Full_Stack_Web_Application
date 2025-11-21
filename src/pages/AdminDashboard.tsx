import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type Feedback = {
  _id: string;
  name: string;
  email: string;
  phone: string;
  age: number;
  gender: string;
  city: string;
  review: string;
  rating: number;
};

export default function AdminDashboard() {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("admin")) {
      navigate("/admin");
      return;
    }

    fetch("http://localhost:5000/feedbacks")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setFeedbacks(data.feedbacks);
      })
      .catch(console.error);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("admin");
    navigate("/admin");
  };

  return (
    <div
      style={{
        minHeight: "90vh",
        background: "#f5f5f5",
        padding: "40px 0",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "90%",
          maxWidth: "1100px",
          background: "white",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
        }}
      >
        {/* Header Row */}
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h1 style={{ margin: 0 }}>Admin Dashboard</h1>

          <button
            onClick={handleLogout}
            style={{
              padding: "8px 18px",
              background: "red",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Logout
          </button>
        </div>

        <h3 style={{ marginTop: "30px", marginBottom: "15px" }}>
          Customer Feedbacks ({feedbacks.length})
        </h3>

        {/* Table */}
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            background: "white",
            borderRadius: "10px",
            overflow: "hidden",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          }}
        >
          <thead style={{ background: "#ff7f50", color: "white" }}>
            <tr>
              <th style={cell}>Name</th>
              <th style={cell}>Email</th>
              <th style={cell}>Phone</th>
              <th style={cell}>City</th>
              <th style={cell}>Rating</th>
              <th style={cell}>Review</th>
            </tr>
          </thead>

          <tbody>
            {feedbacks.map((f) => (
              <tr key={f._id} style={{ borderBottom: "1px solid #eee" }}>
                <td style={cell}>{f.name}</td>
                <td style={cell}>{f.email}</td>
                <td style={cell}>{f.phone}</td>
                <td style={cell}>{f.city}</td>
                <td style={cell}>{f.rating}</td>
                <td style={cell}>{f.review}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// REUSABLE CELL STYLE
const cell: React.CSSProperties = {
  padding: "14px 10px",
  textAlign: "left",
  fontSize: "16px",
};
