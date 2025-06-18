import React, { useState } from "react";


function colorPallete(){

    const [color,setColor]=useState("black");

  let text;

  
  

    return (
      <div className={` bg-[${color}]  width-full h-screen`}>
        <h1 className="bg-gradient-to-r  from-[#ffff] to-[#090909]  bg-clip-text text-transparent flex justify-center text-3xl font-extrabold ">Color Pallete</h1>
        <div className="bg-gradient-to-r from-[#363131] w-full h-[10%] flex gap-5 absolute bottom-0 justify-center items-center ">
       <button onClick={() =>setColor("#e24545")} className="bg-[#e24545] text-sm w-[10%] h-[80%] border-2 overflow-hidden rounded-lg">Red</button>
        <button onClick={() => setColor("#2f67c1")} className="bg-[#2f67c1] text-sm w-[10%] h-[80%] border-2 overflow-hidden rounded-lg">Blue</button>
        <button onClick={() => setColor("#8c8c8c")} className="bg-[#8c8c8c] text-sm w-[10%] h-[80%] border-2 overflow-hidden rounded-lg">Gray</button>
        <button onClick={() => setColor("#ffff")} className="bg-[#ffff] text-sm w-[10%] h-[80%] border-2 overflow-hidden rounded-lg">White</button>
        <button onClick={() => setColor("#292626")} className="bg-[#292626] text-sm w-[10%] h-[80%] border-2 overflow-hidden rounded-lg">Black</button>
        <button onClick={() => setColor("#e3ff0f")} className="bg-[#e3ff0f] text-sm w-[10%] h-[80%] border-2 overflow-hidden rounded-lg">Yellow</button>
        </div>
      </div>
    )


}

export default colorPallete; 