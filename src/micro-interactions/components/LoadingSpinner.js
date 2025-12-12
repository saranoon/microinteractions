

"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { 
  TR_MicroInteractions_Loading,
  TR_MicroInteractions_Box,
  TR_MicroInteractions_Grid,
  TR_MicroInteractions_WrapBox
} from "../styles/style-micro-interactions"

const LoadingSpinnerCompon = () => {
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
    <TR_MicroInteractions_WrapBox id="08">
      <TR_MicroInteractions_Loading>
        <h2>Loading Spinner</h2>
        <TR_MicroInteractions_Grid>
          <TR_MicroInteractions_Box>
              <div ref={spinnerRef} className="spinner"></div>
          </TR_MicroInteractions_Box>
          <TR_MicroInteractions_Box>
              <div className="progress-bar">
                <div ref={progressRef} className="progress"></div>
              </div>
          </TR_MicroInteractions_Box>
        </TR_MicroInteractions_Grid>
      </TR_MicroInteractions_Loading>
    </TR_MicroInteractions_WrapBox>
    </>
  );
};

export default LoadingSpinnerCompon;
