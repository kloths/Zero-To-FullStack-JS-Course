// href
// value
// type
// getAttribute(attrName)
// setAttribute(attrName, value)

const a = document.querySelector("a");
const input = document.querySelector("input");

// Getting attributes
// console.log(a.href);
// console.log(input.value);
// console.log(input.type);

// Setting attributes
// a.href = "https://www.example.com";
// console.log(input.value = "Hi");
// console.log(input.type = "password");
// console.log(input.placeholder = "Enter your password");

console.log(input.getAttribute("type"));
console.log(a.getAttribute("href"));

a.setAttribute("href", "https://www.example.com");
input.setAttribute("type", "password");
input.setAttribute("placeholder", "Enter your password");
