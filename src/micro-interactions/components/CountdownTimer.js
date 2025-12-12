

"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { 
  TR_MicroInteractions_WrapBox,
  TR_MicroInteractions_Box,
  TR_MicroInteractions_CountdownTimer
} from "../styles/style-micro-interactions"

const CountdownTimerCompon = () => {
   const DURATION = 10; // ความยาว countdown (วินาที)
  const [time, setTime] = useState(DURATION);

  const numRef = useRef(null);
  const ringRef = useRef(null);
  const flashRef = useRef(null);

  useEffect(() => {
    let interval;

    // Progress ring animation
    gsap.to(ringRef.current, {
      strokeDashoffset: 314,     // วงกลมรอบใหญ่
      duration: DURATION,
      ease: "none",
    });

    interval = setInterval(() => {
      setTime((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          finishAnimation();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // เอฟเฟกต์เมื่อเลขเปลี่ยน
  useEffect(() => {
    gsap.fromTo(
      numRef.current,
      { scale: 0.6, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.25, ease: "back.out(2)" }
    );
  }, [time]);

  // Animation เมื่อหมดเวลา
  const finishAnimation = () => {
    gsap.fromTo(
      flashRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.15,
        yoyo: true,
        repeat: 4,
        ease: "power1.inOut",
      }
    );
  };

  return (
    <>
    <TR_MicroInteractions_WrapBox id="04">
      <h2>Countdown Timer</h2>
     <TR_MicroInteractions_Box>
       
        <TR_MicroInteractions_CountdownTimer>
           <div className="countdown-wrapper">
            <div ref={flashRef} className="flash"></div>

            <svg className="progress-ring" width="140" height="140">
              <circle
                ref={ringRef}
                className="ring"
                r="50"
                cx="70"
                cy="70"
                strokeWidth="8"
                fill="none"
              />
            </svg>

            <div ref={numRef} className="count-number">
              {time}
            </div>
          </div>
        </TR_MicroInteractions_CountdownTimer>
      </TR_MicroInteractions_Box>
    </TR_MicroInteractions_WrapBox>
    </>
  );
};

export default CountdownTimerCompon;
