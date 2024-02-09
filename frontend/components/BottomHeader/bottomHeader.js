import { CreateEventForm } from "../CreateEventForm/createEventForm";
import "./bottomHeader.css";

export const BottomHeader = () => {
  const app = document.querySelector("#app");
  const bottomHeaderContainer = document.createElement("div");
  bottomHeaderContainer.classList.add("ev-bottom-header-container");
  const paragraph = document.createElement("p");
  paragraph.textContent = "Explore all our events or ";
  
  const link = document.createElement("a");
  link.href = "#";
  link.classList.add("ev-post-event");
  link.textContent = "create a new one";

  const userId = localStorage.getItem('userID');

  link.addEventListener('click', () => {
    if (!userId) {
      alert('You need to be logged in');
    } else {
      CreateEventForm();
    }
  });
  
  paragraph.appendChild(link);
  bottomHeaderContainer.appendChild(paragraph);
  app.appendChild(bottomHeaderContainer);
};
