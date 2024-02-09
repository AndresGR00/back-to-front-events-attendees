import axios from "axios";
import { UserAttendant } from "../../components/User-Attendant/user-attendant";
import { AllUsersContainer } from "../../components/AllUsersContainer/allUsersContainer";

const ALL_ATTENDEES_URL = "http://localhost:3000/api/attendees";
export const printAllAttendees = async () => {
  try {
    AllUsersContainer();
    const response = await axios.get(ALL_ATTENDEES_URL);
    const attendees = await response.data;
    for (const attendant of attendees) {
      UserAttendant(
        attendant.name,
        attendant.email,
        attendant.avatar,
        attendant.confirmedEvents
      );
    }
  } catch (error) {
    alert('Something went wrong with the attendees request');
  }
};
