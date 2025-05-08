import React from "react";

const Hero = () => {
  return (
    <div
      className="relative min-h-[80vh] !bg-cover  "
      style={{
        backgroundImage: `url('https://t4.ftcdn.net/jpg/03/21/68/65/360_F_321686568_cSXVysoKOFTLljosiZkFbjhR2qb4uLFM.jpg')`,
        backgroundPositionX: "0",
      }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Centered text */}
      <div className="relative flex items-center justify-center h-full pt-64 flex-col gap-8">
        <h1 className="text-white text-8xl font-bold text-center font-[BrNadiFont]">
          Nadi Makeup
        </h1>
        <div className="text-2xl font-extralight uppercase">
          Professional Makeup
        </div>
      </div>
    </div>
  );
};

export default Hero;
