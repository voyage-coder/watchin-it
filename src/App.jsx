import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import Watch from "./components/Watch";
import CommunitiesHome from "./pages/CommunitiesHome";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/watch" element={<Watch/>} />
      <Route path="communities" element={<CommunitiesHome/>} />
    </Routes>
  );
};

export default App;