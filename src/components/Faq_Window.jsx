import * as React from "react";

const FaqWindow = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        borderRadius: "10px",
        backgroundColor: "#D5C5FF",
        fontFamily: "'Quicksand', sans-serif",
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
        padding: "5vw",
        boxSizing: "border-box",
        color: "#2e005f",
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
          FAQ –{" "}
          <span style={{ fontWeight: "600" }}>Frequently Asked Questions</span>
        </div>
      </div>

      {/* 📚 Questions */}
      <div
        style={{
          marginTop: "4vw",
          fontSize: "clamp(14px, 2.4vw, 18px)",
          fontWeight: "500",
          lineHeight: "1.85",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <p>
          <strong>Q1: What is PieWhispers?</strong>
          <br />
          A: PieWhispers is the cozy digital kingdom of creativity ruled by me
          (Pie)...<br />
          It’s the home of my projects like ComicsPie (My comic app),<br />
          QueenGPT (my sassy AI assistant), and all the things I design, build,
          and vibe with.
        </p>

        <p>
          <strong>Q2: Is ComicsPie available now?</strong>
          <br />
          A: Yes! 🥳 ComicsPie is launching first on Android.<br />
          The desktop version will arrive a few months later.<br />
          Keep an eye out for updates — we drop sneak peeks here & on social
          media!
        </p>

        <p>
          <strong>Q3: What is QueenGPT?</strong>
          <br />
          A: QueenGPT is my personal AI — she’s royal, sassy, helpful,
          and kind of a flirt but kind inspired by ChatGPT....<br />
          She’s still in the castle being trained & built, but you’ll meet her soon...
        </p>

        <p>
          <strong>Q4: How do I support your work?</strong>
          <br />
          A: Aww thank you! 💖 You can support me by:<br />
          • Sharing the site and app with friends<br />
          • Following on social media<br />
          • Or buying me a lil’ ☕ on Ko-fi
        </p>

        <p>
          <strong>Q5: Can I collaborate with you?</strong>
          <br />
          A: Absolutely! If you’re an artist, dev, or dreamer — I’d love to vibe
          and create together. Hit me up through email directly.
        </p>

        <p>
          <strong>Q6: Where’s all my ComicsPie data stored?</strong>
          <br />
          A: All app user data is safely stored and synced with our website,
          PieWhispers — so you can log in anywhere & keep your reading streaks,
          saved comics, and favorites 🐱📚
        </p>

        <p>
          <strong>Q7: How can I report bugs or suggest features?</strong>
          <br />
          A: I love feedback! Use the Contact window or email me directly.<br />
          Bonus if you describe the issue clearly so we can squish the bugs faster..
        </p>
      </div>
    </div>
  );
};

export default FaqWindow;
