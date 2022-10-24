const iconMenu = document.querySelector("#menu__icon"),
  menu = document.querySelector("#nav");

iconMenu.addEventListener("click", (e) => {
  menu.classList.toggle("active");
});
