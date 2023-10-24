import classesData from "../../data/classes.json";
import ClassList from "./ClassList";

const AllClasses = () => {
	const classData = classesData.map(
		({ title, description, imageSrc, imageAlt }) => {
			// Load images dynamically from the public directory
			const imgSrc = `${imageSrc}`;
			const imgAlt = `${imageAlt}`;

			return { title, description, imageSrc: imgSrc, imageAlt: imgAlt };
		}
	);

	return (
		<div
			id="classes-section"
			className="text-center md:px-10 lg:px-48 pb-10"
		>
			<h2 className="titleClasses py-5 font-extrabold text-4xl">
				Classes
			</h2>
			<ClassList classData={classData} />
		</div>
	);
};

export default AllClasses;
