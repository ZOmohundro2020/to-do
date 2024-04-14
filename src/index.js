import "./style.css";
import Task from "./Task";
import Project from "./Project";

const newDiv = document.createElement("div");
const newPara = document.createElement("p");
newPara.textContent = "hello world";

newDiv.appendChild(newPara);
document.body.appendChild(newDiv);

const testTask = Task({
  title: "Test Task",
  description: "Testing My Task Object",
  dueDate: undefined,
  priority: "Normal",
  notes: "",
});

const testProject = Project("Test Project Name");
testProject.addTask(testTask.getTask());

testTask.editTask({ title: "New Title" });

//testProject.deleteTask(testTask.getTaskId());

console.log(testProject.getTasks());
