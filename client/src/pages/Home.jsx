import ContactDetails from "../components/ContactDetails";
import Subscribe from "../components/Subscribe";
import Hero from "../components/Hero";

const Home = () => {
	return (
		<div className="w-full">
			<Hero />
			<Subscribe />
			<ContactDetails />
		</div>
	);
};

export default Home;
