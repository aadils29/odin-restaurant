// src/index.js
import "./styles.css";
import { loadHome } from "./pageLoad";
import { loadMenu } from "./menu";
import { loadContact } from "./contact";

function clearContent() {
  const content = document.getElementById("content");
  if (content) content.innerHTML = "";
}

document.addEventListener("DOMContentLoaded", () => {
  loadHome();

  const btnHome = document.getElementById("tab-home");
  const btnMenu = document.getElementById("tab-menu");
  const btnAbout = document.getElementById("tab-about");

  if (btnHome)
    btnHome.addEventListener("click", () => {
      clearContent();
      loadHome();
    });

  if (btnMenu)
    btnMenu.addEventListener("click", () => {
      clearContent();
      loadMenu();
    });

  if (btnAbout)
    btnAbout.addEventListener("click", () => {
      clearContent();
      loadContact();
    });
});
