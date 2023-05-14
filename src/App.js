import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Sidebar from "./components/Sidebar";
import Dashboard from "./screens/Dashboard";
import Students from "./screens/Students";
import Teacher from "./screens/Teacher";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <div className="row">
        <Sidebar />
        <div className="column">
       <Navbar/>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="about" element={<Students />} />
          <Route path="contact" element={<Teacher />} />
        </Routes>
        </div>
        
      </div>
    </div>
  );
}

export default App;
