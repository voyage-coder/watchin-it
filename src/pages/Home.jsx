import React from 'react';
import 'rsuite/dist/rsuite.min.css';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';


const Home = () => {
  return (
    <div style={{backgroundColor:"#0f0f0f", minHeight: "100vh", paddingTop: "0.5rem"}}>
        <NavBar />
        <Hero/>
    </div>
  )
}

export default Home