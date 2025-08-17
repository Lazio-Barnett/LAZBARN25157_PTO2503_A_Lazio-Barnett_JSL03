// JSL03 — Console Task Manager (P2.21)
// Store tasks (title + status) as objects in an array and log them.

// An array to hold all tasks as objects
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

// Log tasks so we can review in the console
console.log("All Tasks:", tasks);

// ---------------------------
// P2.23: Unique incremental IDs for new tasks
// Track the highest used id so new tasks get unique incremental IDs
// ---------------------------
let lastId = tasks.length; // starts at 3 because there are 3 initial tasks

// ---------------------------
// P2.22: Allow user to add up to 3 new tasks
// (Beginner version, no validation yet — that’s P2.24)
// ---------------------------
for (let i = 0; i < 3; i++) {
  let title = prompt("Enter task title:");
  let description = prompt("Enter task description:");
  let status = prompt("Enter task status (todo, doing, done):");
  // Normalize status casing now; validation will come in P2.24
  if (status) {
    status = status.toLowerCase();
  }

  // Create and push the new task. For now we assign id by length+1.
  // In P2.23 we’ll switch to a proper incremental id tracker.
  tasks.push({
    id: tasks.length + 1,
    title: title,
    description: description,
    status: status,
  });
}

// Log again so we can see the newly added tasks
console.log("All Tasks:", tasks);
