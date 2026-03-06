import React from "react";
import LightRays from "../components/LightRays";
import bg9 from "../assets/bg9.png";
import "../index.css";

const LandingPage = () => {
  return (
    <div 
      style ={{ 
        position:"relative", 
        width:"100vw", 
        height: "100vh", 
        backgroundImage: `url(${bg9})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.45)", zIndex: 1 }}>
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

      <div 
        style = {{
          position:"relative", 
          width:"100%",
          zIndex: 10, 
          height: "100%",
          display:"flex",
          flexDirection : "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "white",}}
      >
        <h1 className='hero-title'>WATCHIN IT</h1>
        <p className='hero-desc1'>Discover movies. Explore cinema.</p>
        <p className='hero-desc2' style={{ width: "500px" }}>Discover trending films, explore new releases, and keep track of what to watch next - all in one beautifully simple cinematic platform.</p>
        <div style={{display: "flex", gap :"15px", marginTop: "1.5rem"}}>
          <button className='btn-1'>Sign Up</button>
          <button className='btn-2'>Sign In</button>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
