const ratingsContainer = document.querySelector(".ratings-container");
const ratings = document.querySelectorAll(".rating");
const panel = document.querySelector("#panel");
const send = document.querySelector("#send");
let feedback = "Neutral";

let active = document.querySelector(".active");

const removeActive = () => {
  active.classList.remove("active");
  active = null;
};

ratings.forEach((rating) => {
  rating.addEventListener("click", () => {
    removeActive();
    feedback = rating.children[1].innerHTML;
    rating.classList.add("active");
    active = rating;
  });
});

send.addEventListener("click", () => {
  removeActive();
  panel.innerHTML = `
  <p class="heart">💖</p>
  <strong>Thank You!></strong>
  <br>
  <strong>Feedback: ${feedback}</strong>
  `;
});
