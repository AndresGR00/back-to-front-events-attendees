import { Header } from "../Header/header";
import "./allUsersContainer.css";

export const AllUsersContainer = () => {
  const app = document.querySelector("#app");
  app.innerHTML = "";
  Header();

  const allUsersContainer = document.createElement("div");
  allUsersContainer.className = "ev-allusers-container";

  app.appendChild(allUsersContainer);
};
