// import './index.css';
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { useState } from "react";
// import { Navigate } from "react-router-dom";

/* COMPONENTS */
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Classes from "./pages/Classes";

function App() {
  // const [user, setUser] = useState(null);

  return (
    <div className="App">
      <Router> 
        <Navbar />     
        <Routes>
          <Route path="/" element={<Home />} /> */
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/classes" element={<Classes />} />
          {/* <Route path="/userprofile" element={user ? <UserProfile user={user} /> : <Navigate to="/" />} /> */}
          {/* <Route path="/" element={<Login setUser={setUser} />} /> */}
        </Routes>     
      </Router>
    </div>
  );
}

export default App;
