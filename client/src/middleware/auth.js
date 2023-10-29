import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

export const AuthorizeUser = ({ children }) => {
	const token = localStorage.getItem("token");

	if (!token) {
		return <Navigate to={"/"} replace={true} />;
	}

	return children;
};

AuthorizeUser.propTypes = {
	children: PropTypes.string,
};
