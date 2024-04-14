import "./style.css";
import Task from "./Task";
import Project from "./Project";
import ProjectList from "./ProjectList";
import View from "./View";

const testTask = Task({
  title: "Test Task",
  description: "Testing My Task Object",
  dueDate: undefined,
  priority: "Normal",
  notes: "",
});

const projectList = ProjectList();

const defaultProject = Project("Default");
defaultProject.addTask(testTask.getTask());
console.log(defaultProject.getProject());
projectList.addProject(defaultProject.getProject());

console.log(projectList.getProjects());

const testProject = Project("Test Project Name");
testProject.addTask(testTask.getTask());

testTask.editTask({ title: "New Title" });

//testProject.deleteTask(testTask.getTaskId());

console.log(testProject.getTasks());

const view = View();
view.updateView();
