import "./style.css";
import Task from "./Task";
import Project from "./Project";
import View from "./View";

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

const view = View();
view.updateView();
