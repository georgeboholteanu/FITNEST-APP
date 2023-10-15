// import './index.css';
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import Login from "./components/Login";
import UserProfile from "./components/UserProfile";

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>      
      <Routes>
        <Route path="/userprofile" element={user ? <UserProfile user={user} /> : <Navigate to="/" />} />
        <Route path="/" element={<Login setUser={setUser} />} />
      </Routes>     
    </Router>
  );
}

export default App;
