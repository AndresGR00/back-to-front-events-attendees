import { submitFormRegisterUser } from "../../services/api/registerAnUser";
import { Footer } from "../Footer/footer";
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
  form.appendChild(nameLabel); 
  form.appendChild(nameInput); 

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
  form.appendChild(emailLabel); 
  form.appendChild(emailInput); 

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
  form.appendChild(passwordLabel); 
  form.appendChild(passwordInput); 

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
  form.appendChild(avatarLabel);
  form.appendChild(avatarInput); 

  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.textContent = "Submit";
  submitButton.classList.add("ev-register-form-button");
  form.appendChild(submitButton); 

  app.appendChild(form);
  submitFormRegisterUser("registration-form", "http://localhost:3000/api/register");
  Footer()
};
