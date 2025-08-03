import * as React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import workAnimation from "../assets/work-lottie.json";
import flyingGirlAnimation from "../assets/flying-girl-lottie.json";
import aboutmeAnimation from "../assets/About-me.json";
import linksAnimation from "../assets/Links.json";
import contactAnimation from "../assets/Contact.json";
import faqAnimation from "../assets/Faq.json";
import MusicGirlAnimation from "../assets/Music-girl.json";
import echoOfSadness from "../assets/echoofsadness.mp3";
import sleepingCatAnimation from "../assets/Sleeping-cat.json";
import openSound from "../assets/open.mp3";
import closeSound from "../assets/close.mp3";
import beeLottie from "../assets/Bee.json";
import WorkWindow from "./WORK_Window";
import AboutWindow from "./About_Window";
import LinkWindow from "./Link_Window";
import ContactWindow from "./CONTACT_Window";
import FaqWindow from "./Faq_Window";

const getWallpaperColor = (index) => {
  const colors = {
    1: "rgba(255, 255, 224, 0.3)",
    2: "rgba(255, 255, 224, 0.3)",
    3: "rgba(255, 255, 224, 0.3)",
    4: "rgba(255, 255, 224, 0.3)",
    5: "rgba(43, 43, 43, 0.3)",
    6: "rgba(213, 204, 204, 0.3)",
    7: "rgba(176, 224, 230, 0.3)",
    8: "rgba(240, 908, 128, 0.3)",
    9: "rgba(221, 160, 221, 0.3)",
  };
  return colors[index] || "rgba(255, 255, 254, 0.3)";
};

