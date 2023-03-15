/* CHALLENGE
 *
 * In this activity we are going to practice using simple JavaScript objects
 * while refactoring a Todo List command-line app.
 *
 * The code below is written in procedural format. Convert it to Object-oriented
 * programming style.
 */


/* // TODO LIST WRITTEN IN PROCEDURAL STYLE

Arrays to keep track of each task's state
const taskTitles = [];
const taskComplete = [];

// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title) {
  taskTitles.push(title);
  taskComplete.push(false);
}

// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
function completeTask(taskIndex) {
  taskComplete[taskIndex] = true;
}

// Print the state of a task to the console in a nice readable way
function logTaskState(taskIndex) {
  const title = taskTitles[taskIndex];
  const complete = taskComplete[taskIndex];
  console.log(`${title} has${complete ? " " : " not "}been completed`);
}


// DRIVER CODE BELOW

newTask("Clean Cat Litter"); // task 0
newTask("Do Laundry"); // task 1

logTaskState(0); // Clean Cat Litter has not been completed
completeTask(0);
logTaskState(0); // Clean Cat Litter has been completed

*/


// TODO LIST APP WRITTEN IN OOP STYLE:

// Calling this function instantiates a new Task object.
function createTask(title, description) {

  // Initialize a new Task object and fill in its details:
  const task = {

    // PROPERTIES:
    title: title,
    description: description,
    complete: false,


    // METHODS:
    logState: function() {

      console.log(`${this.title} has${this.complete ? " " : " not"} been completed.`);

    },


    markCompleted: function() {
      this.complete = true;
    }

  };


  return task;
}



// DRIVER CODE BELOW:
const task1 = createTask("Clean Cat Litter", "Take all the 💩 out of the litter box!");
const task2 = createTask("Do Laundry", "😨");
const tasks = [task1, task2];



// TEST CODE:
// console.log(tasks);

// Clean Cat Litter has not been completed.
task1.logState();

task1.markCompleted();
// Clean Cat Litter has been completed.
task1.logState();
