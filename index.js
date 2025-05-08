function makeItDark() {
  let body = document.querySelector("body");
  body.classList.toggle("dark-configuration");
}
let darkButton = document.querySelector(".dark-theme");
darkButton.addEventListener("click", makeItDark);
