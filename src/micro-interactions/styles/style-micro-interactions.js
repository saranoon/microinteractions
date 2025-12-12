"use client";
import styled from "@emotion/styled"


export const MicroInteractions_Header = styled.header`
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    padding: 0 20px;
    z-index: 100;
    border-bottom: 1px solid rgb(242, 242, 242);
    background: #FFF;
    h1 {
        margin: 0;
        padding: 0;
        font-size: 28px;
    }
`
 export const MicroInteractions_Aside = styled.aside`
    position: relative;
    height: 100%;
    top: 0;
    left: 0;
    padding: 30px 20px;
    border-right: 1px solid rgb(242, 242, 242);
    ul {
       position: sticky;
      top: 80px;
      margin: 0;
      padding: 0;
      display: grid;
      grid-gap: 12px;
      li {
        list-style: none;
        a {
          text-decoration: none;
          color: #000;
          &:hover {
            color: #00b400;
          }
        }
      }
    }
`
export const MicroInteractions_Body = styled.div`
  display: grid;
  align-items: flex-start;
  grid-template-columns: 300px 1fr;
`
export const MicroInteractions_Main = styled.div`
  position: relative;
  z-index: 10;
  margin-top: 30px;
  padding: 0 20px 40px 20px;
   h2 {
      margin: 0 0 20px 0;
    }
`
export const MicroInteractions = styled.div`
    position: relative;
    padding: 40px 0;

    h1, h2, h3 {
        margin: 0;
        padding: 0;
        color: #000;
        display: block;
    }
   
    h3 {
        font-size: 40px;
        font-weight: normal;
        margin-bottom: 30px;
    }
    .container {
        max-width: 1140px;
        margin: 0 auto;
    }
`
export const TR_MicroInteractions_Section = styled.div`
    padding: 30px 0;
`
export const TR_MicroInteractions_Loading = styled.div`
/* Spinner */
.spinner {
  width: 42px;
  height: 42px;
  margin: 0 auto 20px;
  border: 4px solid #e5e5e5;
  border-top: 4px solid #00b400;
  border-radius: 50%;
}

/* Progress bar */
.progress-bar {
  width: 100%;
  height: 8px;
  background: #eee;
  border-radius: 10px;
  overflow: hidden;
}

.progress {
  width: 0%;
  height: 100%;
  background: #00b400;
}

`
export const TR_MicroInteractions_Button = styled.div`

.btn {
  padding: 14px 40px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 999px;
  cursor: pointer;
  border: none;
  outline: none;
  transition: box-shadow 0.2s ease;
}
.btn-solid {
  background: #00b400;
  color: #fff;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
}

.btn-solid:hover {
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.35);
}
.btn-outline {
  background: transparent;
  color: #000;
  border: 2px solid #000;
}

.btn-outline:hover {
  box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.1);
}

`

export const TR_MicroInteractions_FormLogin = styled.div`
width: 100%;
    .form-wrap {
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    small {
      padding: 0;
      margin: 0;
    }
    h3 {
        margin: 0 0 10px 0;
        padding: 0;
        font-family: 'Noto Sans Thai', 'Noto Sans';
        font-weight: bold;
        font-size: 20px;
    }
    .input {
        padding: 12px 14px;
        font-size: 15px;
        border-radius: 8px;
        font-family: 'Noto Sans Thai', 'Noto Sans';
        border: 1px solid #ccc;
        outline: none;
        transition: border-color 0.2s ease;
        &:focus {
          border-color: #000;
        }
    }
    .input.error {
        border-color: #ff3b3b;
    }
    .input.success {
        border-color: #00b26f;
    }
    .error-text {
        font-size: 12px;
        color: #ff3b3b;
        opacity: 0;
        transform: translateY(0);
    }
    .submit-btn {
        margin-top: 12px;
        padding: 12px;
        border-radius: 8px;
        border: none;
        font-family: 'Noto Sans Thai', 'Noto Sans';
        font-weight: bold;
        font-size: 16px;
        background: #00b400;
        color: #fff;
        cursor: pointer;
    }
    .submit-btn:hover {
        opacity: 0.85;
    }
`
export const TR_MicroInteractions_LikeButton = styled.div`

.like-btn {
  position: relative;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 22px;
  display: flex;
  align-items: center;
  gap: 8px;
}

/* Heart icon */
.heart {
  font-size: 28px;
  color: #aaa;
  transition: color 0.2s ease;
}

.heart.active {
  color: #ff2f6e;
}

/* Counter */
.count {
  position: relative;
  top: -4px;
  font-family: 'Noto Sans Thai', 'Noto Sans';
  font-weight: bold;
  font-size: 20px;
  color: #000;
  display: flex;
}

/* Particle burst */
.burst {
  position: absolute;
  width: 0;
  height: 0;
  top: 50%;
  left: 14px;
}

.burst i {
  position: absolute;
  width: 6px;
  height: 6px;
  background: #ff2f6e;
  border-radius: 50%;
  opacity: 0;
}

`
export const TR_MicroInteractions_Grid = styled.div`
  display: flex;
  gap: 20px;
  /* justify-content: center; */
  align-items: center;
`
export const TR_MicroInteractions_Box = styled.div`
  min-width: 350px;
  max-width: 350px;
  min-height: 200px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin: 0 auto; */
  border-radius: 8px;
  border: 1px solid rgb(242, 242, 242);
`
export const TR_MicroInteractions_WrapBox = styled.div`
  margin-bottom: 60px;
`
export const TR_MicroInteractions_Dropdown = styled.div`
  .dropdown-container {
  width: 260px;
  margin: 70px auto;
  font-family: sans-serif;
}

/* Header */
.dropdown-header {
  position: relative;
  width: 100%;
  padding: 8px 16px;
  background: #02b500;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-family: 'Noto Sans Thai', 'Noto Sans';
  font-size: 16px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.arrow {
  font-size: 20px;
  display: inline-block;
  transition: transform 0.2s ease;
}

/* Dropdown wrap (height animated by GSAP) */
.dropdown-wrap {
  overflow: hidden;
  height: 0;
    background-color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 12px;
  border-radius: 3px;
}

/* Dropdown List */
.dropdown-list {
  list-style: none;
  padding: 0;
  margin: 0;

}

.dropdown-list li {
  margin: 0 10px;
  padding: 12px 0;
  font-family: 'Noto Sans Thai', 'Noto Sans';
  color: #000;
  cursor: pointer;
}
`

