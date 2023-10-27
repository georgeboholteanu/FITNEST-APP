import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Dashboard = () => {
	const navigate = useNavigate();

	const handleSignout = () => {

		// Redirect to the login page after logout.
		navigate("/login");

		// Show a toast message to confirm the logout.
		toast.success("You have been successfully logged out.");
	};

	return (
		<>
			<div className="grid grid-cols-6 grid-flow-row justify-center sm:min-h-screen">
				{/* Navigation */}
				<div className="py-20 col-span-1 flex-row bg-gray-900 justify-center items-center">
					{/* nav links */}
					<nav className="flex flex-col space-y-10 sm:space-y-10 md:space-y-6 lg:space-y-4 lg:space-x-0  mt-10 sm:mt-5  text-center items-center">
						<div className="justify-center -mb-2 text-white/50 md:p-4 my-3 inline-flex space-x-4 ">
							{/* title */}
							<span className=" material-symbols-outlined text-gray-300 pt-1 md:hidden block ">
								dashboard
							</span>
							<h2 className="hidden md:flex uppercase mx-3 text-lg  border-b-2 border-gray-400  text-gray-300 text-center font-bold">
								{" "}
								dashboard
							</h2>
						</div>
						<Link
							to="/"
							className="justify-center -mb-2 text-white/50 md:p-4 my-3 inline-flex space-x-4 rounded-lg hover:bg-gray-800 hover:text-white smooth-hover"
						>
							<span className="material-symbols-outlined text-yellow-400 p-2 sm:p-0 p-2 sm:p-0">
								home
							</span>
							<span className="font-semibold hidden md:block">
								Home
							</span>
						</Link>

						<Link
							to="/"
							className="justify-center text-white/50 md:p-4 my-3 inline-flex space-x-4 rounded-lg hover:bg-gray-800 hover:text-white smooth-hover"
						>
							<span className="material-symbols-outlined text-yellow-400 p-2 sm:p-0">
								diversity_3
							</span>
							<span className="font-semibold hidden md:block">
								Classes
							</span>
						</Link>

						<Link
							to="/"
							className="justify-center text-white/50 md:p-4 my-3 inline-flex space-x-4 rounded-lg hover:bg-gray-800 hover:text-white smooth-hover"
						>
							<span className="material-symbols-outlined text-yellow-400 p-2 sm:p-0">
								group
							</span>
							<span className="font-semibold hidden md:block">
								Groups
							</span>
						</Link>

						<Link
							to="/"
							className="justify-center text-white/50 md:p-4 my-3 inline-flex space-x-4 rounded-lg hover:bg-gray-800 hover:text-white smooth-hover"
						>
							<span className="material-symbols-outlined text-yellow-400 p-2 sm:p-0">
								sports
							</span>
							<span className="font-semibold hidden md:block">
								Coaches
							</span>
						</Link>
						<Link
							to=""
							className="mx-10 inline-flex gap-2 items-center justify-center"
						>
							<button
								onClick={handleSignout}
								className="hidden md:flex gap-2 rounded-lg bg-blue-600 hover:bg-blue-700 px-2 py-2  font-semibold text-white items-center justify-center"
							>
								<span className="material-symbols-outlined text-white hover:text-yellow-500">
									logout
								</span>
								Sign Out
							</button>
						</Link>
					</nav>
				</div>
				{/* Content */}
				<div className="col-span-5 md:flex-col py-5 bg-slate-600/40 justify-between">
					<div className="flex-1 px-2 sm:px-0 mx-10">
						<div className="flex justify-between items-center">
							<h3 className="text-3xl font-bold text-gray-900 uppercase ml-10">
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
