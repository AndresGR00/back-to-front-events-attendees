import "./header.css";
import { logo } from "../../data/data";
import { RegisterForm } from "../RegisterForm/registerForm";
import { printHome } from "../../main";
import { LoginForm } from "../LoginForm/loginForm";

const sayHello = () => {
  alert("Hello");
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
      <a href="#" class="ev-logout-button">Logout</a>
      <a href="#" class="ev-login-button">Login</a>
      <a href="#" class="ev-signin-button">Sign In</a>
    </div>
  </header>`;

  const logoutButton = document.querySelector('.ev-logout-button');
  logoutButton.addEventListener('click', () => {
    localStorage.clear();
    printHome;
  })

  const loginButton = document.querySelector(".ev-login-button");
  loginButton.addEventListener("click", LoginForm);

  const signinButton = document.querySelector(".ev-signin-button");
  signinButton.addEventListener("click", RegisterForm);

  const logoButton = document.querySelector('.ev-logo-anchor');
  logoButton.addEventListener('click', printHome);
};
