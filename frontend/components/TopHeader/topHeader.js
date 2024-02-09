import "./topHeader.css";

export const TopHeader = () => {
  const app = document.querySelector("#app");
  const userName = localStorage.getItem("userName");

  if (userName) { 
    app.innerHTML += `<div class="ev-top-header-container">
      <p>Hello</p><span class="username">${userName}</span>
    </div>`;
  } else {
    app.innerHTML += `<div class="ev-top-header-container">
      <p>Hello</p><span class="username">Guest</span>
    </div>`;
  }
};
