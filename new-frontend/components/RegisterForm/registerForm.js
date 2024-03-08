import { submitFormRegisterUser } from "../../services/api/registerAnUser";
import { createInput } from "../InputComponent";
import "./registerForm.css";

export const RegisterForm = () => {
  const main = document.querySelector("main");
  main.innerHTML = "";

  const form = document.createElement("form");
  form.id = "registration-form";
  form.enctype = "multipart/form-data";
  form.classList.add("ev-register-form");

  const nameInput = createInput({
    inputType: "text",
    inputName: "name",
    inputId: "name",
    inputPlaceholder: "Name",
    inputRequired: true,
    inputClassName: "ev-register-form-name",
  });

  const nameLabel = document.createElement("label");
  nameLabel.htmlFor = "name";
  nameLabel.textContent = "Name";
  form.appendChild(nameLabel);
  form.appendChild(nameInput);

  const emailInput = createInput({
    inputType: "email",
    inputName: "email",
    inputId: "email",
    inputPlaceholder: "Email",
    inputRequired: true,
    inputClassName: "ev-register-form-email",
  });

  const emailLabel = document.createElement("label");
  emailLabel.htmlFor = "email";
  emailLabel.textContent = "Email";
  form.appendChild(emailLabel);
  form.appendChild(emailInput);

  const passwordInput = createInput({
    inputType: "password",
    inputName: "password",
    inputId: "password",
    inputPlaceholder: "Password",
    inputRequired: true,
    inputClassName: "ev-register-form-password",
  });

  const passwordLabel = document.createElement("label");
  passwordLabel.htmlFor = "password";
  passwordLabel.textContent = "Password";
  form.appendChild(passwordLabel);
  form.appendChild(passwordInput);

  const avatarInput = createInput({
    inputType: "file",
    inputName: "avatar",
    inputId: "avatar",
    inputPlaceholder: "Avatar",
    inputRequired: true,
    inputClassName: "ev-register-form-avatar",
  });

  const avatarLabel = document.createElement("label");
  avatarLabel.htmlFor = "avatar";
  avatarLabel.textContent = "Avatar";
  form.appendChild(avatarLabel);
  form.appendChild(avatarInput);

  const imagePreview = document.createElement("img");
  imagePreview.id = "image-preview";
  form.appendChild(imagePreview);

  avatarInput.addEventListener("change", () => {
    const file = avatarInput.files[0];
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
  submitFormRegisterUser(
    "registration-form",
    "http://localhost:3000/api/register"
  );
};
