import React from "react";
import "./styles.css";
import { useState } from "react";

const destinations = {
  Hills: [
    { Place: "Jammu and Kashmir", rating: "4/5" },
    { Place: "Dehradun", rating: "4.5/5" }
  ],
  Beaches: [
    { Place: "Mumbai", rating: "3.5/5" },
    { Place: "Goa", rating: "4.5/5" }
  ],
  Temples: [
    { Place: "Chennai", rating: "4.5/5" },
    { Place: "Udaipur", rating: "4/5" }
  ]
};

export default function App() {
  const [selectedTheme, setTheme] = useState("Temples");
  function themeClickHandler(theme) {
    setTheme(theme);
  }
  return (
    <div className="App">
      <h1 style={{ color: "#A78BFA" }}> ✈️ Good Travel </h1>
      <p style={{ color: "#4C1D95" }}>
        Checkout my favorite Destinations. Select a type of destination to view
        my suggestions.
      </p>

      <div>
        {Object.keys(destinations).map((theme) => (
          <button
            onClick={() => themeClickHandler(theme)}
            style={{
              background: "#DBEAFE",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem",
              fontStyle: "bold",
              color: "#A78BFA"
            }}
          >
            {theme}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "centre" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {destinations[selectedTheme].map((theme) => (
            <li
              key={theme.Place}
              style={{
                listStyle: "none",
                padding: "0.5rem",
                border: "1px solid #4C1D95",
                width: "15%",
                margin: "1rem 50rem",
                borderRadius: "0.5rem",
                textAlign: "centre",
                color: "#7F1D1D",
                background: "#C7D2FE"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {theme.Place} </div>
              <div style={{ fontSize: "smaller" }}> {theme.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
