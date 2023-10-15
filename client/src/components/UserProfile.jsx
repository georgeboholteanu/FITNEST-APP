import React from "react";
import PropTypes from 'prop-types';

function UserProfile({ user }) {
	return (
		<div>
			<h2>Welcome, {user.first_name}!</h2>
			<p>User details: {JSON.stringify(user)}</p>
		</div>
	);
}

UserProfile.propTypes = {
	user: PropTypes.shape({
		first_name: PropTypes.string,
		// Add more prop types as needed for the user object
	}),
};

export default UserProfile;
