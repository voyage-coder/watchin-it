import React from 'react';
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import 'rsuite/dist/rsuite.min.css';
import NavBar from '../components/NavBar';


const Home = () => {
  return (
    <div style={{backgroundColor:"#0f0f0f", minHeight: "100vh", paddingTop: "0.5rem"}}>
        <NavBar />
    </div>
  )
}

export default Home