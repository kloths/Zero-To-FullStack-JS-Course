const form = document.querySelector("form");
const input = document.querySelector("input");
const todos = document.querySelector(".todos");

const createTodo = () => {
  const todo = document.createElement("div");
  todo.classList.add("todo");

  const text = document.createElement("span");
  text.innerText = input.value;
  todo.appendChild(text);

  const close = document.createElement("span");
  close.innerHTML = "&times;";
  close.classList.add("delete");
  close.addEventListener("click", () => {
    todo.remove();
  });
  todo.appendChild(close);
  todos.appendChild(todo);
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!input.value.trim()) return;
  createTodo();
  input.value = "";
});
