

"use client";
import { useRef } from "react";
import gsap from "gsap";
import { 
  TR_MicroInteractions_WrapBox,
  TR_MicroInteractions_FormLogin,
  TR_MicroInteractions_Box
} from "../styles/style-micro-interactions"

const InputValidationCompon = () => {
  const inputRef = useRef(null);
  const errorRef = useRef(null);

  const handleSubmit = () => {
    const input = inputRef.current;
    const error = errorRef.current;

    if (input.value.trim() === "") {
      gsap.fromTo(
        input,
        { x: 0 },
        { x: -10, repeat: 5, yoyo: true, duration: 0.05 }
      );

      gsap.to(error, {
        opacity: 1,
        y: 2,
        duration: 0.2,
      });

      input.classList.remove("success");
      input.classList.add("error");
    } 
    else {
      gsap.to(error, {
        opacity: 0,
        y: 0,
        duration: 0.2,
      });

      input.classList.remove("error");
      input.classList.add("success");

      // เอฟเฟกต์เบา ๆ ตอนผ่าน
      gsap.fromTo(
        input,
        { scale: 1 },
        { scale: 1.03, yoyo: true, repeat: 1, duration: 0.1 }
      );
    }
  };

  return (
    <>
    <TR_MicroInteractions_WrapBox id="06">
      <h2>Input Validation</h2>
      <TR_MicroInteractions_Box>
        
      <TR_MicroInteractions_FormLogin>
        <div className="form-wrap">
          <h3>Login</h3>
        <input
          ref={inputRef}
          type="text"
          placeholder="Enter your name"
          className="input"
        />
        
        <small ref={errorRef} className="error-text">
          กรุณากรอกข้อมูล
        </small>

        <button className="submit-btn" onClick={handleSubmit}>
          Submit
        </button>
      </div>
      </TR_MicroInteractions_FormLogin>
      </TR_MicroInteractions_Box>
    </TR_MicroInteractions_WrapBox>
    </>
  );
};

export default InputValidationCompon;
