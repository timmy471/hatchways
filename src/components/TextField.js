import React from "react";
import PropTypes from "prop-types";

const TextField = ({ placeholder, name, value, onChange, onKeyDown }) => {
  return (
    <div>
      <input
        className="text-field"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        type="text"
      />
    </div>
  );
};

TextField.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

TextField.defaultProps = {
  placeholder: "Enter text here",
};
export default TextField;
