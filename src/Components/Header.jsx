import React from "react";
import memeImg from "./../../public/meme-logo.jpg";
export default function Header() {
  return (
    <header
      style={{
        display: "flex",
        backgroundColor: "purple",
        alignItems: "center",
        gap: "10px",
        padding: "0px 30px",
      }}
    >
      <img src={memeImg} alt="memeImage" style={{ height: "60px" }} />
      <h1 style={{ color: "white" }}>Meme Generator</h1>
    </header>
  );
}
