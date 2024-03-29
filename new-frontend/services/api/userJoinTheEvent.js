import axios from "axios";
import { printHome } from '../../main'

export const userJoinTheEvent = async (eventId, userId) => {
  const URL_ADD_EVENT = `http://localhost:3000/api/user/attendees/${eventId}/${userId}`;
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
    );
    await axios.post(URL_ADD_EVENT);
    alert("User signed up for the event");
    printHome();
  } catch (error) {
    alert("You are already registered for this event");
  }
};
