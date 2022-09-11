const open = document.getElementById("open");
const close = document.getElementById("close");
const containner = document.querySelector(".container");

open.addEventListener("click", () => containner.classList.add("show-nav"));
close.addEventListener("click", () => containner.classList.remove("show-nav"));
