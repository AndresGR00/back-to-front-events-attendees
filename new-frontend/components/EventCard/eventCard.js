import { getEventById } from "../../services/api/getEventById";
import { userJoinTheEvent } from "../../services/api/userJoinTheEvent";
import { checkUserRegistrationToAnEvent } from "../../services/api/checkUserRegistration";
import "./eventCard.css";

export const EventCard = (
  poster,
  title,
  description,
  location,
  date,
  eventId
) => {
  const eventCard = document.createElement("div");
  eventCard.classList.add("ev-event-card");

  const mainDiv = document.createElement("div");
  mainDiv.classList.add("main");

  const posterImg = document.createElement("img");
  posterImg.classList.add("poster");
  posterImg.src = poster;
  posterImg.alt = title;

  const titleHeading = document.createElement("h2");
  titleHeading.textContent = title;

  const descriptionParagraph = document.createElement("p");
  descriptionParagraph.classList.add("description");
  descriptionParagraph.textContent = description;

  const detailsDiv = document.createElement("div");
  detailsDiv.classList.add("details");

  const locationDiv = document.createElement("div");
  locationDiv.classList.add("location");
  const locationParagraph = document.createElement("p");
  locationParagraph.textContent = location;
  locationDiv.appendChild(locationParagraph);

  const dateDiv = document.createElement("div");
  dateDiv.classList.add("date");
  const dateParagraph = document.createElement("p");
  dateParagraph.textContent = date;
  dateDiv.appendChild(dateParagraph);

  const registerLink = document.createElement("a");
  registerLink.href = "#events";
  registerLink.classList.add("join");
  registerLink.textContent = "Register";

  posterImg.addEventListener("click", () => {
    getEventById(eventId);
  });

  const handleClick = () => {
    const userId = localStorage.getItem("userID");
    if (!userId) {
      alert("You need to be logged in");
    } else {
      userJoinTheEvent(eventId, userId); // Lógica de unirse
    }
  };

  checkUserRegistrationToAnEvent(eventId, (isRegistered) => {
    if (isRegistered) {
      registerLink.textContent = "Already Registered";
      registerLink.classList.add("disable-registration-button");
      registerLink.removeEventListener("click", handleClick)
    }
  });

  registerLink.addEventListener("click", handleClick);

  mainDiv.appendChild(posterImg);
  mainDiv.appendChild(titleHeading);
  mainDiv.appendChild(descriptionParagraph);
  detailsDiv.appendChild(locationDiv);
  detailsDiv.appendChild(dateDiv);
  mainDiv.appendChild(detailsDiv);
  mainDiv.appendChild(registerLink);
  eventCard.appendChild(mainDiv);

  const eventsContainer = document.querySelector(".ev-events-container");
  eventsContainer.appendChild(eventCard);
};
