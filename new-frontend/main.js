import { FooterContainer } from "./components/Footer/0-FooterContainer/FooterContainer";
import { Footer } from "./components/Footer/1-Footer/Footer";
import { HeaderContainer } from "./components/Header/0-HeaderContainer/HeaderContainer";
import { TopHeader } from "./components/Header/1-TopHeader/TopHeader";
import { MiddleHeader } from "./components/Header/2-MiddleHeader/MiddleHeader";
import { BottomHeader } from "./components/Header/3-BottomHeader/BottomHeader";
import { MainContainer } from "./components/Main/0-MainContainer/MainContainer";
import { MainSectionOne } from "./components/Main/1-MainSectionOne/MainSectionOne";
import { MainSectionTwo } from "./components/Main/2-MainSectionTwo/MainSectionTwo";
import { printEvents } from "./services/api/getAllEvents";
import "./style.css";

const printHeader = () => {
  HeaderContainer();
  TopHeader();
  MiddleHeader();
  BottomHeader();
};
const printMain = () => {
  MainContainer();
  MainSectionOne();
  MainSectionTwo();
  printEvents();
};
const printFooter = () => {
  FooterContainer();
  Footer();
};

export const printHome = () => {
  const app = document.querySelector("#app");
  app.innerHTML = `
  <div class="delay-time-container">
    <h2 class="delay-time-title">Loading...</h2>
  </div>
  `;

  setTimeout(() => {
    app.innerHTML = "";
    printHeader();
    printMain();
    printFooter();
  }, 400);
};

printHome();
