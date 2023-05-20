import { useState } from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";

import "./App.css";
import Sidebar from "./components/Sidebar";
import Dashboard from "./screens/Dashboard";
import Students from "./screens/Students";
import Donations from "./screens/Donations";
import Leaves from "./screens/Leaves";
import Teacher from "./screens/Teacher";
import Navbar from "./components/Navbar";
import Staffs from "./screens/Staffs";
import Subjects from "./screens/Subjects";
import TimeTable from "./screens/TimeTable";
import Events from "./screens/Events";
import Settings from "./screens/Settings";

function App() {
  return (
    <div className="App">
      <div className="row">
        <Sidebar />
        <div className="column">
       <Navbar/>
        <Routes>
        <Route Route path="/" element={<Navigate to="/dashboard" replace={true}/>}/>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path="/students" element={<Students />} />
          <Route path="/teachers" element={<Teacher />} />
          <Route path="/donations" element={< Donations/>} />
          <Route path="/leaves" element={<Leaves />} />
          <Route path="/staffs" element={<Staffs />} />
          <Route path="/subjects" element={<Subjects />} />
          <Route path="/time-table" element={<TimeTable />} />
          <Route path="/events" element={<Events />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
        </div>
        
      </div>
    </div>
  );
}

export default App;
