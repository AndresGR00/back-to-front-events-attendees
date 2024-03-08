import { printHome } from "../../main";
import { submitFormCreateEvent } from "../../services/api/createEvent";
import { createInput } from "../InputComponent";
import "./createEventForm.css";

export const CreateEventForm = () => {
  const main = document.querySelector("main");
  main.innerHTML = "";

  const form = document.createElement("form");
  form.id = "create-event-form";
  form.enctype = "multipart/form-data";
  form.classList.add("ev-register-form");

  const titleInput = createInput({
    inputType: "text",
    inputName: "title",
    inputId: "title",
    inputPlaceholder: "Title",
    inputRequired: true,
    inputClassName: "ev-register-form-name",
  });

  const titleLabel = document.createElement("label");
  titleLabel.htmlFor = "title";
  titleLabel.textContent = "Title";
  form.appendChild(titleLabel);
  form.appendChild(titleInput);

  const dateInput = createInput({
    inputType: "date",
    inputName: "date",
    inputId: "date",
    inputPlaceholder: "Date",
    inputRequired: true,
    inputClassName: "ev-register-form-email",
  });

  const dateLabel = document.createElement("label");
  dateLabel.htmlFor = "date";
  dateLabel.textContent = "Date";
  form.appendChild(dateLabel);
  form.appendChild(dateInput);

  const locationInput = createInput({
    inputType: "text",
    inputName: "location",
    inputId: "location",
    inputPlaceholder: "Location",
    inputRequired: true,
    inputClassName: "ev-register-form-password",
  });

  const locationLabel = document.createElement("label");
  locationLabel.htmlFor = "location";
  locationLabel.textContent = "Location";
  form.appendChild(locationLabel);
  form.appendChild(locationInput);

  const descriptionInput = createInput({
    inputType: "text",
    inputName: "description",
    inputId: "description",
    inputPlaceholder: "Description",
    inputRequired: true,
    inputClassName: "ev-register-form-avatar",
  });

  const descriptionLabel = document.createElement("label");
  descriptionLabel.htmlFor = "description";
  descriptionLabel.textContent = "Description";
  form.appendChild(descriptionLabel);
  form.appendChild(descriptionInput);

  const posterInput = createInput({
    inputType: "file",
    inputName: "poster",
    inputId: "poster",
    inputAccept: "image/*",
    inputRequired: false,
    inputClassName: "ev-register-form-avatar",
  });

  const posterLabel = document.createElement("label");
  posterLabel.htmlFor = "poster";
  posterLabel.textContent = "Poster";
  form.appendChild(posterLabel);
  form.appendChild(posterInput);

  const imagePreview = document.createElement("img");
  imagePreview.id = "image-preview";
  form.appendChild(imagePreview);

  posterInput.addEventListener("change", () => {
    const file = posterInput.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        imagePreview.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  });

  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.textContent = "Submit";
  submitButton.classList.add("ev-register-form-button");
  form.appendChild(submitButton);

  main.appendChild(form);

  submitFormCreateEvent(
    "create-event-form",
    "http://localhost:3000/api/user/events"
  );
};
