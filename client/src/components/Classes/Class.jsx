import PropTypes from "prop-types";

const Class = ({ title, description, imageSrc, imageAlt }) => {
	return (
		<div className="w-full flex flex-col rounded-lg bg-white bg-clip-border text-gray-700 shadow-lg my-2">
			{/* image */}
			<div className="relative object-cover rounded-t-lg text-center overflow-hidden bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
				<img src={imageSrc} alt={imageAlt} />
				<div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
			</div>

			{/* title, description and icons */}
			<div className="p-6 flex-col items-center justify-center">
				{/* title */}
				<div className="mb-3 ">
					<h5 className="block font-sans text-xl font-bold leading-snug tracking-normal text-blue-gray-900 antialiased">
						{title}
					</h5>
				</div>
				<p className="block font-sans text-base font-light leading-relaxed text-gray-700 antialiased">
					{description}
				</p>

				{/* icons */}
				<div className="mt-6 mb-2 group inline-flex flex-wrap items-center gap-3">
					<span className="material-symbols-outlined text-pink-500 mx-3 text-3xl">exercise</span>
					<span className="material-symbols-outlined text-pink-500 mx-3 text-3xl">library_music</span>
					<span className="material-symbols-outlined text-pink-500 mx-3 text-3xl">heart_plus</span>
					<span className="material-symbols-outlined text-pink-500 mx-3 text-3xl">alarm_on</span>
				</div>
			</div>

			{/* button */}
			<div className="p-6">
				<button
					className="block w-full select-none rounded-lg bg-violet-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-violet-500/20 transition-all hover:shadow-lg hover:shadow-violet-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
					type="button"
					data-ripple-light="true"
				>
					Read more
				</button>
			</div>
		</div>
	);
};

Class.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	imageSrc: PropTypes.string.isRequired,
	imageAlt: PropTypes.string.isRequired,
};

export default Class;
