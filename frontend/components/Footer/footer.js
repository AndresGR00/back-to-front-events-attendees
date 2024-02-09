import { AdminPanel } from "../AdminPanel/adminPanel";
import "./footer.css";

export const Footer = () => {
  const app = document.querySelector("#app");
  const footer = document.createElement("footer");

  const copyrightDiv = document.createElement("div");
  copyrightDiv.classList.add("ev-copyright");
  const copyrightParagraph = document.createElement("p");
  copyrightParagraph.textContent = "© Even-TS";
  copyrightDiv.appendChild(copyrightParagraph);

  const adminPanelDiv = document.createElement("div");
  adminPanelDiv.classList.add("ev-admin-panel");
  const adminPanelLink = document.createElement("a");
  adminPanelLink.href = "#";
  adminPanelLink.textContent = "Admin Panel";
  adminPanelDiv.appendChild(adminPanelLink);

  footer.appendChild(copyrightDiv);
  footer.appendChild(adminPanelDiv);

  const userId = localStorage.getItem("userID");
  const userRol = localStorage.getItem("rol");
  
  adminPanelLink.addEventListener("click", () => {
    if (!userId) {
      alert("You need to be logged in");
    } else if (userRol !== "isAdmin") {
      alert("You need to be an admin");
    } else {
      AdminPanel();
    }
  });

  app.appendChild(footer);
};
