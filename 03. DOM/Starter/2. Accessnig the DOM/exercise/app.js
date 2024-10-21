// 1. Select element h4 which holds text of "Red" by using getElementsByTagName
// 2. Select div with the class of "green" which holds text (Green) by using getElementsByTagName
// 3. Select div with the ID of blue which holds the text "Blue" by using getElementsByClassName
// 4. Select div which has the class & Id of "yello" by using querySelector()
// 5. Select all the elements which has the class of "teal" by using querySelectorAll

const h4 = document.getElementsByTagName("h4")[0];
const greenDiv = document.getElementsByClassName("green");
const blueDiv = document.getElementById("blue");
const yellowDiv = document.querySelector("#yellow.yellow");
const teal = document.querySelectorAll(".teal");

console.log(h4);
console.log(greenDiv);
console.log(blueDiv);
console.log(yellowDiv);
console.log(teal);
