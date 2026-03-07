import React from "react";
import LightRays from "../components/LightRays";
import bg9 from "../assets/bg9.png";
import "../index.css";

const LandingPage = () => {
  return (
    <div
      className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-6"
      style={{
        backgroundImage: `url(${bg9})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >

      {/* Overlay + Light Rays */}

      <div className="absolute inset-0 bg-black/45 z-10">
        <LightRays
          raysOrigin="top-center"
          raysColor="white"
          raysSpeed={0.5}
          lightSpread={0.5}
          rayLength={2}
          followMouse={true}
          mouseInfluence={0.01}
          noiseAmount={0}
          distortion={0}
          className="custom-rays"
          pulsating={false}
          fadeDistance={1.5}
          saturation={1}
        />
      </div>

      {/* CONTENT */}

      <div
        className="
        relative z-20
        flex flex-col
        items-center
        text-center
        text-white
        max-w-3xl
        "
      >

        {/* TITLE */}

        <h1
          className="
          hero-title
          font-bold
          tracking-wide
          text-2xl
          sm:text-3xl
          md:text-5xl
          lg:text-6xl
          "
        >
          WATCHIN IT
        </h1>

        {/* TAGLINE */}

        <p
          className="
          hero-desc1
          mt-3
          text-sm
          sm:text-lg
          md:text-xl
          text-gray-200
          "
        >
          Discover movies. Explore cinema.
        </p>

        {/* DESCRIPTION */}

        <p
          className="
          hero-desc2
          mt-3
          text-xs
          sm:text-base
          md:text-lg
          text-gray-300
          max-w-md
          sm:max-w-xl
          px-2
          "
        >
          Discover trending films, explore new releases, and keep track of what
          to watch next — all in one beautifully simple cinematic platform.
        </p>

        {/* BUTTONS */}

        <div
          className="
          flex flex-wrap
          justify-center
          gap-3 sm:gap-4
          mt-6 sm:mt-8
          "
        >
          <button className="btn-1">Sign Up</button>
          <button className="btn-2">Sign In</button>
        </div>

      </div>

    </div>
  );
};

export default LandingPage;