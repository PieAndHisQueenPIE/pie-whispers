import * as React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import PiesQueen from "../assets/Pies-Queen.png";
import rainbowLottie from "../assets/rain-bow.json";
import blurLottie from "../assets/blur.json";
import pinkFlyLottie from "../assets/pink-fly.json";
import blackCatLottie from "../assets/black-cat.json";

const AboutWindow = () => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [isBouncing, setIsBouncing] = React.useState(false);
  const pinkFlyRef = React.useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      pinkFlyRef.current?.pause();
      setIsBouncing(false);
    } else {
      pinkFlyRef.current?.play();
      setIsBouncing(true);
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        overflow: "auto",
        borderRadius: "10px",
        background: "#D5C5FF",
        display: "flex",
        flexDirection: "column",
        fontFamily: "'Quicksand', sans-serif",
        padding: "4vw",
        boxSizing: "border-box",
      }}
    >
      {/* 🌸 Top Bar */}
      <div
        style={{
          backgroundColor: "#FBD0FF",
          width: "100%",
          height: "auto",
          padding: "10px 20px",
          borderRadius: "10px",
          marginBottom: "20px",
        }}
      >
        <div
          style={{
            fontSize: "clamp(16px, 4vw, 26px)",
            fontWeight: "700",
            color: "#944A9A",
          }}
        >
          About – <span style={{ fontWeight: "600" }}>Pie</span>
        </div>
      </div>

      {/* 👸 Image + Fly Combo */}
      <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
        <div style={{ position: "relative", marginBottom: "20px" }}>
          <img
            src={PiesQueen}
            alt="Pie Queen"
            style={{
              width: "120px",
              height: "110px",
              objectFit: "cover",
              borderRadius: "8px",
              zIndex: 2,
              position: "relative",
            }}
          />
          <div
            onClick={togglePlay}
            style={{
              position: "absolute",
              top: "50px",
              left: "35px",
              width: "110px",
              height: "110px",
              zIndex: 3,
              cursor: "pointer",
              animation: isBouncing ? "bounce 0.6s ease" : "none",
            }}
          >
            <Player
              ref={pinkFlyRef}
              src={pinkFlyLottie}
              loop
              autoplay={false}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>

        {/* 🍰 It’s Pie Text Box */}
        <div
          style={{
            flex: 1,
            minWidth: "240px",
            marginLeft: "16px",
            background: "#fff",
            borderRadius: "16px",
            padding: "14px 18px",
            boxShadow: "0 4px 12px rgba(226, 74, 198, 0.2)",
            fontSize: "clamp(13px, 2.5vw, 16px)",
            lineHeight: "1.6",
            fontWeight: "600",
            color: "#333",
          }}
        >
          <h3 style={{ margin: 0, fontSize: "clamp(18px, 3vw, 24px)" }}>It’s Pie</h3>
          <p style={{ marginTop: "10px" }}>
            16 y/o Developer-Coder, Designer, Editor & Dreamer<br />
            Building magic with my Hands-pc & Late-Night Energy <br />
            Turning pixels into passion, one click at a time <br />
            Currently working on{" "}
            <strong style={{ color: "purple" }}>ComicsPie</strong> &{" "}
            <strong style={{ color: "orange" }}>QueenGPT</strong>
          </p>
        </div>
      </div>


{/* 💖 Transparent Text Box */}
<div
  style={{
    marginTop: "40px",
    textAlign: "center",
    width: "calc(100% - 6vw)",
    maxWidth: "780px",
    fontSize: "clamp(14px, 3vw, 18px)",
    fontWeight: "600",
    lineHeight: "1.5",
    color: "#444",
    padding: "4vw",
    background: "rgba(255, 255, 255, 0.25)",
    borderRadius: "20px",
    backdropFilter: "blur(60px)",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
    marginLeft: "auto",
    marginRight: "auto",
    zIndex: 2,
    boxSizing: "border-box",
  }}
>
  <p style={{ margin: 0 }}>
    Yo... I’m Pie — 16, savage, and building the future like it’s my playground.<br /><br />
    I turn wild ideas into real stuff — from Video Edits that pop, to AI Women that talk,<br />
    to websites that feel like you’re inside a desktop dream.<br /><br />
    I don’t just create... I craft vibes.<br />
    Videos? <strong>Fire!</strong><br />
    Code? <strong>Clean!</strong><br />
    Design? <strong>On point!</strong><br /><br />
    And behind it all? Just a teen with a vision, a playlist,<br />
    and zero patience for waiting on "someday."<br /><br />
    While most sleep on their dreams — I stay up and build mine.<br />
    Whether it’s Figma, Code, or After Effects, android Studio etc—<br />
    I’m mixing art with logic, flow with fire, and every pixel got a story behind it.<br /><br />
    So click around.<br />
    Feel the energy....<br />
    You’re not just on a site...<br />
    You’re inside <strong>my world</strong>, <strong>my hustle</strong>, <strong>my empire....</strong>
  </p>
</div>



      {/* 🐈‍⬛ Cat Animation */}
      <div style={{ marginTop: "50px", display: "flex", justifyContent: "center" }}>
        <Player autoplay loop src={blackCatLottie} style={{ width: "100%", maxWidth: "640px" }} />
      </div>

      {/* 🐾 Cat Caption */}
      <div
        style={{
          textAlign: "center",
          fontSize: "clamp(13px, 2.6vw, 16px)",
          fontWeight: "600",
          color: "#fff",
          background: "rgba(0, 0, 0, 0.4)",
          padding: "10px 20px",
          borderRadius: "14px",
          backdropFilter: "blur(8px)",
          margin: "20px auto 40px",
          maxWidth: "90%",
        }}
      >
        Cat’s waiting patiently... Every empire needs a cat...<br />
        Cat knows the empire’s being built. She’s just here for the vibe.
      </div>
     
{/* 🐾 Wallpaper Credit (Cute + Responsive) */}
<div
  style={{
    position: "absolute",
    bottom: "2vh",
    left: "50%",
    transform: "translateX(-50%)",
    textAlign: "center",
    fontSize: "clamp(10px, 1.2vw, 14px)",
    fontWeight: "900",
    color: "#f7c4e1", // 🌸 soft candy pink
    fontFamily: "'Quicksand', sans-serif",
    zIndex: 15,
    background: "rgba(255, 0, 81, 0.25)",
    padding: "3px 16px",
    borderRadius: "24px",
    backdropFilter: "blur(52px)",
    WebkitBackdropFilter: "blur(52px)",
  }}
>
  Wallpapers by{" "}
  <a
    href="https://motionbgs.com"
    style={{
      color: "#ffd6f5", // lighter soft pink
      textDecoration: "none",
      fontWeight: "700",
    }}
    target="_blank"
    rel="noopener noreferrer"
  >
    motionbgs.com
  </a>
</div>

      {/* ✨ Bounce Animation */}
      <style>{`
        @keyframes bounce {
          0% { transform: translateY(0); }
          25% { transform: translateY(-10px); }
          50% { transform: translateY(0); }
          75% { transform: translateY(-5px); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default AboutWindow;
