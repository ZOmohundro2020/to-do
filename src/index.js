import "./style.css";

console.log("hello world");

const newDiv = document.createElement("div");
const newPara = document.createElement("p");
newPara.textContent = "hello world";

newDiv.appendChild(newPara);
document.body.appendChild(newDiv);
