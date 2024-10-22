// https://www.w3schools.com/jsref/obj_mouseevent.asp

// 1. click
// 2. contextmenu
// 3. dblclick
// 4. mousedown
// 5. mouseenter
// 6. mouseleave
// 7. mousemove
// 8. mouseout
// 9. mouseover
// 10. mouseup

let one = document.querySelector(".click");
let two = document.querySelector(".contextmenu");
let three = document.querySelector(".dblclick");
let four = document.querySelector(".mousedown");
let five = document.querySelector(".mouseenter");
let six = document.querySelector(".mouseleave");
let seven = document.querySelector(".mousemove");
let eight = document.querySelector(".mouseout");
let nine = document.querySelector(".mouseover");
let ten = document.querySelector(".mouseup");

one.addEventListener("click", (e) => {
  console.log("Clicked");
  console.log(e);
});

two.addEventListener("contextmenu", (e) => {
  console.log("Open context menu");
  console.log(e);
});

three.addEventListener("dblclick", (e) => {
  console.log("Double clicked");
  console.log(e);
});

four.addEventListener("mousedown", (e) => {
  console.log("Mouse button pressed");
  console.log(e);
});

five.addEventListener("mouseenter", (e) => {
  console.log("Mouse entered");
  console.log(e);
});

six.addEventListener("mouseleave", (e) => {
  console.log("Mouse left");
  console.log(e);
});

seven.addEventListener("mousemove", (e) => {
  console.log("Mouse moved");
  console.log(e);
});

eight.addEventListener("mouseout", (e) => {
  console.log("Mouse left the element");
  console.log(e);
});

nine.addEventListener("mouseover", (e) => {
  console.log("Mouse entered the element");
  console.log(e);
});

ten.addEventListener("mouseup", (e) => {
  console.log("Mouse button released");
  console.log(e);
});
