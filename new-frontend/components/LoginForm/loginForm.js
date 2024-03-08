import { submitLoginForm } from "../../services/api/loginAnUser";
import { createInput } from "../InputComponent";
import "./loginForm.css";

export const LoginForm = () => {
  const main = document.querySelector("main");
  main.innerHTML = "";

  const form = document.createElement("form");
  form.id = "login-form";
  form.enctype = "multipart/form-data";
  form.classList.add("ev-register-form");

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

  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.textContent = "Submit";
  submitButton.classList.add("ev-register-form-button");
  form.appendChild(submitButton);

  main.appendChild(form);

  submitLoginForm("login-form", "http://localhost:3000/api/login");
};
