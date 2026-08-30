document.getElementById("year").textContent = new Date().getFullYear();

const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menu?.addEventListener("click", () => {
  nav.style.display = nav.style.display === "flex" ? "" : "flex";

  if (nav.style.display === "flex") {
    nav.style.position = "absolute";
    nav.style.top = "82px";
    nav.style.right = "6%";
    nav.style.flexDirection = "column";
    nav.style.alignItems = "stretch";
    nav.style.padding = "20px";
    nav.style.background = "#090909";
  }
});

document.getElementById("contactForm")?.addEventListener("submit", (e) => {
  e.preventDefault();

  document.getElementById("formSuccess").hidden = false;
});