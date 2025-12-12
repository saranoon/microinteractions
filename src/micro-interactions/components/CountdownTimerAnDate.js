"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { 
  TR_MicroInteractions_WrapBox,
  TR_MicroInteractions_Countdown
} from "../styles/style-micro-interactions"
const CountdownTimerAnyDateCompon = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({});
  const dayRef = useRef(null);
  const hourRef = useRef(null);
  const minuteRef = useRef(null);
  const secondRef = useRef(null);

  // Calculate countdown
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const target = new Date(targetDate).getTime();
    const diff = target - now;

    if (diff <= 0)
      return { days: 0, hours: 0, minutes: 0, seconds: 0, finished: true };

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / 1000 / 60) % 60),
      seconds: Math.floor((diff / 1000) % 60),
      finished: false,
    };
  };

  // ⏳ Update timer every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        const updated = calculateTimeLeft();

        // Animate when values change
        if (updated.days !== prev.days) bounce(dayRef);
        if (updated.hours !== prev.hours) bounce(hourRef);
        if (updated.minutes !== prev.minutes) bounce(minuteRef);
        if (updated.seconds !== prev.seconds) bounce(secondRef);

        return updated;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // GSAP bounce effect
  const bounce = (ref) => {
    gsap.fromTo(
      ref.current,
      { scale: 1 },
      { scale: 1.2, duration: 0.2, yoyo: true, repeat: 1, ease: "power1.out" }
    );
  };

  if (timeLeft.finished)
    return (
      <h2 style={{ textAlign: "center", fontSize: "30px", marginTop: "40px" }}>
        🎉 Countdown Finished!
      </h2>
    );

  return (
     <TR_MicroInteractions_WrapBox id="03">
      <h2>Countdown</h2>
      <TR_MicroInteractions_Countdown>
        <div className="countdown-box">
          <div className="box">
            <div  className="box-num">
              <div ref={dayRef}>{timeLeft.days}</div>
            </div>
            <p>Days</p>
          </div>
          <div className="box">
            <div className="box-num">
              <div ref={hourRef}>{timeLeft.hours}</div>
            </div>
            <p>Hours</p>
          </div>
          <div  className="box">
            <div className="box-num">
              <div ref={minuteRef}>{timeLeft.minutes}</div>
            </div>
            <p>Minutes</p>
          </div>
          <div  className="box">
            <div  className="box-num">
              <div ref={secondRef}>{timeLeft.seconds}</div>
            </div>
            <p>Seconds</p>
          </div>
        </div>
      </TR_MicroInteractions_Countdown>
    </TR_MicroInteractions_WrapBox>
  );
};

export default CountdownTimerAnyDateCompon;
