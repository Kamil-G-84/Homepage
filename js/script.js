{
  const welcome = () => {
    console.log("Hello every developer, if you are reading this then the function is working properly 😀")
  }

  const onChangeBackgroundClick = () => {
    const body = document.body;
    const themeName = document.querySelector(".js-changeName");

    body.classList.toggle("dark");
    themeName.innerText = body.classList.contains("dark") ? "stronę" : "cel";
  };

  const init = () => {
    const buttonChangeColor = document.querySelector(".js-buttonChangeColor");
    buttonChangeColor.addEventListener("click", onChangeBackgroundClick);

    welcome();
  }

  init();
};