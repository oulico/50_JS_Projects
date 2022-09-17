const toggleBtns = document.querySelectorAll(".faq-toggle");

toggleBtns.forEach((item) => {
  item.addEventListener("click", () =>
    item.parentNode.classList.toggle("active")
  );
});
