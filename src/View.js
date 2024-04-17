function View() {
  const sidebarDiv = document.getElementById("sidebar");
  const mainContentDiv = document.getElementById("main-content");

  const handleProjectBtn = (project) => {
    updateTaskView(project);
  };

  const handleNewTaskBtn = () => console.log("Add new task");

  const updateProjectView = (projects) => {
    sidebarDiv.innerHTML = "";

    projects.forEach((element) => {
      console.log(element);
      const newProjectDiv = document.createElement("div");
      newProjectDiv.className = "project";
      const newProjectBtn = document.createElement("button");
      newProjectBtn.innerText = element.projectName;
      newProjectBtn.addEventListener("click", () => {
        handleProjectBtn(element);
      });

      sidebarDiv.appendChild(newProjectBtn);
    });
  };

  const updateTaskView = (project) => {
    mainContentDiv.innerHTML = "";

    const newUl = document.createElement("ul");
    project.tasks.forEach((task) => {
      const newLi = document.createElement("li");
      newLi.innerText = `${task.title} - ${task.description}`;

      newUl.appendChild(newLi);
      mainContentDiv.appendChild(newUl);
    });

    const newTaskLi = document.createElement("li");
    const newTaskBtn = document.createElement("button");
    newTaskBtn.innerText = "Add New Task";
    newTaskBtn.addEventListener("click", handleNewTaskBtn);
    newTaskLi.appendChild(newTaskBtn);
    newUl.appendChild(newTaskLi);
  };
  return { updateProjectView, updateTaskView };
}

export default View;
