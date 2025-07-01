import * as React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import workAnimation from "../assets/work-lottie.json";
import aboutmeAnimation from "../assets/About-me.json";
import linksAnimation from "../assets/Links.json";
import contactAnimation from "../assets/Contact.json";
import faqAnimation from "../assets/Faq.json";
import sleepingCatAnimation from "../assets/Sleeping-cat.json";
import WorkWindow from "./WORK_Window";
import AboutWindow from "./About_Window";
import LinkWindow from "./Link_Window";
import ContactWindow from "./CONTACT_Window";
import FaqWindow from "./Faq_Window";
import beeLottie from "../assets/Bee.json";
import homePhoneBee from "../assets/home_phone_bee.json";
import openSound from "../assets/open.mp3";
import closeSound from "../assets/close.mp3";

const getWallpaperColor = () => "rgba(255, 255, 255, 0.2)";

// Add this helper at the top
const isLowEndDevice = () => {
  const memory = navigator.deviceMemory || 4;
  const cores = navigator.hardwareConcurrency || 4;
  const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  return isMobile && (memory <= 2 || cores <= 4);
};


const HomePhone = () => {
  const openAudio = React.useRef(new Audio(openSound));
  const closeAudio = React.useRef(new Audio(closeSound));
  const [bounceId, setBounceId] = React.useState(null);
  const [wallpaperIndex, setWallpaperIndex] = React.useState(() =>
    Math.floor(Math.random() * 15) + 2
  );
  const jpgWallpapers = [9, 6, 10, 12, 13, 14, 15, 16, 5]; // example: use jpg for these indexes
  const [useImage, setUseImage] = React.useState(false); // still keep device logic
  const [workWindowOpen, setWorkWindowOpen] = React.useState(false);
  const [aboutWindowOpen, setAboutWindowOpen] = React.useState(false);
  const [linkWindowOpen, setLinkWindowOpen] = React.useState(false);
  const [contactWindowOpen, setContactWindowOpen] = React.useState(false);
  const [faqWindowOpen, setFaqWindowOpen] = React.useState(false);
  const [closingWindow, setClosingWindow] = React.useState(null);

React.useEffect(() => {
  const shouldUseImage = isLowEndDevice();
  setUseImage(shouldUseImage);
  console.log("📱 Low-end detected:", shouldUseImage ? "Using .jpg" : "Using .mp4");
}, []);

  const triggerBounce = (id) => {
    setBounceId(id);
    setTimeout(() => setBounceId(null), 700);
  };

  const handleCatClick = () => {
    setWallpaperIndex((prev) => (prev >= 16 ? 2 : prev + 1));
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

  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", position: "relative" }}>
      {/* 🌠 Dynamic Wallpaper: mp4 or jpg */}
     {useImage || jpgWallpapers.includes(wallpaperIndex) ? (
  <img
    src={`/wallpapers/phone${wallpaperIndex}.jpg`}
    alt="Wallpaper"
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      zIndex: 0,
    }}
  />
) : (
  <video
    autoPlay
    muted
    loop
    playsInline
    key={`wallpaper-${wallpaperIndex}`}
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      zIndex: 0,
    }}
  >
    <source src={`/wallpapers/phone${wallpaperIndex}.mp4`} type="video/mp4" />
  </video>
)}

      {/* 🐈 Cat Toggle Button */}
      <div
        onClick={() => {
          triggerBounce("cat");
          handleCatClick();
        }}
        style={{
          position: "absolute",
          top: "1vw",
          left: "1vw",
          width: "5vw",
          height: "5vw",
          cursor: "pointer",
          zIndex: 20,
          animation: bounceId === "cat" ? "bounce 0.6s ease-in-out" : "none",
        }}
      >
        <Player autoplay loop src={sleepingCatAnimation} style={{ width: "350%", height: "350%" }} />
      </div>

      {/* 💫 Centered Blurred Panel with Bee and Icons */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "90vw",
          height: "25vh",
          borderRadius: "20px",
          background: getWallpaperColor(),
          backdropFilter: "blur(28px)",
          WebkitBackdropFilter: "blur(28px)",
          zIndex: 1,
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "0 3vw",
        }}
      >
        {/* 🐝 Bee */}
        <div
          style={{
            position: "absolute",
            top: "-28px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "64px",
            height: "64px",
            zIndex: 2,
          }}
        >
          <Player autoplay loop src={homePhoneBee} style={{ width: "100%", height: "100%" }} />
        </div>

        {/* 📲 Icon Buttons */}
        {[{ id: "work", anim: workAnimation, text: "Work", setOpen: setWorkWindowOpen },
          { id: "about", anim: aboutmeAnimation, text: "About", setOpen: setAboutWindowOpen },
          { id: "contact", anim: contactAnimation, text: "Contact", setOpen: setContactWindowOpen },
          { id: "faq", anim: faqAnimation, text: "FAQ", setOpen: setFaqWindowOpen },
          { id: "links", anim: linksAnimation, text: "Links", setOpen: setLinkWindowOpen }]
          .map(({ id, anim, text, setOpen }) => (
          <div key={id} style={{ textAlign: "center" }}>
            <div
              onClick={() => {
                triggerBounce(id);
                openAudio.current.play();
                setOpen(true);
              }}
              style={{
                width: "56px",
                height: "56px",
                cursor: "pointer",
                animation: bounceId === id ? "bounce 0.4s ease-in-out" : "none",
              }}
            >
              <Player autoplay loop src={anim} style={{ width: "100%", height: "100%" }} />
            </div>
            <div
              style={{
                marginTop: "5px",
                fontSize: "12.5px",
                fontWeight: "900",
                color: "#fff",
                fontFamily: "'Quicksand', sans-serif",
              }}
            >
              {text}
            </div>
          </div>
        ))}
      </div>

      {/* 🪟 Modal Windows */}
      {workWindowOpen && <ZoomModal type="work" closing={closingWindow} onClose={closeWithZoom}><WorkWindow /></ZoomModal>}
      {aboutWindowOpen && <ZoomModal type="about" closing={closingWindow} onClose={closeWithZoom}><AboutWindow /></ZoomModal>}
      {linkWindowOpen && <ZoomModal type="link" closing={closingWindow} onClose={closeWithZoom}><LinkWindow isVisible={linkWindowOpen} /></ZoomModal>}
      {contactWindowOpen && <ZoomModal type="contact" closing={closingWindow} onClose={closeWithZoom}><ContactWindow /></ZoomModal>}
      {faqWindowOpen && <ZoomModal type="faq" closing={closingWindow} onClose={closeWithZoom}><FaqWindow /></ZoomModal>}

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        @keyframes slideUpIn {
          0% { transform: translate(-50%, 100%); opacity: 0; }
          100% { transform: translate(-50%, 0%); opacity: 1; }
        }
        @keyframes slideDownOut {
          0% { transform: translate(-50%, 0%); opacity: 1; }
          100% { transform: translate(-50%, 100%); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

const ZoomModal = ({ type, closing, onClose, children }) => (
  <div
    style={{
      width: "94vw",
      maxHeight: "88vh",
      overflowY: "auto",
      position: "absolute",
      bottom: "0px",
      left: "50%",
      transform: "translateX(-50%)",
      background: "rgba(255, 255, 255, 0.1)",
      backdropFilter: "blur(24px)",
      WebkitBackdropFilter: "blur(24px)",
      borderTopLeftRadius: "24px",
      borderTopRightRadius: "24px",
      border: "2px solid rgba(255,255,255,0.2)",
      boxShadow: "0 -8px 30px rgba(0,0,0,0.3)",
      animation: `${closing === type ? "slideDownOut" : "slideUpIn"} 0.3s ease-out`,
      padding: "20px 16px",
      zIndex: 100,
    }}
  >
    <div style={{ marginTop: "20px" }}>{children}</div>
    <div
      onClick={() => onClose(type)}
      style={{
        position: "absolute",
        top: "-10px",
        right: "40px",
        width: "50px",
        height: "50px",
        cursor: "pointer",
        zIndex: 110,
        animation: closing === type ? "bounce 0.3s ease-in-out" : "none",
      }}
    >
      <Player autoplay loop src={beeLottie} style={{ width: "220%", height: "100%" }} />
    </div>
  </div>
);

export default HomePhone;
