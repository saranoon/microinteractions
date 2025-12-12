"use client";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { 
  TR_MicroInteractions_WrapBox,
  TR_MicroInteractions_Box,
  TR_MicroInteractions_Theme
} from "../styles/style-micro-interactions"

const ThemeToggleCompon = () => {
  const [dark, setDark] = useState(false);

  const knobRef = useRef(null);
  const sunRef = useRef(null);
  const moonRef = useRef(null);
  const bgRef = useRef(null);

  const toggleTheme = () => {
    setDark(!dark);

    // ปุ่มเลื่อน
    gsap.to(knobRef.current, {
      x: !dark ? 26 : 0,
      duration: 0.3,
      ease: "power2.out",
    });

    // Sun fade out / Moon fade in
    gsap.to(sunRef.current, {
      opacity: dark ? 1 : 0,
      scale: dark ? 1 : 0.5,
      rotate: dark ? 0 : 120,
      duration: 0.35,
    });

    gsap.to(moonRef.current, {
      opacity: dark ? 0 : 1,
      scale: dark ? 0.5 : 1,
      rotate: dark ? -120 : 0,
      duration: 0.35,
    });

    // Background flash + tint
    gsap.fromTo(
      bgRef.current,
      { opacity: 0.3 },
      { opacity: 0, duration: 0.4, ease: "power1.out" }
    );

    // Theme apply (HTML)
    document.documentElement.setAttribute(
      "data-theme",
      !dark ? "dark" : "light"
    );
  };

  useEffect(() => {
    // ตั้งค่าเริ่มต้นของไอคอน
    gsap.set(moonRef.current, { opacity: 0, scale: 0.5 });
  }, []);

  return (
    <>
    <TR_MicroInteractions_WrapBox id="09">
      <h2>Toggle Switches</h2>
      <TR_MicroInteractions_Box>
        <TR_MicroInteractions_Theme>
           <div className="toggle-wrapper">
            <div ref={bgRef} className="flash-bg"></div>
            <button className="toggle-btn" onClick={toggleTheme}>
              <div ref={knobRef} className="knob"></div>
              <span ref={sunRef} className="icon sun">
                {/* ☀️ */}
                <svg xmlns="http://www.w3.org/2000/svg" width="14.373" height="14.373" viewBox="0 0 14.373 14.373"><g id="Light" transform="translate(0)"><path id="Path_10299" data-name="Path 10299" d="M10.787,3.6a.9.9,0,0,1,.9.9v.9a.9.9,0,1,1-1.8,0V4.5A.9.9,0,0,1,10.787,3.6Zm3.593,7.187a3.593,3.593,0,1,1-3.593-3.593A3.593,3.593,0,0,1,14.38,10.787Zm-.417,4.447.635.635a.9.9,0,1,0,1.27-1.27l-.635-.635a.9.9,0,1,0-1.27,1.27Zm1.9-9.529a.9.9,0,0,1,0,1.27l-.634.635a.9.9,0,1,1-1.27-1.27L14.6,5.7a.9.9,0,0,1,1.27,0Zm1.207,5.98a.9.9,0,1,0,0-1.8h-.9a.9.9,0,0,0,0,1.8Zm-6.288,3.593a.9.9,0,0,1,.9.9v.9a.9.9,0,1,1-1.8,0v-.9A.9.9,0,0,1,10.787,15.278ZM6.34,7.61A.9.9,0,0,0,7.611,6.34L6.975,5.7A.9.9,0,1,0,5.7,6.975l.635.635Zm1.27,7.623-.635.635A.9.9,0,1,1,5.7,14.6l.635-.635a.9.9,0,1,1,1.27,1.27ZM5.4,11.685a.9.9,0,1,0,0-1.8H4.5a.9.9,0,1,0,0,1.8Z" transform="translate(-3.6 -3.6)" fill="#00b400" fill-rule="evenodd"></path></g></svg>
              </span>
              <span ref={moonRef} className="icon moon">
                {/* 🌙 */}
                <svg xmlns="http://www.w3.org/2000/svg" width="11.831" height="11.831" viewBox="0 0 11.831 11.831"><path id="moon-fill" d="M8.554,3.029a4.441,4.441,0,1,0,6.276,6.276A5.921,5.921,0,1,1,8.554,3.029Z" transform="translate(-3 -3.029)" fill="#00b400"></path></svg>
              </span>
            </button>
          </div>
        </TR_MicroInteractions_Theme>
      </TR_MicroInteractions_Box>
    </TR_MicroInteractions_WrapBox>
    </>
  );
};

export default ThemeToggleCompon;
