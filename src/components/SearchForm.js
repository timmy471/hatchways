import React, { useState } from "react";
import TextField from "./TextField";

const SearchForm = ({ onSubmit, students }) => {
  const [values, setValues] = useState({
    studentName: "",
    tag: "",
  });

  let newData;

  const { studentName, tag } = values;

  const onChange = (e) => {
    //set values in state
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });

    //call the filter function, passing accurate data
    if (name === "studentName") {
      getResults(value, tag);
    } else {
      getResults(studentName, value);
    }
  };

  const makeLowerCase = (val) => val.toLowerCase().trim();

  //filter for name
  const hasName = (student, name) =>
    `${makeLowerCase(student.firstName)} ${makeLowerCase(
      student.lastName
    )}`.includes(makeLowerCase(name));

    //filter for tag
  const hasTag = (student, tag) =>
    makeLowerCase(student.city).includes(makeLowerCase(tag));


  const getResults = (name, tag) => {
    //check for empty values
    // if (!name.trim().length && !tag.trim().length) {
    //   return false;
    // }

    //filter for both values if available
    if (name.trim().length && tag.trim().length) {
      newData = students.filter(
        (student) => hasName(student, name) && hasTag(student, tag)
      );
    } else if (name.trim().length) {
      newData = students.filter((student) => hasName(student, name));
    } else {
      
      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      // **************************CHANGE THIS TO TAG****************************8
      ///////////////////////////////////////////////////
      newData = students.filter((student) => hasTag(student, tag));
    }
    onSubmit(newData);
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

export default SearchForm;
