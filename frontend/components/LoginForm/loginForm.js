import { submitLoginForm } from "../../services/api/loginAnUser";
import { Footer } from "../Footer/footer";
import { Header } from "../Header/header";
import "./loginForm.css";

export const LoginForm = () => {
  const app = document.querySelector("#app");
  app.innerHTML = "";
  Header();

  const form = document.createElement("form");
  form.id = "login-form";
  form.enctype = "multipart/form-data";
  form.classList.add("ev-register-form");

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

  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.textContent = "Submit";
  submitButton.classList.add("ev-register-form-button");
  form.appendChild(submitButton); 

  app.appendChild(form);

  submitLoginForm("login-form", "http://localhost:3000/api/login");

  Footer();
};
