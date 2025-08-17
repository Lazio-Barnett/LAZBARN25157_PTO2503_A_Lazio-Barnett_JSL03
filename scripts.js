// JSL03 — Console Task Manager

// ---------------------------
// P2.21 — Start with 3 sample task objects in an array
// Each task has: id (number), title (short text), description (details), status ("todo" | "doing" | "done")
// ---------------------------
let tasks = [
  {
    id: 1,
    title: "Launch Epic Career",
    description: "Create a killer Resume",
    status: "todo",
  },
  {
    id: 2,
    title: "Master JavaScript",
    description: "Get comfortable with the fundamentals",
    status: "doing",
  },
  {
    id: 3,
    title: "Contribute to Open Source Projects",
    description: "Gain practical experience and collaborate with others",
    status: "done",
  },
];

// ---------------------------
// P2.27 — log all tasks with a clear label
// console.log prints to the browser console so we can inspect arrays/objects
// ---------------------------
function logAllTasks() {
  console.log("All Tasks:", tasks);
}

// Show the initial seed data in the console
logAllTasks();

// ---------------------------
// P2.23 — Track the highest used id so new tasks get unique incremental IDs
// We start at tasks.length because the data has ids 1..3 (length is 3).
// Every time we add a task, we ++lastId and assign it to the new object.
// ---------------------------
let lastId = tasks.length;

// ---------------------------
// P2.22 + P2.24 + P2.25 + P2.29 — Add up to 3 tasks via prompt(), validate status, and alert on the 3rd
// - prompt() asks the user for text input (blocks until they answer)
// - toLowerCase() makes sure  the status is all lower case regards of the input so we can compare easily
// - while (...) repeats until the entered status is one of the allowed values
// - tasks.push(obj) appends a new object to the end of the tasks array
// - When the 3rd new task is added (taskIndex === 2), we alert the user
// ---------------------------
// taskIndex counts how many new tasks we add in this run (0 → 2)
for (let taskIndex = 0; taskIndex < 3; taskIndex++) {
  // Ask for basic details
  let title = prompt("Enter task title:");
  let description = prompt("Enter task description:");

  // Ask for status and uses the toLowerCase()
  let status = prompt("Enter task status (todo, doing, done):");
  if (status) status = status.toLowerCase();

  // P2.24 — Validate: only accept "todo", "doing", or "done"
  while (status !== "todo" && status !== "doing" && status !== "done") {
    alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
    status = prompt("Enter task status (todo, doing, done):");
    if (status) status = status.toLowerCase();
  }

  // P2.23 — Move the id forward, then assign it to the new task
  lastId = lastId + 1; // same as lastId++

  // Create the new task object using the inputs
  const newTask = {
    id: lastId,
    title: title,
    description: description,
    status: status,
  };

  // Add the new task to the end of the tasks array
  tasks.push(newTask);

  // P2.25 — When the 3rd new task is added (index 2), notify the user
  if (taskIndex === 2) {
    alert(
      "There are enough tasks on your board, please check them in the console"
    );
  }
}

// Show the updated board after adding up to 3 tasks
logAllTasks();

// ---------------------------
// P2.26 + P2.28 — Show only completed tasks (status === "done"), with a clear header
// - Array.filter(callback) creates a new array containing only items where callback returns true
// - We print a header first so the console output is easy to scan (P2.28)
// ---------------------------
function getCompletedTasks() {
  console.log("----- Completed Tasks -----");
  const completed = tasks.filter(function (t) {
    return t.status === "done";
  });
  console.log("Completed Tasks:", completed);
  return completed;
}

// Call so results are visible immediately
getCompletedTasks();

// ---------------------------
// P2.29 + P2.30 — Code clarity & comments
// - Descriptive names: tasks, lastId, logAllTasks, getCompletedTasks, taskIndex
// - Comments explain what each step does using plain language
// ---------------------------
