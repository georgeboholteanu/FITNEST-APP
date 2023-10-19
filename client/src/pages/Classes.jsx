import CardList from "../components/CardList";
import classesData from "../utils/classes.json";

const Classes = () => {
	
	const cardData = classesData.map(
		({ title, description, imageSrc, imageAlt }) => {
			// Load images dynamically from the public directory
			const imgSrc = `${imageSrc}`;
			const imgAlt = `${imageAlt}`;

			return { title, description, imageSrc: imgSrc, imageAlt: imgAlt };
		}
	);

	return (
		<div>
			<h2 className="titleClasses p-5 font-extrabold">Our Classes</h2>
			<CardList cardData={cardData} />
		</div>
	);
};

export default Classes;
