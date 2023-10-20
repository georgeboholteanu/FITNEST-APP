import { NavLink } from "react-router-dom";

const Hero = () => {
	return (
		<div className="hero min-h-screen flex items-center">
			<video
				autoPlay
				loop
				muted
				className="absolute inset-0 w-full h-full object-cover md:mt-36 lg:mt-36"
			>
				<source
					src="../public/assets/video/video (1080p).mp4"
					type="video/mp4"
				/>
			</video>

			<div className="container mx-auto text-left text-white relative px-5">
				<div className="flex">
					<h1 className="text-6xl font-medium mb-6 text-gray-300">
						Welcome to{" "}
						<div className="flex logo">
							<h1 className="text-yellow-500">fit</h1>
							<h1 className="text-black">NEST</h1>
						</div>
					</h1>
				</div>
				<p className="text-xl">
					Unleash Your Potential, Build a Healthier You, and Soar to
					New Heights of Wellness.
				</p>
				<p className="text-xl mb-12">
					Join Our Community Today and Let&apos;s Achieve Your Fitness
					Goals Together!
				</p>
				<NavLink
					to="/register"
					className="bg-gray-900 text-white py-4 px-12 rounded-full hover:bg-indigo-600"
				>
					Register today
				</NavLink>
			</div>
		</div>
	);
};

export default Hero;
