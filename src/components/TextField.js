import React from "react";
import PropTypes from "prop-types";

const TextField = ({ placeholder, name, onChange }) => {
  return (
    <div>
      <input
        className="text-field"
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        type="text"
      />
    </div>
  );
};

TextField.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

TextField.defaultProps = {
  placeholder: "Enter text here",
};
export default TextField;
