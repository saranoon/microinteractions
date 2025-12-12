

"use client";
import { useRef } from "react";
import gsap from "gsap";
import { 
  TR_MicroInteractions_WrapBox,
  TR_MicroInteractions_Box,
  TR_MicroInteractions_Card
} from "../styles/style-micro-interactions"

const CardCompon = () => {
  const cardRef = useRef(null);
  const imgRef = useRef(null);
  //const textRef = useRef(null);
  const glowRef = useRef(null);

  // Hover in
  const onEnter = () => {
    gsap.to(cardRef.current, {
      y: -12,
      scale: 1.03,
      duration: 0.3,
      ease: "power3.out",
      boxShadow: "0 20px 40px rgba(0,0,0,0.18)",
    });

    gsap.to(imgRef.current, {
      scale: 1.1,
      duration: 0.4,
      ease: "power3.out",
    });

    // gsap.to(textRef.current.children, {
    //   opacity: 1,
    //   y: 0,
    //   duration: 0.25,
    //   stagger: 0.07,
    //   ease: "power2.out",
    // });

    gsap.to(glowRef.current, {
      opacity: 1,
      duration: 0.3,
    });
  };

  // Hover out
  const onLeave = () => {
    gsap.to(cardRef.current, {
      y: 0,
      scale: 1,
      duration: 0.3,
      ease: "power3.inOut",
      boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
    });

    gsap.to(imgRef.current, {
      scale: 1,
      duration: 0.3,
    });

    // gsap.to(textRef.current.children, {
    //   opacity: 0,
    //   y: 8,
    //   duration: 0.2,
    //   stagger: 0.05,
    // });

    gsap.to(glowRef.current, {
      opacity: 0,
      duration: 0.25,
    });
  };

  return (
    <>
    <TR_MicroInteractions_WrapBox  id="02">
      <h2>Card</h2>
        <TR_MicroInteractions_Card>
          <div
            ref={cardRef}
            className="card-box"
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
          >
            {/* <div ref={glowRef} className="glow-line"></div> */}

            <div className="img-wrap">
              <img
                ref={imgRef}
                src="https://static.thairath.co.th/media/00_A5B2901170C1E1280.webp"
                alt="Card"
              />
            </div>
            <div className="box-caption">
              <h3>Checklist for an Emergency Survival Bag: What to Prepare to Cope with Border Clashes</h3>
              <div className="text-content">
                <p>Clashes between Thailand and Cambodia have raised concerns as Cambodia may deploy the large-caliber multi-barrel rocket system PHL-03, which can fire up to 130 kilometers and potentially impact several Thai provinces. Therefore, preparing an emergency survival bag in advance is essential. Here is a list of what to include.</p>
              </div>
            </div>
          </div>
        </TR_MicroInteractions_Card>
    </TR_MicroInteractions_WrapBox>
    </>
  );
};

export default CardCompon;
