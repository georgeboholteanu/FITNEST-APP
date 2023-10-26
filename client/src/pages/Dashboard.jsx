import { Link } from "react-router-dom";
import { BiHomeAlt2, BiBasketball } from "react-icons/bi";
import { HiUserGroup } from "react-icons/hi";
import { FaBuffer, FaAlgolia } from "react-icons/fa";

const Dashboard = () => {
	// const scrollToElement = (elementID) => {
	// 	const targetSection = document.getElementById(elementID);
	// 	if (targetSection) {
	// 		targetSection.scrollIntoView({ behavior: "smooth" });
	// 	}
	// };

	return (
		<>
			<div className="grid grid-cols-6 grid-flow-row justify-center min-h-screen">
				{/* Navigation */}
				<div className="col-span-1 flex-row bg-gray-900 justify-center">
					<div className="flex justify-center">
						{/* title */}
						<h2 className="hidden md:flex uppercase border-b-2 border-gray-400 text-gray-300 text-center p-5 text-xl font-bold">
							{" "}
							dashboard
						</h2>

						<FaBuffer className="flex md:hidden text-gray-400 my-3 text-4xl" />
					</div>
					<div className="my-5 justify-start mx-5 align-middle">
						{/* nav links */}
						<nav className="flex flex-col space-y-2 lg:space-x-0 lg:space-y-2">
							<Link
								to="/"
								className="justify-center text-white/50 md:p-4 my-3 inline-flex space-x-4 rounded-lg hover:bg-gray-800 hover:text-white smooth-hover"
							>
								<div className="text-2xl">
									<BiHomeAlt2 className="text-yellow-400" />
								</div>
								<span className="font-semibold hidden md:block">
									Home
								</span>
							</Link>

							<Link
								to="/"
								className="justify-center text-white/50 md:p-4 my-3 inline-flex space-x-4 rounded-lg hover:bg-gray-800 hover:text-white smooth-hover"
							>
								<div className="text-2xl">
									<HiUserGroup className="text-yellow-400" />
								</div>

								<span className="font-semibold hidden md:block">
									Classes
								</span>
							</Link>

							<Link
								to="/"
								className="justify-center text-white/50 md:p-4 my-3 inline-flex space-x-4 rounded-lg bg-gray-800 hover:text-white smooth-hover"
							>
								<div className="text-2xl">
									<BiBasketball className="text-yellow-400" />
								</div>
								<span className="font-semibold hidden md:block">
									Groups
								</span>
							</Link>

							<Link
								to="/"
								className="justify-center text-white/50 md:p-4 my-3 inline-flex space-x-4 rounded-lg hover:bg-gray-800 hover:text-white smooth-hover"
							>
								<div className="text-2xl">
									<FaAlgolia className="text-yellow-400" />
								</div>
								<span className="font-semibold hidden md:block">
									Coaches
								</span>
							</Link>
						</nav>
					</div>
				</div>
				{/* Content */}
				<div className="col-span-5 md:flex-col py-5 bg-slate-600/40 justify-between">
					<div className="flex-1 px-2 sm:px-0 mx-10">
						<div className="flex justify-between items-center">
							<h3 className="text-3xl font-bold text-gray-300">
								Groups
							</h3>
						</div>
						<div className="mb-10 sm:mb-0 mt-10 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
							<div className="relative group bg-gray-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover">
								<img
									className="w-20 h-20 object-cover object-center rounded-full"
									src="../assets/groups/jenny-hill-mQVWb7kUoOE-unsplash.jpg"
									alt="man running on road"
								/>
								<h4 className="text-white text-2xl font-bold capitalize text-center">
									Running
								</h4>
								<p className="text-white/50">55 members</p>
							</div>
							<div className="relative group bg-gray-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover">
								<img
									className="w-20 h-20 object-cover object-center rounded-full"
									src="../assets/groups/luis-reyes-mTorQ9gFfOg-unsplash.jpg"
									alt="gym weights"
								/>
								<h4 className="text-white text-2xl font-bold capitalize text-center">
									Weightlifting
								</h4>
								<p className="text-white/50">132 members</p>
							</div>
							<div className="relative group bg-gray-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover">
								<img
									className="w-20 h-20 object-cover object-center rounded-full"
									src="../assets/groups/nathan-dumlao-Ps-_RF_JhsM-unsplash.jpg"
									alt="two man in the gym practicing martial arts"
								/>
								<h4 className="text-white text-2xl font-bold capitalize text-center">
									Martial Arts
								</h4>
								<p className="text-white/50">207 members</p>
							</div>
							<div className="relative group bg-gray-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover">
								<img
									className="w-20 h-20 object-cover object-center rounded-full"
									src="../assets/groups/victor-freitas-KkYWWpurqbE-unsplash.jpg"
									alt="man exercising at rowing machine"
								/>
								<h4 className="text-white text-2xl font-bold capitalize text-center">
									Rowing Races
								</h4>
								<p className="text-white/50">105 members</p>
							</div>
							<div className="relative group bg-gray-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover">
								<img
									className="w-20 h-20 object-cover object-center rounded-full"
									src="../assets/groups/artem-verbo-rAyIvNqlwCY-unsplash.jpg"
									alt="indoor swimming pool"
								/>
								<h4 className="text-white text-2xl font-bold capitalize text-center">
									Swimming
								</h4>
								<p className="text-white/50">67 members</p>
							</div>
							<div className="relative group bg-gray-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover">
								<img
									className="w-20 h-20 object-cover object-center rounded-full"
									src="../assets/groups/edoardo-cuoghi-5uzsDVRov2w-unsplash.jpg"
									alt="black man practicing calisthenics in the gym"
								/>
								<h4 className="text-white text-2xl font-bold capitalize text-center">
									Calisthenics
								</h4>
								<p className="text-white/50">83 members</p>
							</div>
							<div className="relative group bg-gray-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover">
								<img
									className="w-20 h-20 object-cover object-center rounded-full"
									src="../assets/groups/players-squash-court-v3-519x439.jpg"
									alt="2 person on a squash court"
								/>
								<h4 className="text-white text-2xl font-bold capitalize text-center">
									Squash
								</h4>
								<p className="text-white/50">108 members</p>
							</div>
							<div className="relative group bg-gray-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover">
								<img
									className="w-20 h-20 object-cover object-center rounded-full"
									src="../assets/groups/aditya-wardhana-kfbAgFAtWTI-unsplash.jpg"
									alt="man on a bike"
								/>
								<h4 className="text-white text-2xl font-bold capitalize text-center">
									Indoor Cycling
								</h4>
								<p className="text-white/50">84 members</p>
							</div>
							<div className="relative group bg-gray-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover">
								<img
									className="w-20 h-20 object-cover object-center rounded-full"
									src="../assets/groups/jared-rice-NTyBbu66_SI-unsplash.jpg"
									alt="woman practicing yoga in nature"
								/>
								<h4 className="text-white text-2xl font-bold capitalize text-center">
								Yoga Retreats
								</h4>
								<p className="text-white/50">98 members</p>
							</div>
							<div className="relative group bg-gray-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover">
								<img
									className="w-20 h-20 object-cover object-center rounded-full"
									src="../assets/groups/anna-pelzer-IGfIGP5ONV0-unsplash.jpg"
									alt="a bowl of vegetables"
								/>
								<h4 className="text-white text-2xl font-bold capitalize text-center">
								Nutrition 
								</h4>
								<p className="text-white/50">72 members</p>
							</div>
							<div className="relative group bg-gray-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover">
								<img
									className="w-20 h-20 object-cover object-center rounded-full"
									src="../assets/groups/andreea-boncota-icxORkp1Yv0-unsplash.jpg"
									alt="woman exercising in the gym"
								/>
								<h4 className="text-white text-2xl font-bold capitalize text-center">
								Fitness Boot Camps
								</h4>
								<p className="text-white/50">36 members</p>
							</div>
							<div className="relative group bg-gray-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover">
								<img
									className="w-20 h-20 object-cover object-center rounded-full"
									src="../assets/groups/danielle-cerullo-3ckWUnaCxzc-unsplash.jpg"
									alt="girls in the gym dancing in the mirror"
								/>
								<h4 className="text-white text-2xl font-bold capitalize text-center">
								Zumba Classes 
								</h4>
								<p className="text-white/50">61 members</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Dashboard;