export const TR_MicroInteractions_Card = styled.div`
  .card-box {
    width: 300px;
    border-radius: 5px;
    background: #fff;
    overflow: hidden;
    cursor: pointer;
    position: relative;
    box-shadow: 0 8px 20px rgba(0,0,0,0.08);
    transition: box-shadow 0.2s ease;
  }

/* Image */
.img-wrap {
  width: 100%;
  height: auto;
  overflow: hidden;
}

.img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1);
}
.box-caption {
  display: grid;
  grid-gap: 8px;
  padding: 12px 16px;
}
.box-caption p {
  /* opacity: 0; */
}

.box-caption h3 {
  padding: 0;
  margin: 0;
  font-size: 16px;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
}

.text-content p {
  color: #000;
  font-size: 12px;
  line-height: 1.4;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
}

`

export const TR_MicroInteractions_Theme = styled.div`

  /* Flash effect background */
.flash-bg {
  position: fixed;
  inset: 0;
  background: #fff;
  pointer-events: none;
  opacity: 0;
  mix-blend-mode: overlay;
  z-index: 10;
}

/* Toggle container */
.toggle-wrapper {
  display: flex;
  justify-content: center;
}

/* Toggle button */
.toggle-btn {
  width: 58px;
  height: 30px;
  background: #f4f4f4;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  position: relative;
  padding: 0;
  overflow: hidden;
}

/* Knob */
.knob {
  width: 26px;
  height: 26px;
  background: #fff;
  border-radius: 50%;
  position: absolute;
  top: 2px;
  left: 3px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
}

/* Icons inside toggle */
.icon {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 16px;
  pointer-events: none;
}

.sun {
  left: 8px;
  svg {
    height: 16px;
    width: auto;
    top: 2px;
    position: relative;
  }
}

.moon {
  right: 8px;
}
`
export const TR_MicroInteractions_CountdownTimer = styled.div`
  .countdown-wrapper {
    position: relative;
    width: 140px;
    height: 140px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }

/* Flash effect */
.flash {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  opacity: 0;
  z-index: 5;
}

/* Progress ring */
.progress-ring {
  position: absolute;
  top: 0;
  left: 0;
}

.ring {
  stroke: #00b400;
  stroke-dasharray: 314;
  stroke-dashoffset: 0;
  transform: rotate(-90deg);
  transform-origin: 70px 70px;
}

/* Number */
.count-number {
  position: relative;
  font-size: 40px;
  font-weight: normal;
  z-index: 10;
  color: #000;
  font-family: 'Noto Sans Thai', 'Noto Sans';
}

`


export const TR_MicroInteractions_Countdown = styled.div`
  .countdown-box {
    display: flex;
    gap: 16px;
    align-items: center;
    justify-content: center;
  }
  p {
    font-size: 14px;
    color: #000;
    text-align: center;
    font-family: 'Noto Sans Thai', 'Noto Sans';
  }
  .box {
    display: grid;
    gap: 8px;
    align-items: center;
  }
  .box-num {
    width: 70px;
    height: 70px;
    border-radius: 10px;
    background: #f4f4f4;
    display: flex;
    align-items: center;
    font-size: 30px;
    font-weight: bold;
    font-family: 'Noto Sans Thai', 'Noto Sans';
    justify-content: center;
  }
`