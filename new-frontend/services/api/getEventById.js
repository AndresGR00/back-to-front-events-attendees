import axios from "axios";
import { SingleEvent } from "../../components/singleEvent/singleEvent";
const EVENT_BY_ID = "http://localhost:3000/api/events/";

export const getEventById = async (id) => {
  try {
    const response = await axios.get(EVENT_BY_ID + id);
    const event = await response.data;
    SingleEvent(event);
  } catch (error) {
    console.log(error)
    alert('Something went wrong with the event request');
  }
};

//Manejar renerizado de evento con el componente de evento individual