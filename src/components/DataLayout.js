import React, { useState } from "react";
import GradesLayout from "./GradesLayout";

const DataLayout = ({ students }) => {
  const [gradesToShow, setGradesToShow] = useState([]);

  const getAverage = (numbers) =>
    numbers.reduce((sum, value) => {
      return sum + Number(value);
    }, 0) / numbers.length;

  const showGrades = (id) => {
    gradesToShow.includes(id)
      ? setGradesToShow(gradesToShow.filter((gradesId) => gradesId !== id))
      : setGradesToShow([...gradesToShow, id]);
  };

  return (
    <div>
      {students.length ? (
        students.map(
          ({ id, firstName, lastName, email, company, skill, grades, pic }) => (
            <div className="data-container d-flex" key={id}>
              <div className="data-detail d-flex">
                <div id="picture-container">
                  <img
                    src={pic}
                    alt="name"
                    width="80"
                    style={{ maxWidth: "100%" }}
                  />
                </div>
                <div>
                  <h2 style={{ fontWeight: "bold" }}>
                    {firstName.toUpperCase()} {lastName.toUpperCase()}
                  </h2>
                  <ul>
                    <li>Email: {email}</li>
                    <li>Company: {company}</li>
                    <li>Skill: {skill}</li>
                    <li>Average: {getAverage(grades)}</li>
                  </ul>
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
                <h2 onClick={() => showGrades(id)}>Second</h2>
              </div>
            </div>
          )
        )
      ) : (
        <h3>No data to see</h3>
      )}
    </div>
  );
};

export default DataLayout;
