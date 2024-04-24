function View() {
  const sidebarDiv = document.getElementById("sidebar");
  const mainContentDiv = document.getElementById("main-content");

  let storedProjects = [];

  // helper function to find the Project that a Task belongs to
  const getOwningProjectFromTaskDetails = (task) => {
    const owningProject = storedProjects
      .getProjects()
      .find((project) => project.getProjectDetails().projectId === task.owner);
    return owningProject;
  };

  const handleProjectBtn = (project) => {
    updateTaskView(project);
  };

  const handleNewTaskBtn = () => console.log("Add new task");

  const handleDeleteTask = (task) => {
    const owningProject = getOwningProjectFromTaskDetails(task);

    if (owningProject) {
      owningProject.deleteTask(task.id);
      updateTaskView(owningProject);
    } else {
      console.error("Owning project not found for task", task);
    }
  };

  const handleCancel = (task) => {
    const taskOwner = getOwningProjectFromTaskDetails(task);
    updateTaskView(taskOwner);
  };

  const handleSaveTask = ({
    task,
    titleInput: { value: title },
    descriptionInput: { value: description },
    dueDateInput: { value: dueDate },
    priorityInput: { value: priority },
  }) => {
    const taskInputs = { title, description, dueDate, priority };
    console.log(taskInputs);
    const owningProject = getOwningProjectFromTaskDetails(task);
    console.log(task.id);
    const actualTaskObject = owningProject.getTask(task.id);
    console.log(actualTaskObject);
    actualTaskObject.editTask({
      title: taskInputs.title,
      description: taskInputs.description,
      dueDate: taskInputs.dueDate,
      priority: taskInputs.priority,
    });
    updateTaskView(owningProject);
  };

  const updateProjectView = (projects) => {
    storedProjects = projects;
    sidebarDiv.innerHTML = "";

    projects.getProjects().forEach((element) => {
      const newProjectDiv = document.createElement("div");
      newProjectDiv.className = "project";
      const newProjectBtn = document.createElement("button");
      newProjectBtn.innerText = element.getProjectDetails().projectName;
      newProjectBtn.addEventListener("click", () => {
        handleProjectBtn(element);
      });

      sidebarDiv.appendChild(newProjectBtn);
    });
  };

  const updateTaskView = (project) => {
    mainContentDiv.innerHTML = "";
    const projectDetails = project.getProjectDetails();

    const newUl = document.createElement("ul");
    projectDetails.tasksDetailsArray.forEach((task) => {
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
    // Replace existing DOM element with full details
    const taskLi = document.getElementById(task.id);
    console.log("edit task clicked", task);

    // Container div
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
    // NEED TO FIX DATE BEHAVIOR
    const dueDateInput = document.createElement("input");
    dueDateInput.type = "date";
    console.log("task.duedate is: ", task.dueDate);
    console.log(task.dueDate instanceof Date);
    dueDateInput.value = new Date(task.dueDate); //task.dueDate.toISOString().split("T")[0] || "";
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

    // button container
    const buttonContainer = document.createElement("div");
    buttonContainer.className = "button-container";

    // delete task button
    const deleteTaskBtn = document.createElement("button");
    deleteTaskBtn.innerText = "Delete Task";
    deleteTaskBtn.className = "delete-task-btn";
    deleteTaskBtn.addEventListener("click", () => handleDeleteTask(task));
    buttonContainer.appendChild(deleteTaskBtn);

    // save task button
    const saveTaskBtn = document.createElement("button");
    saveTaskBtn.innerText = "Save";
    saveTaskBtn.className = "save-task-btn";
    saveTaskBtn.addEventListener("click", () =>
      handleSaveTask({
        task,
        titleInput,
        descriptionInput,
        dueDateInput,
        priorityInput,
      })
    );
    buttonContainer.appendChild(saveTaskBtn);

    // cancel task editing button
    const cancelTaskEditBtn = document.createElement("button");
    cancelTaskEditBtn.innerText = "Cancel";
    cancelTaskEditBtn.className = "cancel-task-btn";
    cancelTaskEditBtn.addEventListener("click", () => handleCancel(task));
    buttonContainer.appendChild(cancelTaskEditBtn);

    taskDiv.appendChild(buttonContainer);

    taskLi.parentNode.replaceChild(taskDiv, taskLi);
  };

  return { updateProjectView, updateTaskView, editTask };
}

export default View;
