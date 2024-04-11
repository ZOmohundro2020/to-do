import "./style.css";
import Task from "./task";

console.log("hello world");

const newDiv = document.createElement("div");
const newPara = document.createElement("p");
newPara.textContent = "hello world";

newDiv.appendChild(newPara);
document.body.appendChild(newDiv);

const testTask = Task("Test Task","Testing My Task Object","None","Normal","");

console.log(testTask);


