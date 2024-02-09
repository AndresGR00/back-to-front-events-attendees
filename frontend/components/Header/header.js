import "./header.css";
import { logo } from "../../data/data";
import { RegisterForm } from "../RegisterForm/registerForm";
import { LoginForm } from "../LoginForm/loginForm";
import { printHome } from "../../main";

export const Header = () => {
  const app = document.querySelector("#app");

  const userName = localStorage.getItem("userName");

  let headerButtonsHTML = "";
  if (!userName) {
    headerButtonsHTML = `
      <div class="ev-header-buttons">
        <a href="#" class="ev-login-button">Login</a>
        <a href="#" class="ev-signin-button">Sign In</a>
      </div>
    `;
  } else {
    headerButtonsHTML = `
      <div class="ev-header-buttons">
        <a href="#" class="ev-logout-button">Logout</a>
      </div>
    `;
  }

  app.innerHTML += `<header>
    <div class="ev-logo-container">
      <a href="#" class="ev-logo-anchor">
        <img src="${logo}" alt="Even-TS logo" class="ev-logo-img">
      </a>
    </div>
    ${headerButtonsHTML}
  </header>`;

  const logOut = () => {
    localStorage.clear();
    printHome();
  };

  const logoutButton = document.querySelector(".ev-logout-button");
  if (logoutButton) {
    logoutButton.addEventListener("click", logOut);
  }

  const loginButton = document.querySelector(".ev-login-button");
  if (loginButton) {
    loginButton.addEventListener("click", LoginForm);
  }

  const signinButton = document.querySelector(".ev-signin-button");
  if (signinButton) {
    signinButton.addEventListener("click", RegisterForm);
  }

  const logoButton = document.querySelector(".ev-logo-anchor");
  if (logoButton) {
    logoButton.addEventListener("click", printHome);
  }
};
