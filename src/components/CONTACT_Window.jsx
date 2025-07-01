import * as React from "react";
import emailImage from "../assets/email.png";

const ContactWindow = () => {
  const openEmail = () => {
    window.open(
      "https://mail.google.com/mail/?view=cm&to=piewhispers@gmail.com&su=Let's%20Collab",
      "_blank"
    );
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#D5C5FF",
        borderRadius: "10px",
        overflowY: "auto",
        fontFamily: "'Quicksand', sans-serif",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* 🌸 Top Bar */}
      <div
        style={{
          backgroundColor: "#FBD0FF",
          padding: "12px 20px",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: "clamp(16px, 4vw, 26px)",
            fontWeight: "700",
            color: "#944A9A",
            textShadow: "0 1px 2px rgba(0,0,0,0.1)",
          }}
        >
          CONTACT – <span style={{ fontWeight: "600" }}>Pie</span>
        </div>
      </div>

      {/* 💌 Content */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-start",
          padding: "5vw 6vw",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {/* 📜 Text Section */}
        <div
          style={{
            flex: "1 1 55%",
            minWidth: "260px",
            color: "#2e005f",
            fontSize: "clamp(14px, 2.6vw, 18px)",
            lineHeight: "1.65",
            fontWeight: "600",
            paddingRight: "1vw",
          }}
        >
          <p>
            <strong>
              Wanna reach out... to the Brain or heart behind all this magic?
            </strong>
          </p>
          <p>I'm just one message away!</p>
          <p>
            Whether you’ve got a <strong>question</strong>, an{" "}
            <strong>idea</strong>,
            <br />
            or just wanna <strong>say hi</strong>
            <br />
            — <em>Click onto that image over there</em>
            <br />
            & slide into my inbox 💌
          </p>

          <p style={{ marginTop: "20px" }}>
            <strong>Let’s make something amazing together...</strong>
          </p>

          <p
            style={{
              fontSize: "clamp(12px, 2vw, 15px)",
              marginTop: "30px",
              color: "#4b007b",
              fontStyle: "italic",
              fontWeight: "600",
            }}
          >
            I don’t usually check DMs on social media,
            <br />
            <span style={{ textDecoration: "underline" }}>
              so email is the best way to reach me.
            </span>
          </p>
        </div>

        {/* 💌 Email Image */}
        <div
          onClick={openEmail}
          style={{
            flex: "1 1 35%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minWidth: "180px",
            cursor: "pointer",
          }}
        >
          <img
            src={emailImage}
            alt="Email Pie"
            title="Click to Email Pie 💌"
            style={{
              width: "100%",
              maxWidth: "220px",
              height: "auto",
              borderRadius: "10px",
              objectFit: "cover",
              boxShadow: "0 0 8px rgba(0, 0, 0, 0.1)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactWindow;
