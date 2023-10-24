import ContactDetails from "../components/ContactDetails";
import Subscribe from "../components/Subscribe";
import Hero from "../components/Hero";

const Home = () => {
	// const scrollToElement = (elementID) => {
	// 	const targetSection = document.getElementById(elementID);
	// 	if (targetSection) {
	// 		targetSection.scrollIntoView({ behavior: "smooth" });
	// 	}
	// };

	return (
		<div className="w-full">
			<Hero />
			<Subscribe />
			<ContactDetails />
		</div>
	);
};

export default Home;
