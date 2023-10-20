import { NavLink } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="pt-10">
			{/* footer body */}
			<div className="bg-gray-800 text-gray-400 rounded-t-2xl px-10">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-5 lg:gap-10 md:px-5 lg:px-10">
					{/* logo */}
					<div className="flex-1 py-4 md:px-2 lg:px-5">
						<NavLink to="/" className="logo flex text-4xl">
							<h1 className="text-yellow-500">fit</h1>
							<h1 className="">NEST</h1>
						</NavLink>
						<p
							className="py-2 text-gray-300 text-sm"
							id="footerParagraph"
						>
							We offer a wide range of fitness classes to keep
							your workouts exciting and effective. Whether
							you&apos;re into yoga, HIIT, or group classes, we
							have it!
						</p>
					</div>

					{/* services */}
					<div className="flex-1 py-4 md:px-2 lg:px-20">
						<div className="text-left">
							<h2 className="inline-block text-2xl border-b-4 border-blue-600">
								Services
							</h2>
						</div>
						<ul className="flex py-2 md:py-4 lg:py-4 justify-between">
							<li className="">
								<NavLink
									to="/services"
									className="hover:text-yellow-500"
								>
									<span>Nutrition</span>
								</NavLink>
							</li>
							<li className="">
								<NavLink
									to="/services"
									className="hover:text-yellow-500"
								>
									<span>Personal Training</span>
								</NavLink>
							</li>
							<li className="">
								<NavLink
									to="/services"
									className="hover:text-yellow-500"
								>
									<span>Classes</span>
								</NavLink>
							</li>
						</ul>
					</div>

					{/* social media */}
					<div className="flex-1 py-4 md:px-2 lg:px-20">
						<div className="text-left">
							<h2 className="inline-block text-2xl border-b-4 border-blue-600">
								Social Media
							</h2>
						</div>
						<div className="flex py-4 text-2xl">
							<a href="#" className="pr-8 hover:text-yellow-500">
								<i className="fa-brands fa-facebook"></i>
							</a>
							<a href="#" className="pr-8 hover:text-yellow-500">
								<i className="fa-brands fa-tiktok"></i>
							</a>
							<a href="#" className="pr-8 hover:text-yellow-500">
								<i className="fa-brands fa-twitter"></i>
							</a>
							<a href="#" className="pr-8 hover:text-yellow-500">
								<i className="fa-brands fa-pinterest"></i>
							</a>
							<a href="#" className="pr-8 hover:text-yellow-500">
								<i className="fa-brands fa-youtube"></i>
							</a>
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
