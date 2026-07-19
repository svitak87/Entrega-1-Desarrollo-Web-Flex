const btn = document.getElementById("toggle");

// Cargar tema guardado
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

// Toggle
btn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});