// JSL03 — Console Task Manager

// ---------------------------
// P2.21: Start with 3 sample tasks stored as objects in an array
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

// Log initial tasks so we can review in the console
console.log("All Tasks:", tasks);

// ---------------------------
// P2.23: Unique incremental IDs for new tasks
// Track the highest used id so new tasks get unique incremental IDs
// ---------------------------
let lastId = tasks.length; // starts at 3 because there are 3 initial tasks

// ---------------------------
// P2.22 + P2.24: Add up to 3 tasks via prompts with status validation
// ---------------------------
for (let i = 0; i < 3; i++) {
  let title = prompt("Enter task title:");
  let description = prompt("Enter task description:");

  // Ask for status and validate allowed values
  let status = prompt("Enter task status (todo, doing, done):");
  if (status) status = status.toLowerCase();

  // Keep asking until the user gives a valid status
  while (status !== "todo" && status !== "doing" && status !== "done") {
    alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
    status = prompt("Enter task status (todo, doing, done):");
    if (status) status = status.toLowerCase();
  }

  // Increment the id first, then assign so it stays unique and increasing
  lastId++;

  // Create and push the new task with the correct unique id
  tasks.push({
    id: lastId,
    title: title,
    description: description,
    status: status,
  });
}

// Log again so we can see the newly added tasks with proper IDs and valid statuses
console.log("All Tasks:", tasks);
