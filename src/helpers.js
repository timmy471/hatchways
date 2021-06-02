import { axiosGet } from "./services/axiosRequests"

export const getStudents = () => axiosGet("/assessment/students");