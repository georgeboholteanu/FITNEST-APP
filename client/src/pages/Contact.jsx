const Contact = () => {
	return (
		<div className="min-h-screen bg-cover">
			<div className="flex flex-col min-h-screen bg-black/60">
				<div className="container flex flex-col flex-1 px-6 py-12 mx-auto">
					<div className="flex-1 lg:flex lg:items-center text-center md:text-left lg:text-left">
						{/* title */}
						<div className="text-white lg:w-1/2 lg:mx-6">
							<h1 className="text-2xl font-semibold capitalize lg:text-3xl">
								Get in Touch for a Fit Tomorrow!
							</h1>

							<p className="max-w-xl mt-6">
								Ready to kickstart your fitness adventure? We
								can't wait to hear from you! Share your details
								below, and let's get the conversation started.
								
							</p>

							<button className="px-8 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">
								contact us
							</button>
						</div>

						{/* body */}
						<div className="mt-8 lg:w-1/2 lg:mx-6">
							<div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white shadow-2xl rounded-xl dark:bg-gray-900 lg:max-w-xl">
								<h1 className="text-xl font-medium text-gray-700 dark:text-gray-200">
									Contact form
								</h1>

								<p className="mt-2 text-gray-500 dark:text-gray-400">
									Ask us everything and we would love to hear
									from you
								</p>

								<form className="mt-6">
									<div className="flex-1">
										<label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
											Full Name
										</label>
										<input
											type="text"
											placeholder="John Doe"
											className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
										/>
									</div>

									<div className="flex-1 mt-6">
										<label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
											Email address
										</label>
										<input
											type="email"
											placeholder="johndoe@example.com"
											className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
										/>
									</div>

									<div className="w-full mt-6">
										<label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
											Message
										</label>
										<textarea
											className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
											placeholder="Message"
										></textarea>
									</div>

									<button className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">
										get in touch
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
