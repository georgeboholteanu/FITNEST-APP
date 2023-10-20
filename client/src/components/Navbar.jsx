import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<header className="w-screen bg-white shadow-lg h-20 hidden xl:flex lg:flex md:flex justify-between px-16">
			{/* logo */}

			<NavLink
				to="/"
				className="logo flex flex-col px-4 xl:px-6 py-1 xl:py-2 justify-center"
			>
				<div className="flex text-4xl">
					<h1 className="text-yellow-500">fit</h1>
					<h1 className="">NEST</h1>
				</div>
				{/* <div className=""> */}
				<p className="motto">Your training partner</p>
				{/* </div> */}
				{/* <img className="" src="tb replaced" alt="" /> */}
			</NavLink>

			{/* navbar desktop */}
			<nav className="header-links contents font-semibold text-base lg:text-lg">
				<ul className="flex items-center justify-center pl-20">
					<li className="p-3 xl:p-6">
						<NavLink to="/" className="hover:text-yellow-500">
							<span>Home</span>
						</NavLink>
					</li>
					<li className="p-3 xl:p-6">
						<NavLink
							to="/facilities"
							className="hover:text-yellow-500"
						>
							<span>Facilities</span>
						</NavLink>
					</li>
					<li className="p-3 xl:p-6">
						<NavLink
							to="/ourteam"
							className="hover:text-yellow-500"
						>
							<span>Our Team</span>
						</NavLink>
					</li>
					<li className="p-3 xl:p-6">
						<NavLink
							to="/contact"
							className="hover:text-yellow-500"
						>
							<span>Contact</span>
						</NavLink>
					</li>
				</ul>
			</nav>

			{/* navbar mobile */}
			{/* <nav className="hidden xl:contents">
				<ul className="flex items-center mr-4 lg:mr-6 xl:mr-8">
					<li className="p-1">
						<a
							href=""
							className="inline-block rounded-full border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5"
						>
							<svg
								className="h-4"
								aria-hidden="true"
								focusable="false"
								data-prefix="fab"
								data-icon="twitter"
								role="img"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 512 512"
								className="svg-inline--fa fa-twitter fa-w-16 fa-9x"
							>
								<path
									fill="currentColor"
									d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
								></path>
							</svg>
						</a>
					</li>
					<li className="p-1">
						<a
							href=""
							className="inline-block rounded-full border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5"
						>
							<svg
								className="h-4"
								aria-hidden="true"
								focusable="false"
								data-prefix="fab"
								data-icon="facebook-f"
								role="img"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 320 512"
								className="svg-inline--fa fa-facebook-f fa-w-10 fa-7x"
							>
								<path
									fill="currentColor"
									d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
								></path>
							</svg>
						</a>
					</li>
					<li className="p-1">
						<a
							href=""
							className="inline-block rounded-full border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5"
						>
							<svg
								className="h-4"
								aria-hidden="true"
								focusable="false"
								data-prefix="fab"
								data-icon="linkedin-in"
								role="img"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 448 512"
								className="svg-inline--fa fa-linkedin-in fa-w-14 fa-9x"
							>
								<path
									fill="currentColor"
									d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
								></path>
							</svg>
						</a>
					</li>
					<li className="p-1">
						<a
							href=""
							className="inline-block rounded-full border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5"
						>
							<svg
								className="h-4"
								aria-hidden="true"
								focusable="false"
								data-prefix="fab"
								data-icon="instagram"
								role="img"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 448 512"
								className="svg-inline--fa fa-instagram fa-w-14 fa-9x"
							>
								<path
									fill="currentColor"
									d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
								></path>
							</svg>
						</a>
					</li>
				</ul>
			</nav> */}

			<div className="flex items-center px-4 lg:px-6 xl:px-8">
				<NavLink
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
				</NavLink>
				<NavLink to="/register">
					<button className="bg-black hover:bg-yellow-500 text-white font-bold px-4 xl:px-6 py-2 xl:py-3 rounded-md">
						Join Now
					</button>
				</NavLink>
			</div>
		</header>
	);
};

export default Navbar;
// 392f52
// e5ca0b
// 178278
// 6da43c
