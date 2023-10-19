import PropTypes from "prop-types";

const Card = ({ title, description, imageSrc, imageAlt }) => {
	return (
		<div className="w-full flex flex-col max-w-[24rem] h-[500px] rounded-lg bg-white bg-clip-border text-gray-700 shadow-lg m-2 justify-between">
			{/* image */}
			<div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
				<img src={imageSrc} alt={imageAlt} />
				<div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
			</div>

			{/* title, description and icons */}
			<div className="p-2 flex-col items-center justify-center">
				{/* title */}
				<div className="mb-3 ">
					<h5 className="block font-sans text-xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
						{title}
					</h5>
				</div>
				<p className="block font-sans text-base font-light leading-relaxed text-gray-700 antialiased">
					{description}
				</p>

				{/* icons */}
				<div className="mt-6 mb-2 group inline-flex flex-wrap items-center gap-3">
					<span
						data-tooltip-target="wifi"
						className="cursor-pointer rounded-full border border-violet-500/5 bg-violet-500/5 p-3 text-violet-500 transition-colors hover:border-violet-500/10 hover:bg-violet-500/10 hover:!opacity-100 group-hover:opacity-70"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							aria-hidden="true"
							className="h-5 w-5"
						>
							<path
								fillRule="evenodd"
								d="M1.371 8.143c5.858-5.857 15.356-5.857 21.213 0a.75.75 0 010 1.061l-.53.53a.75.75 0 01-1.06 0c-4.98-4.979-13.053-4.979-18.032 0a.75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.182 3.182c4.1-4.1 10.749-4.1 14.85 0a.75.75 0 010 1.061l-.53.53a.75.75 0 01-1.062 0 8.25 8.25 0 00-11.667 0 .75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.204 3.182a6 6 0 018.486 0 .75.75 0 010 1.061l-.53.53a.75.75 0 01-1.061 0 3.75 3.75 0 00-5.304 0 .75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.182 3.182a1.5 1.5 0 012.122 0 .75.75 0 010 1.061l-.53.53a.75.75 0 01-1.061 0l-.53-.53a.75.75 0 010-1.06z"
								clipRule="evenodd"
							></path>
						</svg>
					</span>

					<span
						data-tooltip-target="bedrooms"
						className="cursor-pointer rounded-full border border-violet-500/5 bg-violet-500/5 p-3 text-violet-500 transition-colors hover:border-violet-500/10 hover:bg-violet-500/10 hover:!opacity-100 group-hover:opacity-70"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							aria-hidden="true"
							className="h-5 w-5"
						>
							<path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"></path>
							<path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"></path>
						</svg>
					</span>

					<span
						data-tooltip-target="fire"
						className="cursor-pointer rounded-full border border-violet-500/5 bg-violet-500/5 p-3 text-violet-500 transition-colors hover:border-violet-500/10 hover:bg-violet-500/10 hover:!opacity-100 group-hover:opacity-70"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							aria-hidden="true"
							className="h-5 w-5"
						>
							<path
								fillRule="evenodd"
								d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z"
								clipRule="evenodd"
							></path>
						</svg>
					</span>
					<span
						data-tooltip-target="more"
						className="cursor-pointer rounded-full border border-violet-500/5 bg-violet-500/5 p-3 text-violet-500 transition-colors hover:border-violet-500/10 hover:bg-violet-500/10 hover:!opacity-100 group-hover:opacity-70"
					>
						+10
					</span>
				</div>
			</div>

			{/* button */}
			<div className="p-6 pt-3 align-bottom flex-grow justify-end">
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

Card.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	imageSrc: PropTypes.string.isRequired,
	imageAlt: PropTypes.string.isRequired,
};

export default Card;
