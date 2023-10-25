import { Link } from "react-router-dom";

const Contact = () => {
	return (
		<div className="relative">
			{/* image */}
			<div className="min-w-full object-cover">
				<img
					className=""
					src="/assets/images/geert-pieters-AfgJpWQH4lw-unsplash.jpg"
				/>
			</div>
			{/* header */}
			<div className="md:absolute md:top-1/2 px-5 md:px-10 transform md:-translate-y-1/2 text-left text-white bg-gray-400 md:bg-transparent">
				<div className="flex flex-col md:flex-row">
					{/* hero */}
					<div className="px-5 md:px-10 py-5 md:pt-40 pt-10 md:pr-60">
						<div className="glass px-5 md:px-10 py-5 md:py-10 rounded-lg shadow-lg">
							<h1 className="text-3xl md:text-5xl font-bold capitalize text-white">
								Get in Touch for a Fit Tomorrow!
							</h1>

							<p className="mt-6 font-semibold text-black ">
								Ready to kickstart your fitness adventure?
							</p>
							<p className=" font-semibold text-yellow-400 ">
								We can't wait to hear from you!
							</p>
						</div>
					</div>
					{/* form */}
					<div className="px-5 md:px-10 md:w-[1000px] py-10 md:pr-40">
						<h1 className="text-2xl font-bold md:text-3xl text-yellow-400 text-center">
							Lets talk about everything!
						</h1>

						<form className="mt-6">
							<div className="flex-1">
								<label className="block mb-2 text-sm text-gray-800 md:text-gray-400 font-semibold dark:text-gray-200">
									Full Name
								</label>
								<input
									type="text"
									placeholder="John Doe"
									className="block w-full px-5 py-3 mt-2 text-gray-700 bg-gray-200 border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
								/>
							</div>

							<div className="flex-1 mt-6">
								<label className="block mb-2 text-sm text-gray-800 md:text-gray-400 font-semibold dark:text-gray-200">
									Email address
								</label>
								<input
									type="email"
									placeholder="johndoe@example.com"
									className="block w-full px-5 py-3 mt-2 text-gray-700  bg-gray-200 border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
								/>
							</div>

							<div className="w-full mt-6">
								<label className="block mb-2 text-sm text-gray-800 md:text-gray-400 font-semibold dark:text-yellow-400">
									Message
								</label>
								<textarea
									className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-500 bg-gray-200 border border-gray-200 rounded-md md:h-48 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
									placeholder="Message"
								></textarea>
							</div>

							<button className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">
								<Link
									to="mailto:george.boholteanu@gmail.com"									
								>
									get in touch
								</Link>
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
