

"use client";
import { useRef } from "react";
import gsap from "gsap";
import { 
  TR_MicroInteractions_Button,
  TR_MicroInteractions_Box,
  TR_MicroInteractions_WrapBox
} from "../styles/style-micro-interactions"

const AnimatedButtonCompon = () => {
   const btnRef = useRef(null);

  const handleEnter = () => {
    gsap.to(btnRef.current, {
      scale: 1.1,
      duration: 0.2,
      ease: "power2.out",
    });
  };

  const handleLeave = () => {
    gsap.to(btnRef.current, {
      scale: 1,
      duration: 0.2,
      ease: "power2.out",
    });
  };

  const handleClick = () => {
    gsap.fromTo(
      btnRef.current,
      { scale: 1 },
      { scale: 0.9, yoyo: true, repeat: 1, duration: 0.1 }
    );
  };

  return (
    <>
     <TR_MicroInteractions_WrapBox id="01">
      <h2>Animated Button</h2>
      <TR_MicroInteractions_Box>
      <TR_MicroInteractions_Button>
        <button
          ref={btnRef}
          className="btn btn-solid"
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
          onClick={handleClick}
        >
            Button
        </button>
      </TR_MicroInteractions_Button>
      </TR_MicroInteractions_Box>
    </TR_MicroInteractions_WrapBox>
    </>
  );
};

export default AnimatedButtonCompon;
