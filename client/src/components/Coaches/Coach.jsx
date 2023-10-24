import PropTypes from "prop-types";

const Coach = ({ name, class_name, specialization, imageSrc, imageAlt }) => {
	return (
		<div className="w-full flex flex-col rounded-lg bg-white bg-clip-border text-gray-700 shadow-lg my-2">
			{/* image */}
			<div className="relative object-cover rounded-t-lg text-center overflow-hidden bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
				<img src={imageSrc} alt={imageAlt} />
				<div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
			</div>

			{/* name, specialization */}
			<div className="p-4 flex-col items-center justify-center">
				{/* name */}
				<div className="mb-3 ">
					<h5 className="block font-sans text-xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
						{name}
					</h5>
				</div>
				{/* specialization */}
				<p className="block font-sans text-base font-light leading-relaxed text-gray-700 antialiased">
					{specialization}
				</p>
				{/* gym class */}
				<div className="flex justify-center bg-yellow-500 glass rounded-md mt-1">
					<h6 className="text-violet-500 pb-2 px-2 font-sans text-sm font-extrabold pt-2 leading-snug tracking-normal text-blue-gray-900 antialiased">
						CLASS:
					</h6>
					<h6 className="font-sans text-sm pb-2 font-extrabold pt-2 leading-snug tracking-normal text-blue-gray-900 antialiased">
						{class_name}
					</h6>
				</div>
			</div>

			{/* button */}
			<div className="p-3">
				<button
					className="block w-full select-none rounded-lg bg-violet-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-violet-500/20 transition-all hover:shadow-lg hover:shadow-violet-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
					type="button"
					data-ripple-light="true"
				>
					Book
				</button>
			</div>
		</div>
	);
};

Coach.propTypes = {
	name: PropTypes.string.isRequired,
	class_name: PropTypes.string.isRequired,
	specialization: PropTypes.string.isRequired,
	imageSrc: PropTypes.string.isRequired,
	imageAlt: PropTypes.string.isRequired,
};

export default Coach;
