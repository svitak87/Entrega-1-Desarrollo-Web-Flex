const btn = document.getElementById("toggle");
const icon = document.getElementById("theme-icon");
const assetsPath = window.location.pathname.includes("/pages/")
  ? "../assets/"
  : "./assets/";

// Cargar tema
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

updateIcon();

btn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }

  updateIcon();
});

function updateIcon() {
  if (document.body.classList.contains("dark")) {
    icon.src = `${assetsPath}light-icon.png`;
  } else {
    icon.src = `${assetsPath}dark-icon.png`;
  }
}