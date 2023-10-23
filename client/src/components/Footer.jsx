import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="">
			{/* footer body */}
			<div className="bg-gray-800 text-gray-400">
				<div className="grid grid-cols-1 md:grid-cols-2 md:px-5 lg:px-20">
					{/* logo */}
					<div className="md:flex lg:flex md:gap-28 md:col-span-12 lg:col-span-12 align-middle px-10 md:px-5 lg:px-5 py-2 justify-between">
						<Link to="/" className="logo flex text-5xl">
							<h1 className="text-yellow-500">fit</h1>
							<h1 className="">NEST</h1>
						</Link>
						<div></div>
					</div>
					<div className="flex flex-col md:flex-row lg:flex-row md:col-span-12 lg:col-span-10 px-10 md:px-5 lg:px-5 py-2 justify-between">
						{/* facilities */}
						<div className="flex flex-col text-left">
							<div className="">
								<h3 className="inline-block text-lg border-b-4 border-blue-500">
									Facilities
								</h3>
							</div>
							<ul className="flex text-sm py-2 md:py-4 lg:py-4 justify-between md:justify-between">
								<li className="">
									<Link
										to="/facilities"
										className="hover:text-yellow-500"
									>
										<span>Events</span>
									</Link>
								</li>
								<li className="md:px-2 lg:px-4">
									<Link
										to="/facilities"
										className="hover:text-yellow-500"
									>
										<span>Nutrition</span>
									</Link>
								</li>
								<li className="md:px-2 lg:px-4">
									<Link
										to="/facilities"
										className="hover:text-yellow-500"
									>
										<span>Personal Training</span>
									</Link>
								</li>
								<li className="">
									<Link
										to="/facilities"
										className="hover:text-yellow-500"
									>
										<span>Classes</span>
									</Link>
								</li>
							</ul>
						</div>

						{/* follow us */}
						<div className="flex flex-col text-left">
							<div className="flex">
								<h3 className="inline-block text-lg border-b-4 border-blue-500">
									Follow Us
								</h3>
							</div>
							<div className="flex py-2 text-xl justify-between">
								<a
									href="#"
									className="text-center pr-5 hover:text-yellow-500"
								>
									<i className="fa-brands fa-facebook"></i>
								</a>
								<a
									href="#"
									className="text-center pr-5 hover:text-yellow-500"
								>
									<i className="fa-brands fa-tiktok"></i>
								</a>
								<a
									href="#"
									className="text-center pr-5 hover:text-yellow-500"
								>
									<i className="fa-brands fa-twitter"></i>
								</a>
								<a
									href="#"
									className="text-center pr-5 hover:text-yellow-500"
								>
									<i className="fa-brands fa-pinterest"></i>
								</a>
								<a
									href="#"
									className="text-center pr-5 hover:text-yellow-500"
								>
									<i className="fa-brands fa-youtube"></i>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* </div> */}

			{/* copyright */}
			<div className=" py-4 text-gray-100 glass">
				<div className="container mx-auto px-4">
					<div className="-mx-4 flex flex-wrap justify-center">
						<div className="px-4 w-full text-center sm:w-auto sm:text-left">
							Copyright © 2023 George Boholteanu. All Rights
							Reserved.
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
