import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Footer from "./components/Footer";
import Facilities from "./pages/Facilities";
import OurTeam from "./pages/OurTeam";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	return (
		<Router>
			<Navbar />
			<ToastContainer />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/facilities" element={<Facilities />} />
				<Route path="/ourteam" element={<OurTeam />} />
				<Route path="/contact" element={<Contact />} />
				<Route
					path="/login"
					element={<Login setIsLoggedIn={setIsLoggedIn} />}
				/>
				<Route path="/register" element={<Register />} />
				{/* Private Routes */}
				<Route
					path="/dashboard"
					element={
						<PrivateRoute isLoggedIn={isLoggedIn}>
							<Dashboard />
						</PrivateRoute>
					}
				/>
				{/* <Route
					path="/dashboard"
					element={<PrivateRoute isLoggedIn={isLoggedIn} />}
				>
					<Route index element={<Dashboard />} />
				</Route> */}

	
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
