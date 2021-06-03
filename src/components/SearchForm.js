import React, { useState } from "react";
import PropTypes from "prop-types";
import TextField from "./TextField";

import { getResults } from "../helpers";

const SearchForm = ({ onSubmit, students }) => {
  //Initialize form values
  const [values, setValues] = useState({
    studentName: "",
    tag: "",
  });

  const { studentName, tag } = values;

  const onChange = (e) => {
    //set values in state
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });

    //call the filter function, passing accurate data
    //setState is asynchronous, get values logically instead
    if (name === "studentName") {
      onSubmit(getResults(students, value, tag));
    } else {
      onSubmit(getResults(students, studentName, value));
    }
  };

  return (
    <div className="form-container">
      <TextField
        placeholder="Search by name"
        value={studentName}
        name="studentName"
        onChange={onChange}
      />
      <br />
      <TextField
        placeholder="Search by Tag"
        value={tag}
        name="tag"
        onChange={onChange}
      />
    </div>
  );
};

SearchForm.prototypes = {
  onSubmit: PropTypes.func,
  students: PropTypes.array,
};

export default SearchForm;
