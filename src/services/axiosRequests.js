import axios from "axios";

const { REACT_APP_API_URL } = process.env


const axiosInstance = axios.create({
    baseURL: REACT_APP_API_URL
});

const axiosGet =  (appendUrl) => {
    return new Promise((resolve, reject) => {
      axiosInstance
        .get(appendUrl)
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  //Declare other http methods here if need be

export { axiosGet }
