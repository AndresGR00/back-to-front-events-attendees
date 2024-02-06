import { submitFormRegisterUser } from "../../services/api/registerAnUser";
import { Header } from "../Header/header";
import "./registerForm.css";

export const RegisterForm = () => {
  const app = document.querySelector("#app");
  app.innerHTML = "";
  Header();

  const form = document.createElement("form");
  form.id = "registration-form";
  form.enctype = "multipart/form-data";
  form.classList.add("ev-register-form");

  // Campo Name
  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.name = "name";
  nameInput.id = "name";
  nameInput.placeholder = "Name";
  nameInput.required = true;
  nameInput.classList.add("ev-register-form-name");

  const nameLabel = document.createElement("label");
  nameLabel.htmlFor = "name";
  nameLabel.textContent = "Name";
  form.appendChild(nameLabel); // Adjunta la etiqueta al formulario antes del input
  form.appendChild(nameInput); // Adjunta el input al formulario

  // Campo Email
  const emailInput = document.createElement("input");
  emailInput.type = "email";
  emailInput.name = "email";
  emailInput.id = "email";
  emailInput.placeholder = "Email";
  emailInput.required = true;
  emailInput.classList.add("ev-register-form-email");

  const emailLabel = document.createElement("label");
  emailLabel.htmlFor = "email";
  emailLabel.textContent = "Email";
  form.appendChild(emailLabel); // Adjunta la etiqueta al formulario antes del input
  form.appendChild(emailInput); // Adjunta el input al formulario

  // Campo Password
  const passwordInput = document.createElement("input");
  passwordInput.type = "password";
  passwordInput.name = "password";
  passwordInput.id = "password";
  passwordInput.placeholder = "Password";
  passwordInput.required = true;
  passwordInput.classList.add("ev-register-form-password");

  const passwordLabel = document.createElement("label");
  passwordLabel.htmlFor = "password";
  passwordLabel.textContent = "Password";
  form.appendChild(passwordLabel); // Adjunta la etiqueta al formulario antes del input
  form.appendChild(passwordInput); // Adjunta el input al formulario

  // Campo Avatar
  const avatarInput = document.createElement("input");
  avatarInput.type = "file";
  avatarInput.name = "avatar";
  avatarInput.id = "avatar";
  avatarInput.accept = "image/*";
  avatarInput.required = false;
  avatarInput.classList.add("ev-register-form-avatar");

  const avatarLabel = document.createElement("label");
  avatarLabel.htmlFor = "avatar";
  avatarLabel.textContent = "Avatar";
  form.appendChild(avatarLabel); // Adjunta la etiqueta al formulario antes del input
  form.appendChild(avatarInput); // Adjunta el input al formulario

  // Botón de Submit
  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.textContent = "Submit";
  submitButton.classList.add("ev-register-form-button");
  form.appendChild(submitButton); // Adjunta el botón al formulario

  // Adjunta el formulario al contenedor principal
  app.appendChild(form);

  // Agrega el listener para enviar el formulario
  submitFormRegisterUser("registration-form", "http://localhost:3000/api/register");
};
