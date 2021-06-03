import React, { useState } from "react";
import PropTypes from "prop-types";
import GradesLayout from "./GradesLayout";
import TextField from "./TextField";
import { FaMinus, FaPlus } from "react-icons/fa";

import { getAverage } from "../helpers";

const DataLayout = ({ students, onSubmit }) => {
  const [gradesToShow, setGradesToShow] = useState([]);

  

  //Show or hide collapsible data by checking occurence of the Section Id
  const showGrades = (id) => {
    gradesToShow.includes(id)
      ? setGradesToShow(gradesToShow.filter((gradesId) => gradesId !== id))
      : setGradesToShow([...gradesToShow, id]);
  };

  const addTag = (e, id) => {
     //Add tag to the respective student using the Id as reference if a the Enter key is pressed
    if (e.key === "Enter") {
      let editedStudent = students.find((student) => student.id === id);
      if (editedStudent.tags) {
        editedStudent.tags = [...editedStudent.tags, e.target.value];
      } else {
        editedStudent.tags = [e.target.value];
      }
      onSubmit([...students])
      e.target.value=""
    }
  };


  return (
    <div className="display-layout">
      {students.length ? (
        students.map(
          ({
            id,
            firstName,
            lastName,
            email,
            company,
            skill,
            grades,
            pic,
            tags,
          }) => (
            <div className="data-container d-flex" key={id}>
              <div className="data-detail d-flex">
                <div id="picture-container">
                  <img src={pic} alt={firstName} width="80" />
                </div>
                <div>
                  <h2 style={{ fontWeight: 600 }}>
                    {firstName.toUpperCase()} {lastName.toUpperCase()}
                  </h2>
                  <ul>
                    <li>Email: {email}</li>
                    <li>Company: {company}</li>
                    <li>Skill: {skill}</li>
                    <li>Average: {getAverage(grades)}%</li>
                  </ul>
                  {tags?.length && (
                    <ul>
                      {tags.map((tag, key) => (
                        <li key={key} style={{marginBottom: "1rem"}}>
                          <span className="tag">{tag}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <br />
                  <div style={{ width: "10rem" }}>
                    <TextField
                      placeholder="Add a tag"
                      name={`tag--${id}`}
                      onKeyDown={(e) => addTag(e, id)}
                    />
                  </div>

                  <br />
                  <div
                    style={{
                      display: gradesToShow.includes(id) ? "block" : "none",
                    }}
                  >
                    <GradesLayout grades={grades} />
                  </div>
                </div>
              </div>

              <div>
                <button className="collapse-btn" onClick={() => showGrades(id)} >
                  {gradesToShow.includes(id) ? (
                    <FaMinus className="icon" />
                  ) : (
                    <FaPlus className="icon" />
                  )}
                </button>
              </div>
            </div>
          )
        )
      ) : (
        <h4 style={{ textAlign: "center" }}>No data to see</h4>
      )}
    </div>
  );
};

DataLayout.prototypes = {
  students: PropTypes.array,
  onSubmit:PropTypes.func,
}

export default DataLayout;
