import { UserAttendant } from "../../components/User-Attendant/user-attendant";
import { AllUsersContainer } from "../../components/AllUsersContainer/allUsersContainer";
import { ALL_ATTENDEES } from '../../data/allAttendees'

export const printAllAttendees = async () => {
  try {
    AllUsersContainer();
    for (const attendant of ALL_ATTENDEES) {
      UserAttendant(
        attendant.name,
        attendant.email,
        attendant.avatar,
        attendant.confirmedEvents
      );
    }
  } catch (error) {
    console.log(error);
  }
};
