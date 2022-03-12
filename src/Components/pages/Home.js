import React, { useState } from "react";

export function Home() {
  const [color, setColor] = useState("box");
  

  return (
    <section>
      <div className="Home-container">
        <div className={color}>
            <img src="/images/kicks-one.jpg" alt="" />

       <p className=""> <i class="fas fa-circle" id='circle1' onClick={() =>setColor ("fas1")}></i></p>
        <p className=""> <i class= "fas fa-circle" id='circle2' onClick={() =>setColor ("fas2")}></i></p>
            <p> <i class= "fas fa-circle" id='circle3' onClick={() =>setColor ("fas3")}></i></p>
          <p><i class= "fas fa-circle" id='circle4' onClick={() =>setColor ("fas4")}></i></p>
               
        </div>
        
      </div>
    </section>
  );
}
