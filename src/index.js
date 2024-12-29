// src/index.js

document.addEventListener("DOMContentLoaded", () => {
  // Select the form and task list container
  const form = document.getElementById("create-task-form");
  const taskList = document.createElement("ul"); // Create a container for tasks
  document.body.appendChild(taskList); // Append it to the DOM

  // Add event listener to the form
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent default form submission

    // Get the task description from the input field
    const taskDescription = document.getElementById("new-task-description").value;

    if (taskDescription.trim() === "") {
      alert("Task description cannot be empty!");
      return;
    }

    // Create a new list item for the task
    const taskItem = document.createElement("li");
    taskItem.textContent = taskDescription;

    // Add a delete button to the task
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.style.marginLeft = "10px";

    // Delete functionality for the task
    deleteButton.addEventListener("click", () => {
      taskItem.remove();
    });

    // Append the delete button to the task item
    taskItem.appendChild(deleteButton);

    // Append the task item to the task list
    taskList.appendChild(taskItem);

    // Clear the input field
    document.getElementById("new-task-description").value = "";
  });
});

