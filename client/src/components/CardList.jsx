import Card from "./Card";
import PropTypes from "prop-types";

const CardList = ({ cardData }) => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-5 lg:gap-10 md:px-5 lg:px-10">
			{cardData.map((card, index) => (
				<Card
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

CardList.propTypes = {
	cardData: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string.isRequired,
			description: PropTypes.string.isRequired,
			imageSrc: PropTypes.string.isRequired,
			imageAlt: PropTypes.string.isRequired,
		})
	).isRequired,
};

export default CardList;
