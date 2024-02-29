import { EventCard } from "../../components/EventCard/eventCard";
import axios from "axios";

const ALL_EVENTS_URL = "http://localhost:3000/api/events";

export const printEvents = async () => {
  try {
    const response = await axios.get(ALL_EVENTS_URL);
    const events = await response.data;
    for (const event of events) {
      const formattedDate = formatDate(event.date);
      EventCard(
        event.poster,
        event.title,
        event.description,
        event.location,
        formattedDate,
        event._id,
      );
    }
  } catch (error) {
    const eventsContainer = document.querySelector('.ev-events-container');
    eventsContainer.innerHTML += `
    <h4 class="error-events">No events available at the moment</h4>
    `
    /* alert('Something went wrong with the events request'); */
  }
};

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};
