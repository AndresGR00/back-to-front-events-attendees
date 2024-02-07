import { TopHeader } from "./components/TopHeader/TopHeader";
import { Header } from "./components/Header/header";
import { BottomHeader } from "./components/BottomHeader/BottomHeader";
import { EventsContainer } from "./components/EventsContainer/EventsContainer";
import { printEvents } from "./services/api/getAllEvents";
import "./style.css";

export const printHome = () => {
  const app = document.querySelector("#app");
  app.innerHTML = "";
  TopHeader();
  Header();
  BottomHeader();
  EventsContainer();
  printEvents();
};

printHome();
