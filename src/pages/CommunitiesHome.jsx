import React from 'react';
import 'rsuite/dist/rsuite.min.css';
import NavBar from '../components/NavBar';
import Communities from '../components/Communities';


const CommunitiesHome = () => {
  return (
    <div style={{backgroundColor:"#0f0f0f", minHeight: "100vh", paddingTop: "0.5rem"}}>
        <NavBar />
        <Communities/>
    </div>
  )
}

export default CommunitiesHome