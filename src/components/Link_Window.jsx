import * as React from "react";
import youtubeIcon from "../assets/youtube.png";
import instagramIcon from "../assets/instagram.png";
import kofiIcon from "../assets/kofi.png";
import discordIcon from "../assets/discord.png";

const LinkWindow = ({ isVisible }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        overflow: "hidden",
        borderRadius: "20px",
        background: "#D5C5FF",
        position: "relative",
        padding: "40px 20px 20px 20px",
        boxSizing: "border-box",
      }}
    >
      {/* 🌸 Top Bar */}
      <div
        style={{
          backgroundColor: "#FBD0FF",
          width: "100%",
          height: "39px",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1,
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px",
        }}
      />

      {/* 🧠 Title */}
      <div
        style={{
          marginTop: "-35px",
          fontSize: "22px",
          fontWeight: "700",
          color: "#944A9A",
          zIndex: 2,
          fontFamily: "'Quicksand', sans-serif",
        }}
      >
        Pie's - <span style={{ fontWeight: "600" }}>links</span>
      </div>

      {/* 🌈 Icon Row */}
      {isVisible && (
        <div
          style={{
            marginTop: "60px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "25px",
            zIndex: 5,
          }}
        >
          <img
            src={youtubeIcon}
            alt="YouTube"
            style={{ width: "100px", height: "100px", objectFit: "contain" }}
          />
          <img
            src={instagramIcon}
            alt="Instagram"
            style={{ width: "100px", height: "100px", objectFit: "contain" }}
          />
          <img
            src={discordIcon}
            alt="Discord"
            style={{ width: "100px", height: "100px", objectFit: "contain" }}
          />
        </div>
      )}

      {/* 🍰 Text Bubble */}
      <div
        style={{
          marginTop: "50px",
          background: "rgba(50, 50, 70, 0.6)",
          padding: "14px 28px",
          borderRadius: "20px",
          backdropFilter: "blur(12px)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
          zIndex: 10,
          fontSize: "16px",
          fontWeight: "700",
          color: "#fff",
          fontFamily: "'Quicksand', sans-serif",
          textAlign: "center",
          lineHeight: "1.6",
          whiteSpace: "pre-line",
        }}
      >
        The links are warming up in the oven... 🐱🧁{"\n"}
        A little more time and they’ll be ready to serve!
      </div>
    </div>
  );
};

export default LinkWindow;
