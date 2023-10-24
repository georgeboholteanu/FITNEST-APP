import Class from "./Class";
import PropTypes from "prop-types";

const ClassList = ({ classData }) => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-5 lg:gap-5 xl:gap-10 px-5 md:px-4 lg:px-10 md:gap-y-2">
			{classData.map((card, index) => (
				<Class
					key={index}
					title={card.title}
					description={card.description}
					imageSrc={card.imageSrc}
					imageAlt={card.imageAlt}
				/>
			))}
		</div>
	);
};

ClassList.propTypes = {
	classData: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string.isRequired,
			description: PropTypes.string.isRequired,
			imageSrc: PropTypes.string.isRequired,
			imageAlt: PropTypes.string.isRequired,
		})
	).isRequired,
};

export default ClassList;
