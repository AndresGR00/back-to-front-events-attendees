import { getEventById } from "../../services/api/getEventById";
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

  /* const participantsDiv = document.createElement("div");
  participantsDiv.classList.add("participants");
  const usersConfirmedParagraph = document.createElement("p");
  usersConfirmedParagraph.textContent = usersConfirmed;
  const attendeesConfirmedParagraph = document.createElement("p");
  attendeesConfirmedParagraph.textContent = attendeesConfirmed;
  participantsDiv.appendChild(usersConfirmedParagraph);
  participantsDiv.appendChild(attendeesConfirmedParagraph); */

  const registerLink = document.createElement("a");
  registerLink.href = "#";
  registerLink.classList.add("join");
  registerLink.textContent = "Register";

  posterImg.addEventListener('click', () => {
    getEventById(eventId);
  })
  registerLink.addEventListener('click', () => {
    alert('Has hecho click'); //Lógica Apuntarse
  })

  mainDiv.appendChild(posterImg);
  mainDiv.appendChild(titleHeading);
  mainDiv.appendChild(descriptionParagraph);
  detailsDiv.appendChild(locationDiv);
  detailsDiv.appendChild(dateDiv);
  mainDiv.appendChild(detailsDiv);
  //mainDiv.appendChild(participantsDiv);
  mainDiv.appendChild(registerLink);
  eventCard.appendChild(mainDiv);

  const eventsContainer = document.querySelector(".ev-events-container");
  eventsContainer.appendChild(eventCard);
};
