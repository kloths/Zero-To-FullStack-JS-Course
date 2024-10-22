const result = document.querySelector(".result");
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  const num1 = parseFloat(document.querySelector(".num1").value);
  const num2 = parseFloat(document.querySelector(".num2").value);
  const operator = document.querySelector("#selectOp").value;
  switch (operator) {
    case "plus":
      result.innerHTML = num1 + num2;
      break;
    case "min":
      result.innerHTML = num1 - num2;
      break;
    case "dev":
      result.innerHTML = num1 / num2;
      break;
    case "multi":
      result.innerHTML = num1 * num2;
      break;
    default:
      break;
  }
});
