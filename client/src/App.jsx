/**  LIBRARIES */
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./styles/global.css";
/**  PAGES */
import Home from "./pages/Home";
import Facilities from "./pages/Facilities";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
/**  COMPONENTS */
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";

/** auth middleware */
// import { AuthorizeUser } from "./middleware/auth";

function App() {
	const Layout = () => {
		return (
			<div className="main">
				<Navbar />
				<ToastContainer />
				<Outlet />	
				<Footer />
			</div>
		);
	};
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Layout />,
			children: [
				{
					path: "/",
					element: <Home />,
				},
				{
					path: "facilities",
					element: <Facilities />,
				},
				{
					path: "team",
					element: <Team />,
				},
				{
					path: "contact",
					element: <Contact />,
				},
				{
					path: "login",
					element: <Login />,
				},
				{
					path: "register",
					element: <Register />,
				},
			],
		},
		{
			path: "dashboard",
			element: <Dashboard />,
			children: [
				{
					path: "logout",
					element: <Home />,
				},
			],
		},
	]);

	return (
		<RouterProvider router={router} />
	);
}

export default App;
