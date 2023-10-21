import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ isLoggedIn, children }) => {
  if (isLoggedIn) {
    return children;
  } else {
    return <Navigate to="/login" replace />;
  }
};

PrivateRoute.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  children: PropTypes.node,
};

export default PrivateRoute;