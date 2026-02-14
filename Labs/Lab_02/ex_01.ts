// --- Functions ---

/** Adds a task to the tasks list and returns the new length */
function addTask(task: string): number
{
    // Add task to array
    tasks.push(task);
    
    // Log confirmation message
    console.log("Task \"" + task + "\" inserted in the list");
    
    // Return current length
    return tasks.length;
}

/** Prints all tasks in the console */
function listAllTasks(): void
{
    // Print header
    console.log("Listing all tasks:");
    
    // Iterate through each task and print it
	// This arrow function is still confuses me...
    tasks.forEach((t, i) => 
    {
        console.log("\t" + (i + 1) + ". " + t); // Print out
    });
}

/** Deletes a task from the tasks list and returns the new length */
function deleteTask(task: string): number
{
    // Find the index of the task
    const index = tasks.indexOf(task);
    
    // Check if task was found
    if(index > -1)
    {
        // Remove task from array
        tasks.splice(index, 1);
        console.log("Task \"" + task + "\" removed from the list");
    }
    else
    {
        // Task not found
        console.log("Task \"" + task + "\" not found in the list");
    }
    
    // Return current length
    return tasks.length;
}

// --- Execution ---
let tasks: string[] = []; // Array of tasks (strings)

console.log("Number of tasks: " + addTask("Wake up"));
console.log("Number of tasks: " + addTask("Enter the VM"));
console.log("Number of tasks: " + addTask("Complete the lab"));
console.log("");
listAllTasks();
console.log("");
console.log("Number of tasks: " + deleteTask("Enter the VM"));
console.log("");
listAllTasks();