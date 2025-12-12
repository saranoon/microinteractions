"use client";

import { useRef, useState } from "react";
import gsap from "gsap";

import { 
  TR_MicroInteractions_WrapBox,
  TR_MicroInteractions_Box,
  TR_MicroInteractions_LikeButton
} from "../styles/style-micro-interactions"

const LikeButtonCompon = () => {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(128);

  const heartRef = useRef(null);
  const burstRef = useRef(null);
  const countRef = useRef(null);

  const handleLike = () => {
    if (!liked) {
      setLiked(true);
      setCount(count + 1);

      // ✅ Heart bounce
      gsap.fromTo(
        heartRef.current,
        { scale: 0.6 },
        { scale: 1.2, duration: 0.2, yoyo: true, repeat: 1 }
      );

      // ✅ Counter bounce
      gsap.fromTo(
        countRef.current,
        { y: 0 },
        { y: -8, duration: 0.15, yoyo: true, repeat: 1 }
      );

      // ✅ Particle burst
      gsap.fromTo(
        burstRef.current.children,
        { opacity: 1, scale: 0 },
        {
          opacity: 0,
          scale: 1.8,
          duration: 0.6,
          stagger: 0.05,
          x: () => gsap.utils.random(-30, 30),
          y: () => gsap.utils.random(-30, 30),
        }
      );
    } else {
      // ✅ Unlike
      setLiked(false);
      setCount(count - 1);

      gsap.fromTo(
        heartRef.current,
        { scale: 1 },
        { scale: 0.8, duration: 0.15, yoyo: true, repeat: 1 }
      );
    }
  };

  return (
   <TR_MicroInteractions_WrapBox id="07"> 
     <h2>Like / Favorite</h2>
     <TR_MicroInteractions_Box>
      <TR_MicroInteractions_LikeButton>

        <button className="like-btn" onClick={handleLike}>
          <span
            ref={heartRef}
            className={`heart ${liked ? "active" : ""}`}
          >
           <svg id="save_article_button" width="40" height="40" viewBox="0 0 40 40" fill="none"><path d="M19.9994 39.4258C30.7283 39.4258 39.4258 30.7283 39.4258 19.9994C39.4258 9.27051 30.7283 0.573013 19.9994 0.573013C9.2705 0.573013 0.572998 9.27051 0.572998 19.9994C0.572998 30.7283 9.2705 39.4258 19.9994 39.4258Z" stroke="black"></path><path d="M27.1494 27.7649C27.164 27.9938 27.1149 28.2223 27.0077 28.4251C26.9005 28.6278 26.7394 28.797 26.542 28.9138C26.3446 29.0306 26.1187 29.0906 25.8894 29.0871C25.6601 29.0835 25.4362 29.0167 25.2425 28.8938L20.3317 23.4261L20.0006 23.1969L19.6682 23.4261L14.7574 28.8938C14.5637 29.0167 14.3398 29.0835 14.1105 29.0871C13.8812 29.0906 13.6554 29.0306 13.458 28.9138C13.2607 28.797 13.0994 28.6278 12.9922 28.4251C12.885 28.2223 12.8359 27.9938 12.8505 27.7649V12.2305C12.839 11.8888 12.9635 11.5566 13.1966 11.3065C13.4296 11.0565 13.7523 10.909 14.0939 10.8965H25.9072C26.2488 10.909 26.5715 11.0565 26.8046 11.3065C27.0377 11.5566 27.1622 11.8888 27.1507 12.2305V27.7649H27.1494Z" fill="black"></path></svg>
          </span>

          <span ref={countRef} className="count">
            {count}
          </span>

          {/* Particles */}
          <div ref={burstRef} className="burst">
            {[...Array(6)].map((_, i) => (
              <i key={i} />
            ))}
          </div>
        </button>

      </TR_MicroInteractions_LikeButton>
      </TR_MicroInteractions_Box>
    </TR_MicroInteractions_WrapBox>
  );
};

export default LikeButtonCompon;
