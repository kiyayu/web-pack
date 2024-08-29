import loadHome from "./modules/home.js";
import loadMenu from "./modules/menu.js";
import loadContact from "./modules/contact.js";
import './style.css'
// Initial load
document.addEventListener("DOMContentLoaded", () => {
  const contentDiv = document.getElementById("content");

  // Load initial content
  contentDiv.appendChild(loadHome());

  // Event listeners for buttons
  document.getElementById("home-btn").addEventListener("click", () => {
    contentDiv.innerHTML = "";
    contentDiv.appendChild(loadHome());
  });

  document.getElementById("menu-btn").addEventListener("click", () => {
    contentDiv.innerHTML = "";
    contentDiv.appendChild(loadMenu());
  });

  document.getElementById("contact-btn").addEventListener("click", () => {
    contentDiv.innerHTML = "";
    contentDiv.appendChild(loadContact());
  });
});
