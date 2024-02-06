import "./bottomHeader.css";

const postEventFunction = () => {
  console.log("Crear un evento");
};

export const BottomHeader = () => {
  const app = document.querySelector("#app");
  const bottomHeaderContainer = document.createElement("div");
  bottomHeaderContainer.classList.add("ev-bottom-header-container");
  const paragraph = document.createElement("p");
  paragraph.textContent = "Explore all our events or ";
  
  const link = document.createElement("a");
  link.href = "#";
  link.classList.add("ev-post-event");
  link.textContent = "create a new one";
  link.addEventListener("click", postEventFunction);
  
  paragraph.appendChild(link);
  bottomHeaderContainer.appendChild(paragraph);
  app.appendChild(bottomHeaderContainer);
};
