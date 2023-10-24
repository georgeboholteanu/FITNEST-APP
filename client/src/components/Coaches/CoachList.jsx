import Coach from "./Coach";
import PropTypes from "prop-types";

const CoachList = ({ coachData }) => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 md:gap-5 lg:gap-5 xl:gap-10 px-5 md:px-4 lg:px-10 md:gap-y-2">
			{coachData.map((card, index) => (
				<Coach
					key={index}
					name={card.name}
					class_name={card.class_name}
					specialization={card.specialization}
					imageSrc={card.imageSrc}
					imageAlt={card.imageAlt}
				/>
			))}
		</div>
	);
};

CoachList.propTypes = {
	coachData: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			class_name: PropTypes.string.isRequired,
			specialization: PropTypes.string.isRequired,
			imageSrc: PropTypes.string.isRequired,
			imageAlt: PropTypes.string.isRequired,
		})
	).isRequired,
};

export default CoachList;
