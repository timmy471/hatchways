import React, { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import SearchForm from "../components/SearchForm";
import DataLayout from "../components/DataLayout";

import { axiosGet } from "../services/axiosRequests";

const Home = () => {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [dataState, setDataState] = useState({
    loading: false,
    error: false,
  });

  const { loading, error } = dataState;

  const getStudents = async () => {
    setDataState({ ...dataState, loading: true });
    try {
      const res = await axiosGet("/assessment/students");
      if (res.status === 200) {
        let responseData = res.data.students;
        setStudents(responseData);
        setFilteredStudents(responseData);
      } else {
        setDataState({ ...dataState, error: true });
      }
      setDataState({ ...dataState, loading: false });
    } catch (err) {
      setDataState({ ...dataState, error: true });
      console.log(err);
    }
  };

  useEffect(() => {
    getStudents();

    //eslint-disable-next-line
  }, []);

  const onSubmit = (values) => setFilteredStudents(values);

  return (
    <div className="paper">
      {loading && !students.length ? (
        <Spinner />
      ) : !error ? (
        <>
          <SearchForm onSubmit={onSubmit} students={students} />
          <DataLayout students={filteredStudents} onSubmit={onSubmit} />
        </>
      ) : (
        <h3>An error has occured</h3>
      )}
    </div>
  );
};

export default Home;
