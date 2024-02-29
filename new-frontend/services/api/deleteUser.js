import axios from "axios";
import { printAllUsers } from "./getAllUsers";

const URL = "http://localhost:3000/api/delete-user/";
export const deleteUser = async (userId) => {
  try {
    const token = localStorage.getItem("token");

    axios.interceptors.request.use(
      (config) => {
        config.headers.Authorization = `Bearer ${token}`;
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    )
    const response = await axios.delete(`${URL}${userId}`);
    if (response.status === 200) {
      alert("User successfully deleted");
    } else {
      alert("User could not be deleted");
    }
    printAllUsers();
  } catch (error) {
    alert('Something went wrong')
  }
};
