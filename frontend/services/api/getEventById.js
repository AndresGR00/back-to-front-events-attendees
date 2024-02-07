import axios from "axios";
import { SingleEvent, SingleEventContainer } from "../../components/singleEvent/singleEvent";
const EVENT_BY_ID = "http://localhost:3000/api/events/";

export const getEventById = async (id) => {
  try {
    const response = await axios.get(EVENT_BY_ID + id);
    const event = await response.data;
    SingleEventContainer();
    SingleEvent(event);
  } catch (error) {
    console.log(error);
  }
};

//Manejar renerizado de evento con el componente de evento individual