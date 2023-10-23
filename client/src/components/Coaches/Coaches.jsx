import CardList from "./CardList";
import coaches from "../../data/coaches.json";

const Coaches = () => {
	const cardData = coaches.map(
		({ name, class_name, specialization, imageSrc, imageAlt }) => {
			// Load images dynamically from the public directory
			const imgSrc = `${imageSrc}`;
			const imgAlt = `${imageAlt}`;

			return { name, class_name, specialization, imageSrc: imgSrc, imageAlt: imgAlt };
		}
	);

	return (
		<div
			id="trainer-section"
			className="text-center md:px-10 lg:px-20 pb-10"
		>
			<h2 className="titleTrainer py-5 font-extrabold text-4xl">
				Coaches
			</h2>
			<CardList cardData={cardData} />
		</div>
	);
};

export default Coaches;
