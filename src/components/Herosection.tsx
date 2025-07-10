// src/components/HeroSection.jsx

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src=".\vedios\bg_vedio.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for darkening if needed */}
      <div className="absolute top-0 left-0 w-full h-full  bg-opacity-30 z-0" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full px-8 text-yellow-400 text-left">
       <h1 className="text-6xl font-extrabold bg-gradient-to-r from-black via-yellow-400 to-white text-transparent bg-clip-text ">
            Welcome to <span className="block">Wellbee</span>
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
