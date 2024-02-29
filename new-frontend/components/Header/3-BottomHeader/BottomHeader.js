import "./BottomHeader.css";
import { CreateEventForm } from "../../CreateEventForm/createEventForm";

export const BottomHeader = () => {
  const userId = localStorage.getItem("userID");

  if (userId) {
    const header = document.querySelector("header");

    const bottomHeaderContainer = document.createElement("div");
    bottomHeaderContainer.classList.add("ev-bottom-header-container");
    const paragraph = document.createElement("p");
    paragraph.textContent = "Explore all our events or ";

    const link = document.createElement("a");
    link.href = "#";
    link.classList.add("ev-post-event");
    link.textContent = "create a new one";

    link.addEventListener("click", CreateEventForm);

    paragraph.appendChild(link);
    bottomHeaderContainer.appendChild(paragraph);
    header.appendChild(bottomHeaderContainer);
  } else {
    return;
  }
};
