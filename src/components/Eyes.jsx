import React, { useEffect, useState } from "react";

function Eyes() {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="w-full h-screen overflow-hidden">
      <div  data-scroll data-scroll-speed="-.7" className='w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")] relative'>
        <div className="flex gap-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {/* EYE 1 */}
          <div className="w-[16vw] h-[16vw] bg-gray-100 rounded-full flex items-center justify-center">
            <div className="relative w-2/3 h-2/3 bg-gray-900 rounded-full flex items-center justify-center">
              <div
                className="line absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[6px]"
                style={{ transform: `rotate(${rotate}deg)` }}
              >
                <div className="w-6 h-6 bg-gray-100 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* EYE 2 */}
          <div className="w-[16vw] h-[16vw] bg-gray-100 rounded-full flex items-center justify-center">
            <div className="relative w-2/3 h-2/3 bg-gray-900 rounded-full flex items-center justify-center">
              <div
                className="line absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[6px]"
                style={{ transform: `rotate(${rotate}deg)` }}
              >
                <div className="w-6 h-6 bg-gray-100 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
