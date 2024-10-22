// https://www.w3schools.com/jsref/obj_keyboardevent.asp
const input = document.querySelector("input");

// input.addEventListener("keypress", () => {
//   console.log("Key pressed");
// });

// input.addEventListener("keydown", () => {
//   console.log("Key down");
// });

// input.addEventListener("keyup", () => {
//   console.log("Key up");
// });

// USEFUL PROPERTIES & METHODS
input.addEventListener("keydown", (e) => {
  console.log(e.code);
  console.log(e.ctrlKey);
  console.log(e.shiftKey);
});
