import axios from "axios";
import { UserAttendant } from "../../components/User-Attendant/user-attendant";

const ALL_USERS_URL = "http://localhost:3000/api/all-users";
export const printAllUsers = async () => {
  try {
    const response = await axios.get(ALL_USERS_URL);
    const users = await response.data;
    for (const user of users) {
      UserAttendant(user.name, user.email, user.avatar, user.confirmedEvents);
    }
  } catch (error) {
    console.log(error);
  }
};