const SvgIcon = () => {
  const musicRef = React.useRef(null);
  const audioRef = React.useRef(new Audio(echoOfSadness));
  const openAudio = React.useRef(new Audio(openSound));
  const closeAudio = React.useRef(new Audio(closeSound));

  const [isPlaying, setIsPlaying] = React.useState(false);
  const [bounceId, setBounceId] = React.useState(null);
  const [wallpaperIndex, setWallpaperIndex] = React.useState(1);
  const [fade, setFade] = React.useState(false);

  const [workWindowOpen, setWorkWindowOpen] = React.useState(false);
  const [aboutWindowOpen, setAboutWindowOpen] = React.useState(false);
  const [linkWindowOpen, setLinkWindowOpen] = React.useState(false);
  const [contactWindowOpen, setContactWindowOpen] = React.useState(false);
  const [faqWindowOpen, setFaqWindowOpen] = React.useState(false);
  const [closingWindow, setClosingWindow] = React.useState(null);

  const triggerBounce = (id) => {
    setBounceId(id);
    setTimeout(() => setBounceId(null), 700);
  };

  const handleMusicClick = () => {
    const player = musicRef.current;
    if (!isPlaying) {
      player?.play();
      audioRef.current.play();
    } else {
      player?.stop();
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setIsPlaying(!isPlaying);
  };

  const handleCatClick = () => {
    setFade(true);
    setTimeout(() => {
      setWallpaperIndex((prev) => (prev >= 9 ? 1 : prev + 1));
      setFade(false);
    }, 300);
  };

  const closeWithZoom = (type) => {
    triggerBounce("bee-close");
    closeAudio.current.play();
    setClosingWindow(type);
    setTimeout(() => {
      if (type === "work") setWorkWindowOpen(false);
      if (type === "about") setAboutWindowOpen(false);
      if (type === "link") setLinkWindowOpen(false);
      if (type === "contact") setContactWindowOpen(false);
      if (type === "faq") setFaqWindowOpen(false);
      setClosingWindow(null);
    }, 300);
  };

  const iconTextStyle = {
    position: "absolute",
    fontSize: "1.15vw",
    fontWeight: "700",
    fontFamily: "'Quicksand', sans-serif",
    color: "#fff",
    zIndex: 10,
  };

  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", position: "relative", background: "black" }}>
      <video
        key={`wallpaper-${wallpaperIndex}`}
        src={`/wallpapers/${wallpaperIndex}.mp4`}
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute", width: "100%", height: "100%",
          objectFit: "cover", top: 0, left: 0,
          zIndex: 0, opacity: fade ? 0 : 1,
          transition: "opacity 0.5s ease-in-out",
        }}
      />

      <div style={{
        position: "absolute",
        top: "30%",
        left: "50%",
        transform: "translateX(-50%)",
        width: "36.5vw",
        height: "36vh",
        borderRadius: "2vw",
        zIndex: 3,
        background: getWallpaperColor(wallpaperIndex),
        backdropFilter: "blur(30px)",
        WebkitBackdropFilter: "blur(30px)",
        opacity: 0.9,
        transition: "background 0.4s ease-in-out",
      }} />

      <div onClick={() => { triggerBounce("cat"); handleCatClick(); }} style={{
        position: "absolute", top: "1vw", left: "1vw",
        width: "5vw", height: "5vw", cursor: "pointer", zIndex: 20,
        animation: bounceId === "cat" ? "bounce 0.6s ease-in-out" : "none",
      }}>
        <Player autoplay loop src={sleepingCatAnimation} style={{ width: "150%", height: "150%" }} />
      </div>

      {[
       { id: "work", x: 33, y: 50, anim: workAnimation, text: "- Work", setOpen: setWorkWindowOpen },
       { id: "about", x: 40, y: 50, anim: aboutmeAnimation, text: "About Pie", setOpen: setAboutWindowOpen },
       { id: "links", x: 47, y: 50, anim: linksAnimation, text: "-- Links", setOpen: setLinkWindowOpen },
       { id: "contact", x: 54, y: 50, anim: contactAnimation, text: "Contact", setOpen: setContactWindowOpen },
       { id: "faq", x: 62, y: 50, anim: faqAnimation, text: " -- FAQ", setOpen: setFaqWindowOpen },
      ].map(({ id, x, y, anim, text, setOpen }) => (
        <React.Fragment key={id}>
          <div
            onClick={() => { triggerBounce(id); openAudio.current.play(); setOpen(true); }}
            style={{
              position: "absolute", left: `${x}vw`, top: `${y}vh`,
              width: "5.5vw", height: "6.5vw", cursor: "pointer", zIndex: 10,
              animation: bounceId === id ? "bounce 0.6s ease-in-out" : "none",
            }}
          >
            <Player autoplay loop src={anim} style={{ width: "100%", height: "100%" }} />
          </div>
          <div style={{ ...iconTextStyle, left: `${x + 0.5}vw`, top: `${y + 8}vh` }}>{text}</div>
        </React.Fragment>
      ))}

      <Player autoplay loop src={flyingGirlAnimation} style={{
        position: "absolute", left: "40vw", top: "-10vh", width: "19.7vw", height: "106vh",
        pointerEvents: "none", zIndex: 5,
      }} />

      <div onClick={handleMusicClick} style={{
        position: "absolute", left: "90vw", top: "85vh", width: "6vw", height: "6vw",
        zIndex: 11, cursor: "pointer", animation: isPlaying ? "bounce 1s infinite" : "none"
      }}>
        <Player ref={musicRef} autoplay={false} loop src={MusicGirlAnimation} style={{ width: "100%", height: "100%" }} />
      </div>
      <div style={{
        position: "absolute", left: "90vw", top: "95vh", width: "6vw", textAlign: "center",
        color: "#fff", fontSize: "0.9vw", fontWeight: "500", fontFamily: "'Quicksand', sans-serif"
      }}>{isPlaying ? "Pie Love PieSelf" : "Play Music"}</div>

      {workWindowOpen && (
        <ZoomModal type="work" closing={closingWindow} onClose={closeWithZoom}>
          <WorkWindow />
        </ZoomModal>
      )}
      {aboutWindowOpen && (
        <ZoomModal type="about" closing={closingWindow} onClose={closeWithZoom}>
          <AboutWindow />
        </ZoomModal>
      )}
      {linkWindowOpen && (
        <ZoomModal type="link" closing={closingWindow} onClose={closeWithZoom}>
          <LinkWindow isVisible={linkWindowOpen} />
        </ZoomModal>
      )}
      {contactWindowOpen && (
        <ZoomModal type="contact" closing={closingWindow} onClose={closeWithZoom}>
          <ContactWindow />
        </ZoomModal>
      )}
      {faqWindowOpen && (
        <ZoomModal type="faq" closing={closingWindow} onClose={closeWithZoom}>
          <FaqWindow />
        </ZoomModal>
      )}

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes zoomIn {
          0% { transform: translate(-50%, -50%) scale(0.6); opacity: 0; }
          100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
        }
        @keyframes zoomOut {
          0% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
          100% { transform: translate(-50%, -50%) scale(0.6); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

const ZoomModal = ({ type, closing, onClose, children }) => (
  <div
    style={{
      width: "84vw",
      maxWidth: "780px",
      maxHeight: "calc(100vh - 60px)",
      overflow: "auto",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      zIndex: 100,
      background: "rgba(255, 255, 255, 0.15)",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      borderRadius: "28px",
      boxShadow: "0 12px 40px rgba(0,0,0,0.35)",
      border: "2px solid rgba(255, 255, 255, 0.25)",
      animation: `${closing === type ? "zoomOut" : "zoomIn"} 0.3s ease-in-out`,
    }}
  >
    {children}
    <div
      onClick={() => onClose(type)}
      style={{
        position: "absolute",
        top: "-12px",
        right: "80px",
        width: "50px",
        height: "50px",
        cursor: "pointer",
        zIndex: 110,
        animation: closing === type ? "bounce 0.3s ease-in-out" : "none",
      }}
    >
      <Player autoplay loop src={beeLottie} style={{ width: "230%", height: "100%" }} />
    </div>
  </div>
);

export default SvgIcon;
