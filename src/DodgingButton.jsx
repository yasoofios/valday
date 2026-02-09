import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import emailjs from "emailjs-com";


function sendEmailNo() {
  emailjs.send(
    "service_0wecnoi",
    "template_yaxbzfk",
    {},
    "PWgmG3BrlcVo0VZWk"
  )
  .then(() => {
    // alert("Email sent 💌");
  })
  .catch((err) => {
    console.error(err);
  });
}

const clamp = (v, min, max) => Math.min(Math.max(v, min), max);

export default function DodgingButton() {
  const navigate = useNavigate();
  const btnRef = useRef(null);

  const [active, setActive] = useState(false); // false = inline next to YES
  const [pos, setPos] = useState({ x: 0, y: 0 }); // used when active

  // When active, dodge around the screen
  useEffect(() => {
    if (!active) return;

    const handleMouseMove = (e) => {
      const btn = btnRef.current;
      if (!btn) return;

      const rect = btn.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;

      const distance = Math.hypot(e.clientX - cx, e.clientY - cy);

      if (distance < 100) {
        const moveX = (Math.random() - 0.5) * 600;
        const moveY = (Math.random() - 0.5) * 500;

        setPos((prev) => {
          const maxX = window.innerWidth - rect.width - 20;
          const minY = window.innerHeight / 2 + 20;  
          const minX = window.innerWidth / 2 + 20;        
          const maxY = window.innerHeight - rect.height - 20;

          return {
            x: clamp(prev.x + moveX, minX, maxX),
            y: clamp(prev.y + moveY, minY, maxY),
          };
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [active]);

  // If not active, render inline button next to YES
  if (!active) {
    return (
      <button
        ref={btnRef}
        className="action-btn no-btn"
        onMouseEnter={() => {
          // capture its current on-screen position, then go active
          const rect = btnRef.current.getBoundingClientRect();
          setPos({ x: rect.left, y: rect.top });
          setActive(true);
        }}
       onClick={
        async () => {
  try {
    await sendEmailNo();
    console.log("NO email sent ✅");
  } catch (err) {
    console.error("NO email failed ❌", err);
  }
  navigate("/no");
}}
      >
        no 😈
      </button>
    );
  }

  // When active, render a placeholder to keep spacing + fixed roaming button
  return (
    <>
      <span className="no-placeholder" />

      <button
        ref={btnRef}
        className="action-btn no-btn"
       onClick={async () => {
  try {
    await sendEmailNo();
    console.log("NO email sent ✅");
  } catch (err) {
    console.error("NO email failed ❌", err);
  }
  navigate("/no");
}}
        style={{
          position: "fixed",
          left: pos.x,
          top: pos.y,
          transition: "left 0.18s ease-out, top 0.18s ease-out",
          zIndex: 9999,
        }}
      >
        no 😈
      </button>
    </>
  );
}
