import axios from "axios";
import { UserAttendant } from "../../components/User-Attendant/user-attendant";
import { AllUsersContainer } from "../../components/AllUsersContainer/allUsersContainer";

const ALL_USERS_URL = "http://localhost:3000/api/all-users";
export const printAllUsers = async () => {
  try {
    AllUsersContainer();
    const response = await axios.get(ALL_USERS_URL);
    const users = await response.data;
    for (const user of users) {
      UserAttendant(user.name, user.email, user.avatar, user.confirmedEvents);
    }
  } catch (error) {
    alert('Something went wrong with the users request');
  }
};
