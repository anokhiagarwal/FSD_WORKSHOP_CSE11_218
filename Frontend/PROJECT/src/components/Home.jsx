import React from "react";

function Home() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        backgroundImage: 'url("/bg.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* Dark Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.25)",
        }}
      ></div>

      {/* Top Left Navigation */}
      <div
        style={{
          position: "absolute",
          top: "25px",
          left: "30px",
          zIndex: 2,
          display: "flex",
          alignItems: "center",
          gap: "15px",
        }}
      >
        {/* Types of Locations Dropdown */}
        <select
          style={{
            padding: "12px 18px",
            borderRadius: "25px",
            border: "1px solid rgba(255, 255, 255, 0.6)",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            color: "black",
            backdropFilter: "blur(10px)",
            fontSize: "14px",
            cursor: "pointer",
            outline: "none",
          }}
        >
          <option value="">Types of Locations</option>
          <option value="beaches">Beaches</option>
          <option value="mountains">Mountains</option>
          <option value="cities">Cities</option>
          <option value="forests">Forests</option>
          <option value="islands">Islands</option>
          <option value="deserts">Deserts</option>
        </select>

        {/* Stay Plan Dropdown */}
        <select
          style={{
            padding: "12px 18px",
            borderRadius: "25px",
            border: "1px solid rgba(255, 255, 255, 0.6)",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            color: "black",
            backdropFilter: "blur(10px)",
            fontSize: "14px",
            cursor: "pointer",
            outline: "none",
          }}
        >
          <option value="">Stay Plan</option>
          <option value="hotel">Hotel</option>
          <option value="resort">Resort</option>
          <option value="villa">Villa</option>
          <option value="hostel">Hostel</option>
          <option value="camping">Camping</option>
        </select>
      </div>

      {/* Center Hero Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          padding: "20px",
        }}
      >
        {/* Travel More */}
        <h3
          style={{
            fontSize: "clamp(30px, 7vw, 90px)",
            fontWeight: "500",
            lineHeight: "0.9",
            letterSpacing: "-4px",
            textTransform: "uppercase",
            margin: 0,
            color: "rgb(202, 130, 22)",
            textShadow:
              "0 5px 10px rgba(20, 19, 16, 0.4), 0 10px 30px rgba(0, 0, 0, 0.3)",
          }}
        >
          Travel More,
        </h3>

        {/* Worry Less */}
        <h3
          style={{
            fontSize: "clamp(20px, 7vw, 80px)",
            fontWeight: "500",
            lineHeight: "0.9",
            letterSpacing: "-4px",
            textTransform: "uppercase",
            margin: 0,
            color: "rgb(229, 214, 192)",
            textShadow:
              "0 5px 10px rgba(19, 16, 7, 0.4), 0 10px 30px rgba(10, 9, 8, 0.26)",
          }}
        >
             Worry Less
        </h3>

        {/* Subtitle */}
        <p
          style={{
            marginTop: "30px",
            fontSize: "18px",
            letterSpacing: "2px",
            color: "white",
            textShadow: "0 2px 8px rgba(0, 0, 0, 0.7)",
          }}
        >
          Discover places that make memories last forever.
        </p>
      </div>
    </div>
  );
}

export default Home;