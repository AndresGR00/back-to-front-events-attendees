import "./header.css";
import { logo } from "../../data/data";

const loginFormFunction = () => {
  console.log("Formulario para hacer login");
};
const signinFormFunction = () => {
  console.log("Formulario para hacer registro");
};

export const Header = () => {
  const app = document.querySelector("#app");
  app.innerHTML += `<header>
    <div class="ev-logo-container">
      <a href="#" class="ev-logo-anchor">
        <img src="${logo}" alt="Even-TS logo" class="ev-logo-img">
      </a>
    </div>
    <div class="ev-header-buttons">
      <a href="#" class="ev-login-button">Login</a>
      <a href="#" class="ev-signin-button">Sign In</a>
    </div>
  </header>`;

  const loginButton = document.querySelector(".ev-login-button");
  loginButton.addEventListener("click", loginFormFunction);

  const signinButton = document.querySelector(".ev-signin-button");
  signinButton.addEventListener("click", signinFormFunction);
};