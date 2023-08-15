const taskInput = document.getElementById("task");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");
const popup = document.getElementById("popup");

addTaskButton.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const newTask = document.createElement("li");
    newTask.innerHTML = `
      <span>${taskText}</span>
      <button class="deleteTask">Delete</button>
    `;
    taskList.appendChild(newTask);
    taskInput.value = "";

    showPopup("Task added!");
  }
});

taskList.addEventListener("click", (event) => {
  if (event.target.classList.contains("deleteTask")) {
    const taskItem = event.target.parentElement;
    taskList.removeChild(taskItem);
    showPopup("Task removed!");
  }
});

function showPopup(message) {
  popup.textContent = message;
  popup.classList.add("show");
  setTimeout(() => {
    popup.classList.remove("show");
  }, 2000);
}
