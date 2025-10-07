import PropTypes from "prop-types";
import "./Error.css";

const Error = ({ errorMessage }) => {
  return <div className="error-message">{errorMessage.toString()}</div>;
};

Error.propTypes = {
  errorMessage: PropTypes.string.isRequired,
};

export default Error;
