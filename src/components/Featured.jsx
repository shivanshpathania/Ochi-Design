import React from "react";

function Featured() {
  return (
    <div className="w-full py-20 bg-zinc-900">
      <div className="w-full px-20 pb-18 border-b-[1px] border-zinc-700">
        <h1 className="text-7xl  tracking-tighter">Featured Projects</h1>
      </div>
      <div className="px-20 mb-10">
        <div className="flex gap-[23.5vw]">
        <h1 className="mt-[5vh] text-4xl">Cardboard Spaceship</h1>
        <h1 className="mt-[5vh] text-4xl">Salience Labs</h1>
        </div>
        <div className="cards w-full flex gap-13 mt-20">
          <div className="card w-1/2 h-[75vh] ">
          <div className="w-full h-full rounded-3xl overflow-hidden transition-transform duration-300 ease-in-out hover:scale-[1.1]">
              <img className="w-full h-full " src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png" alt="" />
          </div>
          </div>
          <div className="card w-1/2 h-[75vh] ">
          <div className="w-full h-full rounded-3xl overflow-hidden transition-transform duration-300 ease-in-out hover:scale-[1.1]">
            <img  className="w-full h-full " src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png" alt="" />
          </div>
          </div>
        </div>
      </div>
      <div className="px-20 mb-10">
      <div className="flex gap-[29.5vw]">
        <h1 className="mt-[5vh] text-4xl">AH2 & Matt Horn</h1>
        <h1 className="mt-[5vh] text-4xl">Fyde</h1>
        </div>
        <div className="cards w-full flex gap-13 mt-20">
          <div className="card w-1/2 h-[75vh] ">
          <div className="w-full h-full rounded-3xl overflow-hidden transition-transform duration-300 ease-in-out hover:scale-[1.1]">
              <img className="w-full h-full " src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-1326x1101.png" alt="" />
          </div>
          </div>
          <div className="card w-1/2 h-[75vh] ">
          <div className="w-full h-full rounded-3xl overflow-hidden transition-transform duration-300 ease-in-out hover:scale-[1.1]">
            <img  className="w-full h-full " src="https://ochi.design/wp-content/uploads/2025/02/Fyde_Front-1-1326x1101.png" alt="" />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
