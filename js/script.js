{
  const = welcome () => {
    console.log("Hello every developer, if you are reading this then the function is working properly 😀")
  }

  const onChangeBackgroundClick = () => {

    body.classList.toggle("dark");
    themeName.innerText = body.classList.contains("dark") ? "stronę" : "cel";
  }

  welcome();

  let button = document.querySelector(".js-buttonChangeColor");
  let body = document.body;
  let themeName = document.querySelector(".js-changeName");

  button.addEventListener("click", onChangeBackgroundClick), () => {

  };
}