import "./style.css";
import Task from "./Task";
import Project from "./Project";

console.log("hello world");

const newDiv = document.createElement("div");
const newPara = document.createElement("p");
newPara.textContent = "hello world";

newDiv.appendChild(newPara);
document.body.appendChild(newDiv);

const testTask = Task(
  "Test Task",
  "Testing My Task Object",
  "None",
  "Normal",
  ""
);

console.log(testTask);

const testProject = Project({ name: "Test Project Name" });
console.log(testProject.getProjectName());
