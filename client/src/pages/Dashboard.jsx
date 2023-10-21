const Dashboard = () => {

	return (
		<div className="min-h-screen grid grid-cols-12">
			{/* Left Menu */}
			<div className="col-span-1 text-center p-5">
				{/* title */}
				<div>fitNest Admin</div>
				<div>BOOKINGS</div>

				{/* menu items*/}
				<ul className="flex-col">
					<li>Classes</li>
					<li>Instructors</li>
					<li>Membership</li>
				</ul>
			</div>
			{/* Dashboard */}
			<div className="col-span-11 bg-gray-300"></div>
		</div>
	);
};


export default Dashboard;
