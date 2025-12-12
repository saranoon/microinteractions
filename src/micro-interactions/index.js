
"use client";

import { 
  MicroInteractions_Header,
  MicroInteractions_Aside,
  MicroInteractions_Main,
  MicroInteractions_Body
} from "../../src/micro-interactions/styles/style-micro-interactions"

import LoadingSpinnerCompon from "../../src/micro-interactions/components/LoadingSpinner";
import CardCompon from "../../src/micro-interactions/components/Card";
import AnimatedButtonCompon from "../../src/micro-interactions/components/AnimatedButton";
import InputValidationCompon from "../../src/micro-interactions/components/InputValidation";
import DropdownCompon from "../../src/micro-interactions/components/Dropdown";
import LikeButtonCompon from "../../src/micro-interactions/components/LikeButton";
import ThemeToggleCompon from "../../src/micro-interactions/components/ThemeToggle";
import CountdownTimerCompon from "../../src/micro-interactions/components/CountdownTimer";
import CountdownTimerAnyDateCompon from "../../src/micro-interactions/components/CountdownTimerAnDate";


function App() {
  return (
      <>
      <MicroInteractions_Header><h1>Micro Interactions v.1</h1></MicroInteractions_Header>
      <MicroInteractions_Body>
        <MicroInteractions_Aside>
           <ul>
            <li><a href="#01">Animated Button</a></li>
            <li><a href="#02">Card</a></li>
            <li><a href="#03">Countdown Timer</a></li>
            <li><a href="#04">Countdown Timer AnyDate</a></li>
            <li><a href="#05">Dropdown</a></li>
            <li><a href="#06">Input Validation</a></li>
            <li><a href="#07">Like / Favorite</a></li>
            <li><a href="#08">Loading Spinner</a></li>
            <li><a href="#09">Toggle switches</a></li>
           </ul>
        </MicroInteractions_Aside>
        <MicroInteractions_Main>
          <AnimatedButtonCompon/>
          <CardCompon/>
          <CountdownTimerAnyDateCompon targetDate="2026-01-01 00:00:00" />
          <CountdownTimerCompon/>
          <DropdownCompon/>
          <InputValidationCompon/>
          <LikeButtonCompon/>
          <LoadingSpinnerCompon/>
          {/* <ToggleSwitchCompon/> */}
          <ThemeToggleCompon/>
        </MicroInteractions_Main>
      </MicroInteractions_Body>
      </>
  );
}

export default App;
