import React, { useEffect, useState } from "react";
import Footer from "../Compounts/Footer/Footer";
import Navbar from "../Compounts/Navbar/Navbar"; // make sure you use your own Navbar component
import Login_pop from "../Pages/login/Login_pop";
import Add_to_card from "../Pages/Add_to_card_pages/Add_to_card";

const Chartai = () => {
  const current_thems = localStorage.getItem("current_thems");
  const [theme, upadtethem] = useState(current_thems ? current_thems : "light");
  const [showLogin, setshowlogin] = useState(false);
  const [showCard, setCard] = useState(false);

  // Save theme on change
  useEffect(() => {
    localStorage.setItem("current_thems", theme);
  }, [theme]);

  // Ignore ResizeObserver warning in console
  useEffect(() => {
    const handler = (e) => {
      if (e.message?.includes("ResizeObserver loop completed")) {
        e.stopImmediatePropagation();
      }
    };
    window.addEventListener("error", handler);
    window.addEventListener("unhandledrejection", handler);
    return () => {
      window.removeEventListener("error", handler);
      window.removeEventListener("unhandledrejection", handler);
    };
  }, []);

  // Load N8N Chat
  useEffect(() => {
    const loadChat = async () => {
      const { createChat } = await import(
        "https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js"
      );

      createChat({
        webhookUrl:
          "https://prathmesh1111.app.n8n.cloud/webhook/88c4c577-29b8-4372-8068-06326c5403ec/chat",
        mode: "fullscreen", // removes icon and uses container
        target: "#n8n-chat"
      });
    };

    loadChat();
  }, []);

  return (
    <div className={`page-wrapper ${theme}`} style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Chat Styles */}
      <link
        href="https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css"
        rel="stylesheet"
      />

      {showLogin && <Login_pop setshowlogin={setshowlogin} />}
      {showCard && <Add_to_card setCard={setCard} />}

      {/* Top Navbar */}
      <Navbar
        theme={theme}
        upadtethem={upadtethem}
        setshowlogin={setshowlogin}
        setCard={setCard}
      />

      {/* Chat container */}
      <div
        id="n8n-chat"
        style={{
          flex: 1,
          width: "100%",
          overflow: "hidden"
        }}
      ></div>

      {/* Bottom Footer */}
    </div>
  );
};

export default Chartai;
