// --- Interfaces ---
// --- Classes ---
/** Task manager class */
var TaskManager = /** @class */ (function () {
    function TaskManager() {
        // --- Fields ---
        this.tasks = []; // Array of tasks (strings)
    }
    // --- Functions ---
    /** Adds a task to the tasks list and returns the new length */
    TaskManager.prototype.addTask = function (task) {
        // Add task to array
        this.tasks.push(task);
        // Log confirmation message
        console.log("Task \"" + task + "\" inserted in the list");
        // Return current length
        return this.tasks.length;
    };
    /** Prints all tasks in the console */
    TaskManager.prototype.listAllTasks = function () {
        // Print header
        console.log("Listing all tasks:");
        // Iterate through each task and print it
        // I won't copypaste this complains
        this.tasks.forEach(function (t, i) {
            console.log("\t" + (i + 1) + ". " + t); // Print out
        });
    };
    /** Deletes a task from the tasks list and returns the new length */
    TaskManager.prototype.deleteTask = function (task) {
        // Find the index of the task
        var index = this.tasks.indexOf(task);
        // Check if task was found
        if (index > -1) {
            // Remove task from array
            this.tasks.splice(index, 1);
            console.log("Task \"" + task + "\" removed from the list");
        }
        else {
            // Task not found
            console.log("Task \"" + task + "\" not found in the list");
        }
        // Return current length
        return this.tasks.length;
    };
    return TaskManager;
}());
// --- Execution ---
// Create an instance of the manager and use it
var manager = new TaskManager();
console.log("Number of tasks: " + manager.addTask("Wake up"));
console.log("Number of tasks: " + manager.addTask("Enter the VM"));
console.log("Number of tasks: " + manager.addTask("Complete the lab"));
console.log("");
manager.listAllTasks();
console.log("");
console.log("Number of tasks: " + manager.deleteTask("Enter the VM"));
console.log("");
manager.listAllTasks();
