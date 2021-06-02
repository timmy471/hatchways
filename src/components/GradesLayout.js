import React from "react";
import PropTypes from "prop-types";

const GradesLayout = ({ grades }) => {
  return (
    <ul>
      {grades.map((grade, index) => (
        <li key={index}>
          <span>{`Test ${index + 1}`}</span>
          <span style={{ marginLeft: "2rem" }}> {`${grade}%`}</span>
        </li>
      ))}
    </ul>
  );
};

GradesLayout.propTypes ={
    grades: PropTypes.array.isRequired,
}

export default GradesLayout;
