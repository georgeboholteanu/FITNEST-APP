import { Link } from "react-router-dom";

const Hero = () => {
	return (
		<div className="hero min-h-[400px] flex items-center relative">
			{/* video */}
			<video autoPlay loop muted className="h-[500px] md:h-full w-full object-cover">
				<source src="/assets/video/video (1080p).mp4" type="video/mp4" />
			</video>
			{/* hero + CTA */}
			<div className="absolute mx-5 lg:mx-20 text-left text-white px-5">
				<div className="flex">
					<h1 className="text-4xl lg:text-6xl font-medium mb-6 text-gray-300">
						Welcome to{" "}
						<div className="flex logo">
							<h1 className="text-yellow-500">fit</h1>
							<h1 className="text-black">NEST</h1>
						</div>
					</h1>
				</div>
				<p className="text-md lg:text-xl">
					Unleash Your Potential, Build a Healthier You, and Soar to
					New Heights of Wellness.
				</p>
				<p className="text-md lg:text-xl mb-12">
					Join Our Community Today and Let&apos;s Achieve Your Fitness
					Goals Together!
				</p>
				<Link
					to="/register"
					className="bg-blue-500 text-white py-4 px-12 rounded-full hover:bg-blue-800 font-bold"
				>
					Register today
				</Link>
			</div>
		</div>
	);
};

export default Hero;
