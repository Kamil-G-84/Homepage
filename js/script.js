let button = document.querySelector(".js-buttonChangeColor");
let body = document.body;
let themeName = document.querySelector(".js-changeName");

button.addEventListener("click", () => {
  body.classList.toggle("dark");

  themeName.innerText = body.classList.contains("dark") ? "stronę" : "cel";
});