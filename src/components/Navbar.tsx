import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  return (
    <nav
      style={{
        width: "100%",
        padding: "18px 40px",
        background: "linear-gradient(90deg, #ffffff, #f8f8f8)",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 10,
      }}
    >
      {/* Logo */}
      <Link
        to="/"
        style={{
          fontSize: "36px",
          fontWeight: "bold",
          textDecoration: "none",
          color: "#222",
          display: "flex",
          alignItems: "center",
        }}
      >
        🍽️ <span style={{ marginLeft: "10px" }}>Restaurant Finder</span>
      </Link>

      {/* Navigation Links */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginRight: "40px",
        }}
      >
        {/* Home */}
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: location.pathname === "/" ? "#ff7f50" : "#333",
            fontSize: "25px",
            marginLeft: "40px",
            padding: "10px 16px",
            borderRadius: "10px",
            transition: "0.2s",
            background:
              location.pathname === "/" ? "rgba(255, 127, 80, 0.2)" : "transparent",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = "rgba(255,127,80,0.2)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background =
              location.pathname === "/" ? "rgba(255,127,80,0.2)" : "transparent")
          }
        >
          Home
        </Link>

        {/* Admin Login */}
        <Link
          to="/admin"
          style={{
            textDecoration: "none",
            color: location.pathname === "/admin" ? "#ff7f50" : "#333",
            fontSize: "25px",
            marginLeft: "40px",
            padding: "10px 16px",
            borderRadius: "10px",
            transition: "0.2s",
            background:
              location.pathname === "/admin"
                ? "rgba(255, 127, 80, 0.2)"
                : "transparent",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = "rgba(255,127,80,0.2)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background =
              location.pathname === "/admin"
                ? "rgba(255,127,80,0.2)"
                : "transparent")
          }
        >
          Admin Login
        </Link>
      </div>
    </nav>
  );
}
