import axios from "axios";


export const userJoinTheEvent = async (eventId, userId) => {
    const URL_ADD_EVENT = `http://localhost:3000/api/user/attendees/${eventId}/${userId}`;
    try {
        await axios.post(URL_ADD_EVENT)
        alert('Usuario apuntado el evento')
    } catch (error) {
        console.log(error);
    }
};
