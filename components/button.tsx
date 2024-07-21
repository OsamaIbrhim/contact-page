import React from "react";

const FancyButton: React.FC = () => {
  return (
    <div className="relative inline-flex items-center justify-center group">
      {/* Premier Button */}
      <a
        href="#"
        className="relative inline-flex items-center justify-center px-6 py-3 font-bold text-white bg-[#2F2C85] rounded-full overflow-hidden"
        style={{ zIndex: 10 }}
      >
        <span className="relative">Premier Button</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          className="w-5 h-5 ml-2 text-white"
          style={{ fill: "currentColor" }}
        >
          <path d="M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z"></path>
        </svg>
      </a>

      {/* Second Button */}
      <a
        href="#"
        className="absolute inset-0 flex items-center justify-center bg-black text-white rounded-full px-6 py-3 overflow-hidden transition-transform duration-300 scale-0 group-hover:scale-100"
        style={{
          transformOrigin: "bottom center", // Ensure scaling from bottom center
          zIndex: 5
        }}
      >
        <span>Second Button</span>
      </a>
    </div>
  );
};

export default FancyButton;
