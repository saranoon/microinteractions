

"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { 
  TR_MicroInteractions_Loading
} from "../styles/style-micro-interactions"

const ToggleSwitchCompon = () => {
  const spinnerRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    // หมุนวง Spinner
    gsap.to(spinnerRef.current, {
      rotation: 360,
      repeat: -1,
      ease: "linear",
      duration: 1,
    });

    // Progress bar 0 → 100%
    gsap.fromTo(
      progressRef.current,
      { width: "0%" },
      {
        width: "100%",
        duration: 3,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <>
    <TR_MicroInteractions_Loading>
      <h2>Toggle SwitchCompon</h2>
      
    </TR_MicroInteractions_Loading>
    </>
  );
};

export default ToggleSwitchCompon;
