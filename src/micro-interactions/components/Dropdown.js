

"use client";
import { useState, useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { 
  TR_MicroInteractions_WrapBox,
  TR_MicroInteractions_Box,
  TR_MicroInteractions_Dropdown
} from "../styles/style-micro-interactions"

const DropdownCompon = () => {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);
  const listRef = useRef(null);
  const arrowRef = useRef(null);

  useLayoutEffect(() => {
    if (open) {
      // เปิด dropdown: ขยายความสูง + fade menu items
      gsap.to(wrapRef.current, {
        height: "auto",
        duration: 0.3,
        ease: "power2.out",
      });

      gsap.fromTo(
        listRef.current.children,
        { opacity: 0, y: -8 },
        {
          opacity: 1,
          y: 0,
          duration: 0.25,
          stagger: 0.05,
          ease: "power2.out",
        }
      );

      gsap.to(arrowRef.current, {
        rotate: 180,
        duration: 0.25,
      });
    } else {
      // ปิด dropdown: ยุบความสูง + fade out
      gsap.to(wrapRef.current, {
        height: 0,
        duration: 0.25,
        ease: "power2.inOut",
      });

      gsap.to(arrowRef.current, {
        rotate: 0,
        duration: 0.25,
      });
    }
  }, [open]);

  return (
    <>
    <TR_MicroInteractions_WrapBox id="05">
      <h2>Dropdown</h2>
     <TR_MicroInteractions_Box>
       
        <TR_MicroInteractions_Dropdown>
          <div className="dropdown-container">
          <button className="dropdown-header" onClick={() => setOpen(!open)}>
            <span>Menu Dropdown</span>
            <span ref={arrowRef} className="arrow">⌄</span>
          </button>

          <div ref={wrapRef} className="dropdown-wrap">
            <ul ref={listRef} className="dropdown-list">
              <li>Dashboard</li>
              <li>Profile</li>
              <li>Settings</li>
              <li>Logout</li>
            </ul>
          </div>
        </div>
        </TR_MicroInteractions_Dropdown>
      </TR_MicroInteractions_Box>
    </TR_MicroInteractions_WrapBox>
    </>
  );
};

export default DropdownCompon;
