import './index.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { useState } from "react";
// import { Navigate } from "react-router-dom";

/* COMPONENTS */
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Footer from "./components/Footer";
import Facilities from "./pages/Facilities";
import OurTeam from "./pages/OurTeam";
import Contact from "./pages/Contact";

function App() {
	// const [user, setUser] = useState(null);

	return (
		<div className="App">
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/facilities" element={<Facilities />} />
					<Route path="/ourteam" element={<OurTeam />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />

					{/* <Route path="/userprofile" element={user ? <UserProfile user={user} /> : <Navigate to="/" />} /> */}
					{/* <Route path="/" element={<Login setUser={setUser} />} /> */}
				</Routes>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
