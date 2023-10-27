import { Link } from "react-router-dom";
import { useState } from "react";
import { HiMenu, HiOutlineMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isPlusIconVisible, setIsPlusIconVisible] = useState(true);

	const toggleMobileMenu = () => {
		setIsMenuOpen(!isMenuOpen);
		setIsPlusIconVisible(!isPlusIconVisible);
	};
	
	const scrollToElement = (elementID) => {
		const targetSection = document.getElementById(elementID);
		if (targetSection) {
			targetSection.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<>
			<nav className="px-5 border-b-2 border-gray-300 md:px-20 py-4 flex md:items-center justify-between mx-auto flex-shrink-0">
				{/* logo */}
				<div className="inline-block">
					<Link to="/" className="logo inline-flex text-4xl">
						<h1 className="text-yellow-500">fit</h1>
						<h1 className="text-black">NEST</h1>
					</Link>
					<p className="motto text-white">Your training partner</p>

					{isMenuOpen && (
						<>
							<div className="auth flex md:hidden items-center space-x-3 pt-20">
								<Link
									to="/login"
									className="text-black hover:text-yellow-500 text-md"
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
									<button className="bg-black hover:bg-yellow-500 text-white font-semibold px-2 py-1 rounded-md">
										Join Now
									</button>
								</Link>
							</div>
						</>
					)}
				</div>
				{/* nav links desktop*/}
				<ul className="navLinks hidden md:flex justify-center font-semibold text-white">
					<li className="px-5 xl:px-8 hover:text-yellow-500">
						<Link
							to="/"
							className="hover:underline underline-offset-4 decoration-gray-300"
						>
							Home
						</Link>
					</li>
					<li className="px-5 xl:px-8 hover:text-yellow-500">
						<Link
							to="/facilities"
							className="hover:underline underline-offset-4 decoration-gray-300"
						>
							Facilities
						</Link>
					</li>
					<li className="px-5 xl:px-8 hover:text-yellow-500">
						<Link
							to="/team"
							className="hover:underline underline-offset-4 decoration-gray-300"
						>
							Team
						</Link>
					</li>
					<li className="px-5 xl:px-8 hover:text-yellow-500">
						<Link
							to="/contact"
							className="hover:underline underline-offset-4 decoration-gray-300"
						>
							Contact
						</Link>
					</li>
				</ul>
				{/* nav links mobile*/}
				<ul className="navLinks flex flex-col md:hidden items-end font-semibold text-white pt-2">
					<li className="py-1 xl:px-8">
						<button
							className="burger text-3xl"
							onClick={toggleMobileMenu}
						>
							{isMenuOpen ? (
								<HiOutlineMenuAlt3 className="text-yellow-500" />
							) : (
								<HiMenu />
							)}
						</button>
					</li>
					{isMenuOpen && (
						<>
							<li className="py-1 xl:px-8 hover:text-yellow-500">
								<Link
									to="/"
									className="hover:underline underline-offset-4 decoration-gray-300"
								>
									Home
								</Link>
							</li>
							<li className="py-1 xl:px-8 hover:text-yellow-500">
								<Link
									to="/facilities"
									className="hover:underline underline-offset-4 decoration-gray-300"
								>
									Facilities
								</Link>
							</li>
							<li className="py-1 xl:px-8 hover:text-yellow-500">
								<Link
									to="/team"
									className="hover:underline underline-offset-4 decoration-gray-300"
								>
									Team
								</Link>
							</li>
							<li className="xl:px-8 hover:text-yellow-500">
								<Link
									to="/contact"
									className="hover:underline underline-offset-4 decoration-gray-300"
								>
									Contact
								</Link>
							</li>
						</>
					)}
				</ul>
				{/* auth and login */}
				<div className="auth hidden md:flex justify-center items-center">
					<Link
						to="/login"
						className="text-black hover:text-yellow-500 px-5 text-lg"
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
						<button className="bg-black hover:bg-yellow-500 text-white font-bold px-4 py-2 rounded-md">
							Join Now
						</button>
					</Link>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
