import { TopHeader } from "./components/TopHeader/TopHeader";
import { Header } from "./components/Header/header";
import { BottomHeader } from "./components/BottomHeader/BottomHeader";
import { EventsContainer } from "./components/EventsContainer/EventsContainer";
import { printEvents } from "./services/api/getAllEvents";
import "./style.css";
import { Footer } from "./components/Footer/footer";
import { AdminPanel } from "./components/AdminPanel/adminPanel";

export const printHome = () => {
  const app = document.querySelector("#app");
  app.innerHTML = "";
  TopHeader();
  Header();
  BottomHeader();
  EventsContainer();
  printEvents();
  Footer();
};

/* printHome(); */
AdminPanel();
