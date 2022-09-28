import React from "react";
import logo from "../images/logo1.png";

 function Admission() {
    return (
    <div className="content">
       <h2>Walk-in Pricing:</h2>
    <div class="grid-container">
      <p>
        <img class="walk-in" src={logo} className="logo" alt="" />
        We always
        welcome our walk-in guests anytime we are open.<br />
        Our play area is wall to wall, riding, jumping, climbing, obstacle
        courses and learning.<br />
        Just perfect for toddlers and siblings. At Kid’s Paradise, safety is our
        top priority in order to keep kids safe.
        <br />
        <br />
        COME, RELAX, AND ENJOY WHILE YOUR KIDS PLAY.
        <br />
        <br />
        While your kids wander in paradise, our trained staff will observe all
        play areas to enforce the rules of Kid’s Paradise.<br /><br />
        We offer an adult area for parents to take breaks and relax.
      </p>
      <div class="grid-container">
      <div class="grid-item">Adults admission is FREE</div>
      <div class="grid-item">
        Kids under three years old and up:<br />
        Mon-Sun : $11.99<br />
        Holidays : $14.99
      </div>
      <div class="grid-item">
        Cooking Master class:<br />
        Tue & Sat: $29.99<br />
        Holidays : $34.99
      </div>
      <div class="grid-item">
        Soap Bubbles:<br />
        Mon-Fri : $19.99
      </div>
      <div class="grid-item">
        Zone with animators:<br />
        Tue-Fri : $39.99<br />
        Sat & Sun : $59.99
        </div>
      </div>
      </div>
      </div>
      
    )
}

export default Admission;