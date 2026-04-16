document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("task-form");
const input = document.getElementById("new-task");
const list = document.getElementById("task-list");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const task = input.value.trim();

    // IMPORTANT: ensure test sees text
    const li = document.createElement("li");
    li.textContent = task;

    list.appendChild(li);

    input.value = "";
});// your code here
});
