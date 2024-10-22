const container = document.querySelector(".content-container");
const btns = document.querySelectorAll(".btn");

const colors = new Set();

btns.forEach((btn) => {
  colors.add(btn.value);
  btn.addEventListener("click", () => {
    const containsColor = container.classList.contains(btn.value);
    container.classList.remove(...colors);
    if (containsColor) return;
    container.classList.toggle(btn.value);
  });
});

console.log(colors);