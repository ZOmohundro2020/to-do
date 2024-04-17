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
      newLi.id = task.id;
      newLi.innerText = `${task.title} - ${task.description}`;
      newLi.addEventListener("click", () => editTask(task));

      newUl.appendChild(newLi);
      mainContentDiv.appendChild(newUl);
    });

    // Add new task functionality
    const newTaskLi = document.createElement("li");
    const newTaskBtn = document.createElement("button");
    newTaskBtn.innerText = "Add New Task";
    newTaskBtn.addEventListener("click", handleNewTaskBtn);
    newTaskLi.appendChild(newTaskBtn);
    newUl.appendChild(newTaskLi);
  };

  const editTask = (task) => {
    //replace existing DOM element with full details
    const taskLi = document.getElementById(task.id);
    console.log("edit task clicked", task);

    // container div
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task-details");

    // Title input field
    const titleInput = document.createElement("input");
    titleInput.value = task.title;
    taskDiv.appendChild(titleInput);

    // Description input field
    const descriptionInput = document.createElement("textarea");
    descriptionInput.value = task.description || ""; // If description is not provided, initialize with empty string
    descriptionInput.placeholder = "Description";
    taskDiv.appendChild(descriptionInput);

    // Due date input field
    const dueDateInput = document.createElement("input");
    dueDateInput.type = "date";
    dueDateInput.value = task.dueDate || ""; // If due date is not provided, initialize with empty string
    dueDateInput.placeholder = "Due Date";
    taskDiv.appendChild(dueDateInput);

    // Priority input field
    const priorityInput = document.createElement("select");
    const priorityOptions = ["Low", "Medium", "High"];
    priorityOptions.forEach((option) => {
      const priorityOption = document.createElement("option");
      priorityOption.text = option;
      priorityOption.value = option.toLowerCase();
      priorityInput.appendChild(priorityOption);
    });
    priorityInput.value = task.priority || ""; // If priority is not provided, initialize with empty string
    taskDiv.appendChild(priorityInput);

    taskLi.parentNode.replaceChild(taskDiv, taskLi);
  };

  return { updateProjectView, updateTaskView, editTask };
}

export default View;
