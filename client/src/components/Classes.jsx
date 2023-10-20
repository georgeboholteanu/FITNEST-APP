import CardList from "./CardList";
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
		<div id="classes-section" className="text-center md:px-10 lg:px-48">
			<h2 className="titleClasses py-5 font-extrabold text-4xl">Classes</h2>
			<CardList cardData={cardData} />
		</div>
	);
};

export default Classes;
