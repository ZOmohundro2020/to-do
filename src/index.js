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

const testTask2 = Task({
  title: "Task 2",
  description: "Still Testing",
  dueDate: undefined,
  priority: "Normal",
  notes: "",
});

const funTask = Task({
  title: "A fun Task",
  description: "Play games!",
  dueDate: undefined,
  priority: "Normal",
  notes: "",
});

const projectList = ProjectList();

const defaultProject = Project("Default");

// most current implementation of adding a task
const taskToAdd = testTask.getTask();
const taskOwner = defaultProject.addTask(taskToAdd);
testTask.setTaskOwner(taskOwner);

// older
defaultProject.addTask(testTask2.getTask());

const funProject = Project("Fun Project");
//older
funProject.addTask(funTask.getTask());

projectList.addProject(defaultProject.getProject());
projectList.addProject(funProject.getProject());

const view = View();

console.log(projectList.getProjects());
view.updateProjectView(projectList.getProjects());
//view.updateTaskView(defaultProject.getProject());
