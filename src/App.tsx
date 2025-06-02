// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Resume from "./Components/Resume";

import "./App.css";

function App() {
  // return (
  //   <div className="app-container">
  //     <Sidebar />
  //     <div className="main-content">
  //       <Header />
  //       <Skills />
  //     </div>
  //   </div>
  // );
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
        {/* <Header /> */}
        {/* <Skills /> */}
          <Routes>
            <Route path="/" element={<Home /> } />
            {/* <Route path="/portfolio" element={<Portfolio />} /> */}
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
