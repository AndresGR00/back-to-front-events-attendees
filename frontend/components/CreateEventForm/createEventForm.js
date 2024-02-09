import { submitFormCreateEvent } from "../../services/api/createEvent";
import { Footer } from "../Footer/footer";
import { Header } from "../Header/header";
import { TopHeader } from "../TopHeader/TopHeader";
import "./createEventForm.css";

export const CreateEventForm = () => {
  const app = document.querySelector("#app");
  app.innerHTML = "";
  TopHeader();
  Header();

  const form = document.createElement("form");
  form.id = "create-event-form";
  form.enctype = "multipart/form-data";
  form.classList.add("ev-register-form");

  const titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.name = "title";
  titleInput.id = "title";
  titleInput.placeholder = "Title";
  titleInput.required = true;
  titleInput.classList.add("ev-register-form-name");

  const titleLabel = document.createElement("label");
  titleLabel.htmlFor = "title";
  titleLabel.textContent = "Title";
  form.appendChild(titleLabel);
  form.appendChild(titleInput);

  const dateInput = document.createElement("input");
  dateInput.type = "date";
  dateInput.name = "date";
  dateInput.id = "date";
  dateInput.placeholder = "Date";
  dateInput.required = true;
  dateInput.classList.add("ev-register-form-email");

  const dateLabel = document.createElement("label");
  dateLabel.htmlFor = "date";
  dateLabel.textContent = "Date";
  form.appendChild(dateLabel);
  form.appendChild(dateInput);

  const locationInput = document.createElement("input");
  locationInput.type = "text";
  locationInput.name = "location";
  locationInput.id = "location";
  locationInput.placeholder = "Location";
  locationInput.required = true;
  locationInput.classList.add("ev-register-form-password");

  const locationLabel = document.createElement("label");
  locationLabel.htmlFor = "location";
  locationLabel.textContent = "Location";
  form.appendChild(locationLabel);
  form.appendChild(locationInput);

  const descriptionInput = document.createElement("input");
  descriptionInput.type = "text";
  descriptionInput.name = "description";
  descriptionInput.id = "description";
  descriptionInput.placeholder = "Description";
  descriptionInput.required = false;
  descriptionInput.classList.add("ev-register-form-avatar");

  const descriptionLabel = document.createElement("label");
  descriptionLabel.htmlFor = "description";
  descriptionLabel.textContent = "Description";
  form.appendChild(descriptionLabel);
  form.appendChild(descriptionInput);

  const posterInput = document.createElement("input");
  posterInput.type = "file";
  posterInput.name = "poster";
  posterInput.id = "poster";
  posterInput.accept = "image/*";
  posterInput.required = false;
  posterInput.classList.add("ev-register-form-avatar");

  const posterLabel = document.createElement("label");
  posterLabel.htmlFor = "poster";
  posterLabel.textContent = "Poster";
  form.appendChild(posterLabel);
  form.appendChild(posterInput);

  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.textContent = "Submit";
  submitButton.classList.add("ev-register-form-button");
  form.appendChild(submitButton);

  app.appendChild(form);
  submitFormCreateEvent(
    "create-event-form",
    "http://localhost:3000/api/user/events"
  );
  Footer();
};
