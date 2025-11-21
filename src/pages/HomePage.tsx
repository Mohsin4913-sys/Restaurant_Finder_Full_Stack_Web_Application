const HomePage = () => {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "40px 20px",
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
      <h1 style={{ fontSize: "46px", marginBottom: "10px" }}>
        Welcome to Restaurant Finder
      </h1>

      <p style={{ fontSize: "28px", color: "#444", marginBottom: "30px" }}>
        Discover amazing restaurants near you. Browse menus, view details, and share your experience.
      </p>

      {/* Banner Image */}
      <img
        src="https://images.unsplash.com/photo-1552566626-52f8b828add9"
        alt="Food Banner"
        style={{
          width: "100%",
          maxHeight: "450px",
          objectFit: "cover",
          borderRadius: "18px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
        }}
      />

      <br /><br />

      <a href="/restaurants">
        <button
          style={{
            padding: "12px 30px",
            fontSize: "25px",
            cursor: "pointer",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#ff6347",
            color: "white",
            fontWeight: "bold",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
            transition: "0.2s",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#e5533c")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#ff6347")
          }
        >
          View Restaurants
        </button>
      </a>
    </div>
  );
};

export default HomePage;
