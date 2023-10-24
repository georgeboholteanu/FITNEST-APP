import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
	// const [navbarOpen, setNavbarOpen] = useState(false);

	return (
		<header className="w-screen shadow-lg h-20 hidden md:flex justify-between px-16">
			{/* logo */}
			<div className="logo flex flex-col px-4 xl:px-6 py-1 xl:py-2 justify-center">
				<Link to="/">
					<div className="flex text-4xl">
						<h1 className="text-yellow-500">fit</h1>
						<h1 className="">NEST</h1>
					</div>
					<p className="motto">Your training partner</p>
				</Link>
			</div>

			{/* navbar desktop */}
			<div className="header-links text-white font-semibold text-base lg:text-lg justify-center items-center">
				<ul className="flex items-center md:pt-1 pl-20">
					<li className="p-3 xl:p-6">
						<Link to="/" className="hover:text-yellow-500 ">
							<span className="hover:underline underline-offset-4 decoration-gray-300">
								Home
							</span>
						</Link>
					</li>
					<li className="p-3 xl:p-6">
						<Link
							to="/facilities"
							className="hover:text-yellow-500"
						>
							<span className="hover:underline underline-offset-4 decoration-gray-300">
								Facilities
							</span>
						</Link>
					</li>
					<li className="p-3 xl:p-6">
						<Link to="/team" className="hover:text-yellow-500">
							<span className="hover:underline underline-offset-4 decoration-gray-300">
								Team
							</span>
						</Link>
					</li>
					<li className="p-3 xl:p-6">
						<Link to="/contact" className="hover:text-yellow-500">
							<span className="hover:underline underline-offset-4 decoration-gray-300">
								Contact
							</span>
						</Link>
					</li>
				</ul>
			</div>

			{/* login and register */}
			<div className="flex items-center px-4 lg:px-6 xl:px-8">
				<Link
					to="/login"
					className="hover:text-yellow-500 pr-10 text-xl"
				>
					<svg
						viewBox="0 0 640 512"
						fill="currentColor"
						height="1.5em"
						width="1.5em"
					>
						<path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3 0 498.7 13.3 512 29.7 512h362.9c-5.4-9.4-8.6-20.3-8.6-32V352c0-2.1.1-4.2.3-6.3-31-26-71-41.7-114.6-41.7h-91.4zM528 240c17.7 0 32 14.3 32 32v48h-64v-48c0-17.7 14.3-32 32-32zm-80 32v48c-17.7 0-32 14.3-32 32v128c0 17.7 14.3 32 32 32h160c17.7 0 32-14.3 32-32V352c0-17.7-14.3-32-32-32v-48c0-44.2-35.8-80-80-80s-80 35.8-80 80z" />
					</svg>
				</Link>
				<Link to="/register">
					<button className="bg-black hover:bg-yellow-500 text-white font-bold px-4 md:px-6 py-2 md:py-3 rounded-md">
						Join Now
					</button>
				</Link>
			</div>
		</header>
	);
};

export default Navbar;
