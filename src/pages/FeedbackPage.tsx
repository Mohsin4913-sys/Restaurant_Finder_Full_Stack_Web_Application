import { useState } from "react";

export default function FeedbackPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
    city: "",
    review: "",
    rating: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch("http://localhost:5000/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    alert("Feedback submitted!");
  };

  return (
    <div
      style={{
        padding: "40px 0",
        display: "flex",
        justifyContent: "center",
        background: "#f5f5f7",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "25px",
          width: "450px",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ marginBottom: "20px", textAlign: "center" }}>Customer Feedback</h2>

        <form onSubmit={handleSubmit}>
          {Object.keys(form).map((key) => (
            <div key={key} style={{ marginBottom: "14px" }}>
              <label style={{ fontWeight: "bold", fontSize: "14px" }}>
                {key.toUpperCase()}
              </label>
              <input
                name={key}
                value={(form as any)[key]}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "10px",
                  marginTop: "5px",
                  borderRadius: "6px",
                  border: "1px solid #ccc",
                  fontSize: "15px",
                }}
              />
            </div>
          ))}

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              background: "#ff7b54",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
}
