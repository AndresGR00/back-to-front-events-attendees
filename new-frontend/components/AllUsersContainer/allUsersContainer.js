import "./allUsersContainer.css";

export const AllUsersContainer = () => {
  const main = document.querySelector("main");
  main.innerHTML = "";

  const allUsersContainer = document.createElement("div");
  allUsersContainer.className = "ev-allusers-container";

  main.appendChild(allUsersContainer);
};
