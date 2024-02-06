import "./topHeader.css";

export const TopHeader = () => {
  const app = document.querySelector("#app");
  app.innerHTML += `<div class="ev-top-header-container">
    <p>Hello</p><span class="username">Guest</span>
  </div>`;
};
