import "./style.css";
import Task from "./Task";
import Project from "./Project";
import ProjectList from "./ProjectList";
import View from "./View";

const testTask = Task({
  title: "Test Task",
  description: "Testing My Task Object",
  dueDate: undefined,
  priority: "medium",
  notes: "",
  completed: false,
});

const testTask2 = Task({
  title: "Task 2",
  description: "Still Testing",
  dueDate: undefined,
  priority: "low",
  notes: "",
  completed: false,
});

const funTask = Task({
  title: "A fun Task",
  description: "Play games!",
  dueDate: undefined,
  priority: "high",
  notes: "",
  completed: false,
});

const projectList = ProjectList();

const defaultProject = Project("Default");
const funProject = Project("Fun Project");

const addTestTask = (task, project) => {
  const taskToAdd = task;
  const taskOwner = project.addTask(taskToAdd);
  task.setTaskOwner(taskOwner);
};

addTestTask(testTask, defaultProject);
addTestTask(testTask2, defaultProject);
addTestTask(funTask, funProject);

projectList.addProject(defaultProject);
projectList.addProject(funProject);

const view = View();
view.updateProjectView(projectList);
