import { Link } from "react-router-dom";
import {
	FaInstagram,
	FaTwitter,
	FaFacebook,
	FaYoutube,
	FaTiktok,
} from "react-icons/fa";

const Footer = () => {
	return (
		<footer className="text-center md:text-left">
			{/* footer body */}
			<div className="flex flex-col md:flex-row bg-gray-800 text-white px-10 md:px-20 md:justify-between md:align-middle">
				{/* logo */}
				<div className="py-2">
					<Link to="/">
						<div className="logo inline-flex text-4xl">
							<h1 className="text-yellow-500">fit</h1>
							<h1>NEST</h1>
						</div>
						<p className="motto text-white">
							Your training partner
						</p>
					</Link>
				</div>
				{/* facilities */}
				<div className="block py-3 md:py-2">
					<h3 className="footerTitle uppercase font-bold text-lg text-blue-500">
						Facilities
					</h3>
					<div className="footerLinks">
						<ul className="inline-flex space-x-4 text-sm py-2">
							<li className="hover:text-yellow-500">
								<Link to="/facilities">Events</Link>
							</li>
							<li className="hover:text-yellow-500">
								<Link to="/facilities">Nutrition</Link>
							</li>
							<li className="hover:text-yellow-500">
								<Link to="/facilities">Personal Training</Link>
							</li>
							<li className="hover:text-yellow-500">
								<Link to="/facilities">Classes</Link>
							</li>
						</ul>
					</div>
				</div>
				{/* follow us */}
				<div className="block py-2">
					<div className="container justify-center">
						<h3 className="footerTitle uppercase font-bold text-lg text-blue-500">
							Follow
						</h3>
						<div className="footerLinks r">
							<ul className="inline-flex space-x-4 text-md py-2">
								<li className="hover:text-yellow-500">
									<Link to="/">
										<FaInstagram />
									</Link>
								</li>
								<li className="hover:text-yellow-500">
									<Link to="/">
										<FaTwitter />
									</Link>
								</li>
								<li className="hover:text-yellow-500">
									<Link to="/">
										<FaFacebook />
									</Link>
								</li>
								<li className="hover:text-yellow-500">
									<Link to="/">
										<FaYoutube />
									</Link>
								</li>
								<li className="hover:text-yellow-500">
									<Link to="/">
										<FaTiktok />
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			{/* </div> */}

			{/* copyright */}
			<div className=" py-4 text-gray-100 glass font-semibold text-xs">
				<div className="container mx-auto px-4">
					<div className="-mx-4 flex flex-wrap justify-center">
						<div className="px-4 w-full text-center sm:w-auto sm:text-left ">
							Copyright © 2023{" "}
							<Link to="mailto:george.boholteanu@gmail.com" className="text-blue-400 hover:text-yellow-400">
								George Boholteanu {"  "} 
							</Link>
							All Rights Reserved
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
