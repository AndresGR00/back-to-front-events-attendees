import { formatDate } from "../../services/api/getAllEvents";
import { Footer } from "../Footer/footer";
import { Header } from "../Header/header";
import { TopHeader } from "../TopHeader/TopHeader";
import "./singleEvent.css";

export const SingleEventContainer = () => {
  const app = document.querySelector("#app");
  app.innerHTML = "";
  TopHeader();
  Header();
  const singleEventDiv = document.createElement("div");
  singleEventDiv.className = "ev-single-event-container";
  app.appendChild(singleEventDiv);
  Footer();
};

export const SingleEvent = (event) => {
  const formattedDate = formatDate(event.date);
  const singleEventcontainer = document.querySelector(
    ".ev-single-event-container"
  );
  singleEventcontainer.innerHTML += `<div class="ev-single-event-card">
  <div class="single-main">
    <img class="single-poster" src="${event.poster}" alt="${event.title}">
    <h2>${event.title}</h2>
    <p class="single-description">${event.description}</p>
    <div class="single-details">
      <div class="single-location">
        <p>${event.location}</p>
      </div>
      <div class="single-date">
        <p>${formattedDate}</p>
      </div>
    </div>
    <div class="single-participants">

      <div class="single-participants-users">
        <div class="users-list-container-name">
          <p class="single-event-users">Confirmed users</p>
          <p class="single-event-users">+</p>
        </div>
        <ul class="user-list single-event-hidden">
        ${event.usersConfirmed.map(user => `<li>${user.name}</li>`).join('')}
        </ul>
      </div>

      <div class="single-participants-attendants">
        <div class="attendants-list-container-name">
          <p class="single-event-attendants">Confirmed attendees</p>
          <p class="single-event-attendants">+</p>
        </div>
        <ul class="attendant-list single-event-hidden">
        ${event.attendeesConfirmed.map(user => `<li>${user.name}</li>`).join('')}
        </ul>
      </div>
      
      
    </div>
    <a href="#" class="single-join">Register</a>
  </div>
</div>`;

const singleEventCard = singleEventcontainer.lastElementChild;
const userListTrigger = singleEventCard.querySelector(".users-list-container-name");
const userList = singleEventCard.querySelector(".user-list");
const attendantsListTrigger = singleEventCard.querySelector(".attendants-list-container-name");
const attendantsList = singleEventCard.querySelector(".attendant-list");

userListTrigger.addEventListener("click", () => {
  userList.classList.toggle("single-event-hidden");
});
attendantsListTrigger.addEventListener("click", () => {
    attendantsList.classList.toggle("single-event-hidden");
  });
};
// ${event.usersConfirmed.map(user => `<li>${user.name}</li>`).join('')}
