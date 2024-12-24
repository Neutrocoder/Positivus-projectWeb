document.addEventListener("DOMContentLoaded", () => {
  const toogleButton = document.getElementById("toogle");
  const navMenu = document.querySelector(".header__nav");
  const icon = toogleButton.querySelector("i");
  //funcion para menu de hamburguesa

  toogleButton.addEventListener("click", () => {
    if (navMenu.classList.contains("active")) {
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
      navMenu.classList.add("clossing");
      setTimeout(() => {
        navMenu.classList.remove("active", "clossing");
        navMenu.style.display = "none";
      }, 500);
    } else {
      navMenu.style.display = "flex";
      setTimeout(() => {
        navMenu.classList.add("active");
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
      }, 10);
    }
  });
});
