import "./Footer.css";
import { AdminPanel } from "../../AdminPanel/adminPanel";

export const Footer = () => {
  const footer = document.querySelector("footer");

  const userId = localStorage.getItem("userID");
  const userRol = localStorage.getItem("rol");

  const copyrightDiv = document.createElement("div");
  copyrightDiv.classList.add("ev-copyright");
  const copyrightParagraph = document.createElement("p");
  copyrightParagraph.textContent = "© Even-TS";
  copyrightDiv.appendChild(copyrightParagraph);

  footer.appendChild(copyrightDiv);

  if (userId && userRol === "isAdmin") {
    const adminPanelDiv = document.createElement("div");
    adminPanelDiv.classList.add("ev-admin-panel");
    const adminPanelLink = document.createElement("a");
    adminPanelLink.href = "#";
    adminPanelLink.textContent = "Admin Panel";
    adminPanelDiv.appendChild(adminPanelLink);

    adminPanelLink.addEventListener("click", AdminPanel);
    footer.appendChild(adminPanelDiv);
  }
};
