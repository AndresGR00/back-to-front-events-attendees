import "./MiddleHeader.css";
import { logo } from "../../../data/data";
import { printHome } from '../../../main'
import { LoginForm } from '../../LoginForm/loginForm'
import { RegisterForm } from '../../RegisterForm/registerForm'

const addEventListeners = () => {
    
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

export const MiddleHeader = () => {
  const header = document.querySelector("header");
  const containerMiddleHeader = document.createElement("div");
  containerMiddleHeader.className = "ev-container-middle-header";

  const userName = localStorage.getItem("userName");

  const headerButtonsHTML = `
      <div class="ev-header-buttons">
        ${
          !userName
            ? `
          <a href="#" class="ev-login-button">Login</a>
          <a href="#" class="ev-signin-button">Sign In</a>
        `
            : `
          <a href="#" class="ev-logout-button">Logout</a>
        `
        }
      </div>`;

  const logoContainer = document.createElement("div");
  logoContainer.classList.add("ev-logo-container");
  const logoAnchor = document.createElement("a");
  logoAnchor.href = "#";
  logoAnchor.classList.add("ev-logo-anchor");
  const logoImg = document.createElement("img");
  logoImg.src = logo;
  logoImg.alt = "Even-TS logo";
  logoImg.classList.add("ev-logo-img");
  logoAnchor.appendChild(logoImg);
  logoContainer.appendChild(logoAnchor);

  const headerButtonsContainer = document.createElement("div");
  headerButtonsContainer.innerHTML = headerButtonsHTML;
  headerButtonsContainer.className = 'ev-header-buttons-container'

  containerMiddleHeader.appendChild(logoContainer);
  containerMiddleHeader.appendChild(headerButtonsContainer);

  header.appendChild(containerMiddleHeader);

  addEventListeners();
};
