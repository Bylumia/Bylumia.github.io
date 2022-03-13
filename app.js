const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];
const links = document.querySelectorAll("a");

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

// dark mode

const enableDarkMode = () => {
  document.body.classList.add("darkmode");
  links.forEach((link, index) => {
    link.classList.add("darkmodeLink");
  });
  localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
  document.body.classList.remove("darkmode");
  links.forEach((link, index) => {
    link.classList.remove("darkmodeLink");
  });
  localStorage.setItem("darkMode", null);
};

let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector("#darkBtn");

if (darkMode === "enabled") {
  enableDarkMode();
}

darkModeToggle.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");
  if (darkMode !== "enabled") {
    enableDarkMode();
    console.log(darkMode);
  } else {
    disableDarkMode();
    console.log(darkMode);
  }
});

var slideUp = {
  distance: '150%',
  origin: 'left',
  opacity: null,
};

ScrollReveal().reveal('section', slideUp);
