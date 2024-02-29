import "./adminPanel.css";
import { logoAdminPanel } from "../../data/data";
import { printAllUsers } from "../../services/api/getAllUsers";
import { printAllAttendees } from "../../services/api/getAllAttendees";

export const AdminPanel = () => {
  const main = document.querySelector("main");
  main.innerHTML = "";

  const adminContainer = document.createElement("div");
  adminContainer.classList.add("admin-container");

  const allUsersDiv = document.createElement("div");
  allUsersDiv.classList.add("all-users");
  const allUsersImg = document.createElement("img");
  allUsersImg.src = logoAdminPanel;
  allUsersImg.alt = "Users";
  const allUsersParagraph = document.createElement("p");
  allUsersParagraph.textContent = "All Users";
  allUsersDiv.appendChild(allUsersImg);
  allUsersDiv.appendChild(allUsersParagraph);

  const allAttendeesDiv = document.createElement("div");
  allAttendeesDiv.classList.add("all-attendees");
  const allAttendeesImg = document.createElement("img");
  allAttendeesImg.src = logoAdminPanel;
  allAttendeesImg.alt = "Attendees";
  const allAttendeesParagraph = document.createElement("p");
  allAttendeesParagraph.textContent = "All Attendees";
  allAttendeesDiv.appendChild(allAttendeesImg);
  allAttendeesDiv.appendChild(allAttendeesParagraph);

  adminContainer.appendChild(allUsersDiv);
  adminContainer.appendChild(allAttendeesDiv);

  main.appendChild(adminContainer);

  const allUsers = document.querySelector(".all-users");
  allUsers.addEventListener("click", printAllUsers);

  const allAttendees = document.querySelector(".all-attendees");
  allAttendees.addEventListener("click", printAllAttendees);
};
