import axios from "axios";

export const checkUserRegistrationToAnEvent = async (eventId, callback) => {
  try {
    const userId = localStorage.getItem("userID");

    if (userId) {
      const userInfo = await axios.get(
        `http://localhost:3000/api/user/${userId}`
      );
      const arrayOfEvents = userInfo.data.confirmedEvents;

      if (arrayOfEvents.includes(eventId)) {
        callback(true);
      } else {
        callback(false);
      }
    } else {
        return
    }
  } catch (error) {
    console.error(error);
  }
};
