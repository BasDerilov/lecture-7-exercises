import { TaskCard } from "./task.js";

const createBtn = document.getElementById("create-task-btn");
const deleteAllBtn = document.getElementById("remove-all-btn");
const createTaskTitleElement = document.getElementById("task-title-creator") as HTMLTextAreaElement;
const createTaskContentElement = document.getElementById(
  "task-content-creator"
) as HTMLTextAreaElement;
const cardContainer = document.getElementById("cardContainer");
const completedSpan = document.getElementById("completed-tasks");
const uncompletedSpan = document.getElementById("uncompleted-tasks");

createBtn.addEventListener("click", () => {
  cardContainer.appendChild(
    new TaskCard(createTaskTitleElement.value, createTaskContentElement.value)
  );
});

document.addEventListener("click", () => {
  completedSpan.textContent = document.querySelectorAll(".completed").length.toString();
  uncompletedSpan.textContent = document.querySelectorAll(".uncompleted").length.toString();
});

deleteAllBtn.addEventListener("click", () => {
  location.reload();
});
