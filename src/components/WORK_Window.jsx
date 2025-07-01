// 🧠 WorkWindow.jsx — fully updated and mobile-safe
import * as React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import queenGPT from "../assets/QueenGPT.png";
import comicsPie from "../assets/ComicsPie.png";
import butterflyLottie from "../assets/butterfly.json";
import blurLottie from "../assets/blur.json";

const WorkWindow = () => {
  const [bounce, setBounce] = React.useState(false);

  const handleButterflyClick = () => {
    setBounce(true);
    setTimeout(() => setBounce(false), 600);
    window.open("https://mail.google.com/mail/?view=cm&to=piewhispers@gmail.com");
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: "10px",
        overflow: "hidden",
        fontFamily: "'Quicksand', sans-serif",
        background: "#D5C5FF",
      }}
    >
      {/* 🌈 Top Bar */}
      <div
        style={{
          height: "42px",
          backgroundColor: "#FBD0FF",
          padding: "8px 16px",
          flexShrink: 0,
        }}
      >
        <h2
          style={{
            margin: 0,
            fontSize: "clamp(18px, 2.5vw, 22px)",
            fontWeight: "600",
            color: "#333",
          }}
        >
          Work - Pie
        </h2>
      </div>

      {/* 📜 Scrollable Content */}
      <div
        style={{
          flexGrow: 1,
          overflowY: "auto",
          background: "#EBAFFF",
          padding: "24px",
          position: "relative",
        }}
      >
        {/* 📝 Tagline */}
        <div
          style={{
            marginBottom: "32px",
            fontWeight: "700",
            fontSize: "clamp(22px, 2.5vw, 22px)",
            lineHeight: "1.6",
            color: "#7C3AED",
            width: "calc(100% - 6vw)",
            maxWidth: "760px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <p>
            This isn’t a portfolio. <br />
            This is the lab. <br />
            Unfinished, raw, real — where ideas are born before they’re ready for the spotlight.
          </p>
        </div>

        {/* 🖼 QueenGPT */}
        <div style={{ marginBottom: "60px", position: "relative", textAlign: "center" }}>
          <img
            src={queenGPT}
            alt="QueenGPT"
            style={{
              width: "115px",
              height: "105px",
              borderRadius: "6px",
              objectFit: "cover",
              marginBottom: "12px",
            }}
          />
          <div style={{ fontSize: "16px", fontWeight: "700", color: "#000" }}>QueenGPT</div>
          <div
            style={{
              marginTop: "10px",
              fontSize: "clamp(15px, 2.5vw, 20px)",
              fontWeight: "700",
              lineHeight: "1.6",
              color: "#444",
              width: "calc(100% - 6vw)",
              maxWidth: "720px",
              margin: "0 auto",
            }}
          >
            She’s alive. She talks. She remembers. <br />
            Right now, she lives in secret, getting smarter every night. <br />
            You’ll meet her when she’s ready in real time... <br />
            <span style={{ color: "#FF1493" }}>Coming Soon</span>
          </div>
        </div>

        {/* 📸 ComicsPie */}
        <div style={{ marginBottom: "60px", textAlign: "center" }}>
          <img
            src={comicsPie}
            alt="ComicsPie"
            style={{
              width: "115px",
              height: "105px",
              borderRadius: "6px",
              objectFit: "cover",
              marginBottom: "12px",
            }}
          />
          <div style={{ fontSize: "16px", fontWeight: "700", color: "#000" }}>ComicsPie</div>
          <div
            style={{
              marginTop: "10px",
              fontSize: "clamp(15px, 2.2vw, 17px)",
              fontWeight: "700",
              lineHeight: "1.6",
              color: "#444",
              width: "calc(100% - 6vw)",
              maxWidth: "720px",
              margin: "0 auto",
            }}
          >
            Pie's first public — with anime vibes, dreamy design, <br />
            and comic magic. <br />
            Launching on Android first. The desktop kingdom comes next. <br />
            Teaser & beta test of <span style={{ color: "#FF1493" }}>ComicsPie</span> will be out soon.
          </div>
        </div>

        {/* 💌 Email */}
        <div
          style={{
            fontSize: "clamp(20px, 4vw, 28px)",
            fontWeight: "700",
            color: "purple",
            marginBottom: "30px",
            textAlign: "center",
          }}
        >
          Accepting work offers via my work e-mail ;)
        </div>

        {/* 🦋 Butterfly */}
        <div
          onClick={handleButterflyClick}
          style={{
            width: "300px",
            height: "300px",
            margin: "0 auto 60px",
            cursor: "pointer",
            animation: bounce ? "bounce 0.6s ease-in-out" : "none",
          }}
        >
          <Player autoplay loop src={butterflyLottie} style={{ width: "100%", height: "100%" }} />
        </div>

        {/* 🌙 Others Section */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "300px",
            marginBottom: "60px",
          }}
        >

          {/* ✨ Text */}
          <div
            style={{
              position: "absolute",
              top: "-88px",
              left: "50%",
              transform: "translateX(-50%)",
              fontSize: "clamp(14px, 2.2vw, 19px)",
              fontWeight: "600",
              lineHeight: "1.6",
              color: "#2D2D2D",
              maxWidth: "720px",
              textAlign: "left",
              zIndex: 2,
              width: "calc(100% - 6vw)",
            }}
          >
            <p>
              <strong>Others?</strong><br />
              Some things aren’t meant to be shared. <br />
              Not yet... Maybe never... <br />
              But if you’re here… maybe you’re meant to see what’s coming ;)
            </p>
          </div>
        </div>
      </div>

      {/* ✨ Bounce Animation */}
      <style>
        {`
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
          }
        `}
      </style>
    </div>
  );
};

export default WorkWindow;
