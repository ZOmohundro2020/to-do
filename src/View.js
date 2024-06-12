import Task from "./Task";
import Project from "./Project";
import Storage from "./Storage";

function View() {
  const sidebarDiv = document.getElementById("sidebar");
  const mainContentDiv = document.getElementById("main-content");

  const mainContentPlaceholder = `
  <div id="main-content" class="main-content">
    <h2>To Do</h2>
    <p>Select a Project to get started!</p>
  </div>`;
  mainContentDiv.innerHTML = mainContentPlaceholder;

  // Local Storage
  const storage = Storage();
  const updateLocalStorage = () => {
    const projectDetails = storedProjects.getProjects().map((project) => {
      return project.getProjectDetails();
    });
    storage.setObject("storedProjects", projectDetails);
  };

  // Store project state information for access inside of View
  let storedProjects;
  let activeProject;

  const storeInitialProjects = (projects) => {
    storedProjects = projects;
    updateProjectView();
  };

  // Helper function to find the Project that a Task belongs to
  const getOwningProjectFromTaskDetails = (task) => {
    const owningProject = storedProjects
      .getProjects()
      .find((project) => project.getProjectDetails().projectId === task.owner);
    return owningProject;
  };

  // Helper function to return HTML date
  const HTMLdate = (dateInput) => {
    const date = new Date(dateInput);
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);
    const year = date.getFullYear();
    const htmlDate = year + "-" + month + "-" + day;

    return htmlDate;
  };

  // Another date helper function to deal with UTC dates
  function parseDateString(dateString) {
    const dateOnlyRegex =
      /^([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)(-(0[1-9]|1[0-2])(-(0[1-9]|[1-2][0-9]|3[0-1])))$/;
    if (dateOnlyRegex.test(dateString)) {
      const utcDate = new Date(dateString);
      const localDate = new Date(
        utcDate.getTime() + utcDate.getTimezoneOffset() * 60000
      );
      return localDate;
    }
    return new Date(dateString);
  }

  const handleProjectBtn = (project) => {
    activeProject = project;
    updateProjectView();
    updateTaskView(project);
  };

  const handleNewTaskBtn = () => {
    const newTask = Task({
      title: "",
      description: "",
      dueDate: undefined,
      priority: "",
      notes: "",
      completed: false,
    });
    const newTaskProjectId = activeProject.addTask(newTask);
    newTask.setTaskOwner(newTaskProjectId);
    editTask(newTask.getTask(), true);
  };

  const handleDeleteTask = (task) => {
    const owningProject = getOwningProjectFromTaskDetails(task);

    if (owningProject) {
      owningProject.deleteTask(task.id);
      updateTaskView(owningProject);
      updateLocalStorage();
    } else {
      console.error("Owning project not found for task", task);
    }
  };

  const handleCancel = (task, isNewTask = false) => {
    const taskOwner = getOwningProjectFromTaskDetails(task);
    if (isNewTask) handleDeleteTask(task);
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
    taskInputs.dueDate = parseDateString(taskInputs.dueDate);
    const owningProject = getOwningProjectFromTaskDetails(task);
    const actualTaskObject = owningProject.getTask(task.id);
    actualTaskObject.editTask({
      title: taskInputs.title,
      description: taskInputs.description,
      dueDate: taskInputs.dueDate,
      priority: taskInputs.priority,
    });
    updateTaskView(owningProject);
    updateLocalStorage();
  };

  const updateProjectView = () => {
    sidebarDiv.innerHTML = "";

    // Create project buttons in sidebar
    storedProjects.getProjects().forEach((element) => {
      const details = element.getProjectDetails();
      const existingProjectBtn = document.createElement("button");
      if (element == activeProject) {
        existingProjectBtn.classList.add("active-project");
      }
      existingProjectBtn.innerText = details.projectName;
      existingProjectBtn.addEventListener("click", () => {
        handleProjectBtn(element);
      });

      sidebarDiv.appendChild(existingProjectBtn);
    });

    // Create a new project button in sidebar
    const newProjectBtn = document.createElement("button");
    newProjectBtn.innerText = "+";
    newProjectBtn.classList.add("new-project-button");
    newProjectBtn.addEventListener("click", () => {
      handleNewProjectBtn();
    });

    sidebarDiv.appendChild(newProjectBtn);
  };

  const handleNewProjectBtn = () => {
    const newHeaderDiv = document.createElement("div");
    newHeaderDiv.classList.add("project-title-header");

    const newHeaderLabel = document.createElement("label");
    newHeaderLabel.innerHTML = "Name: ";
    newHeaderLabel.htmlFor = "new-header-input";

    const newHeaderInput = document.createElement("input");
    newHeaderInput.id = "new-header-input";
    newHeaderInput.placeholder = "Enter New Project Name";
    newHeaderInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        headerSaveBtn.click();
      }
    });
    newHeaderDiv.appendChild(newHeaderLabel);
    newHeaderDiv.appendChild(newHeaderInput);

    const headerSaveBtn = document.createElement("button");
    headerSaveBtn.innerText = "Save";
    headerSaveBtn.addEventListener("click", () => {
      if (newHeaderInput.value.trim() != "") {
        var newProject = Project(`${newHeaderInput.value}`);
        storedProjects.addProject(newProject);
        updateLocalStorage();
        activeProject = newProject;
      } else {
        newHeaderInput.focus();
      }
      updateProjectView();
      if (newProject) updateTaskView(newProject);
    });
    newHeaderDiv.appendChild(headerSaveBtn);

    const headerCancelCreateProjectBtn = document.createElement("button");
    headerCancelCreateProjectBtn.innerText = "Cancel";
    headerCancelCreateProjectBtn.addEventListener("click", () => {
      if (activeProject) {
        updateTaskView(activeProject);
      } else {
        mainContentDiv.innerHTML = mainContentPlaceholder;
      }
    });
    newHeaderDiv.appendChild(headerCancelCreateProjectBtn);

    mainContentDiv.innerHTML = "";
    mainContentDiv.appendChild(newHeaderDiv);
    newHeaderInput.focus();
  };

  const editProjectHeader = (project, headerDiv) => {
    const projectName = project.getProjectDetails().projectName;
    const newHeaderDiv = document.createElement("div");
    newHeaderDiv.classList.add("project-title-header");
    const newHeaderInput = document.createElement("input");
    newHeaderInput.value = projectName;
    newHeaderInput.id = "project-name-input";
    newHeaderDiv.appendChild(newHeaderInput);
    const headerUpdateBtn = document.createElement("button");
    headerUpdateBtn.innerText = "Update";
    headerUpdateBtn.addEventListener("click", () => {
      handleUpdateProject(project, newHeaderInput.value);
    });
    newHeaderDiv.appendChild(headerUpdateBtn);
    const headerDeleteProjectBtn = document.createElement("button");
    headerDeleteProjectBtn.classList.add("delete-project-btn");
    headerDeleteProjectBtn.innerText = "Delete Project";
    headerDeleteProjectBtn.addEventListener("click", () => {
      const response = confirm(
        `Are you sure you want to delete ${projectName}?`
      );
      if (response) {
        handleDeleteProject(project);
        updateLocalStorage;
      }
    });
    newHeaderDiv.appendChild(headerDeleteProjectBtn);

    headerDiv.parentNode.replaceChild(newHeaderDiv, headerDiv);
    newHeaderInput.focus();
  };

  const handleUpdateProject = (project, editProjectInput) => {
    project.setProjectName(editProjectInput);
    updateProjectView();
    updateTaskView(project);
    updateLocalStorage();
  };

  const handleDeleteProject = (project) => {
    const projectId = project.getProjectDetails().projectId;
    const deletedIndex = storedProjects.deleteProject(projectId);
    const projectsList = storedProjects.getProjects();

    if (projectsList.length > 0) {
      const nextActiveIndex = Math.max(0, deletedIndex - 1);
      const nextActiveProject = projectsList[nextActiveIndex];
      updateTaskView(nextActiveProject);
      activeProject = nextActiveProject;
    } else {
      mainContentDiv.innerHTML = `<div><p>Add a project to get started</p></div>`;
    }

    updateProjectView();
    updateLocalStorage();
  };

  // check a project for empty tasks and delete empty tasks
  const checkForAndDeleteEmptyTasks = (project, isNewTask = false) => {
    const projectDetails = project.getProjectDetails().tasksDetailsArray;
    projectDetails.forEach((task) => {
      if (task.title.trim() == "" && task.description.trim() == "") {
        if (!isNewTask) {
          handleDeleteTask(task);
          updateLocalStorage();
        }
      }
    });
  };

  const updateTaskView = (project, isNewTask = false) => {
    checkForAndDeleteEmptyTasks(project, isNewTask);

    mainContentDiv.innerHTML = "";
    const projectDetails = project.getProjectDetails();

    // Create a project header
    const projectTitleHeader = document.createElement("div");
    projectTitleHeader.classList.add("project-title-header");
    projectTitleHeader.addEventListener("click", () => {
      editProjectHeader(project, projectTitleHeader);
    });
    const projectTitle = document.createElement("h3");
    projectTitle.innerText = `${projectDetails.projectName}`;
    projectTitleHeader.appendChild(projectTitle);
    mainContentDiv.appendChild(projectTitleHeader);

    // List the project tasks
    const newUl = document.createElement("ul");
    newUl.id = "task-list";
    projectDetails.tasksDetailsArray.forEach((task) => {
      const newLi = document.createElement("li");
      const newCompButton = document.createElement("button");
      const newBtnHoverText = document.createElement("div");
      newCompButton.classList.add("comp-btn");
      if (task.completed) {
        newLi.classList.add("completed");
        newCompButton.setAttribute("class", "comp-btn-greyed");
        newBtnHoverText.innerHTML = "⎌"; // not currently used.
      } else {
        newLi.classList.remove("completed");
        newBtnHoverText.innerHTML = "✓";
      }
      newBtnHoverText.classList.add("button-text");
      newCompButton.appendChild(newBtnHoverText);
      newLi.id = task.id;

      newLi.innerText = `${task.title}`;
      if (task.description.trim() !== "")
        newLi.innerText = `${task.title} - ${task.description}`;
      newLi.addEventListener("click", (e) => {
        if (e.target === newCompButton || e.target === newBtnHoverText) {
          completeTask(task);
        } else {
          editTask(task);
        }
      });

      newLi.insertBefore(newCompButton, newLi.childNodes[0]);
      newUl.appendChild(newLi);
    });
    mainContentDiv.appendChild(newUl);

    // Add new task button at the bottom of the task list
    if (!isNewTask) {
      const newTaskLi = document.createElement("li");
      newTaskLi.id = "new-task-button-li";
      const newTaskBtn = document.createElement("button");
      newTaskBtn.innerText = "Add New Task";
      newTaskBtn.addEventListener("click", handleNewTaskBtn);
      newTaskLi.appendChild(newTaskBtn);
      newUl.appendChild(newTaskLi);
    }
  };

  // Toggle a task as completed or not completed
  const completeTask = (task) => {
    const owningProject = getOwningProjectFromTaskDetails(task);
    const actualTaskObject = owningProject.getTask(task.id);
    actualTaskObject.toggleCompleted();
    updateTaskView(owningProject);
    updateLocalStorage();
  };

  // Replace existing li DOM element with full task details for editing
  const editTask = (task, isNewTask = false) => {
    const taskOwner = getOwningProjectFromTaskDetails(task);

    // Folds up the task details (accordion) so multiple tasks aren't open at once for editing
    updateTaskView(taskOwner, isNewTask);

    let attachmentPoint = document.getElementById(task.id);

    // Container div
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task-details");

    // Title input field
    const titleContainer = document.createElement("div");
    titleContainer.classList.add("input-container");
    const titleLabel = document.createElement("label");
    titleLabel.innerHTML = "Title:";
    titleLabel.htmlFor = "title-input";
    const titleInput = document.createElement("input");
    titleInput.id = "title-input";
    titleInput.value = task.title;
    titleInput.placeholder = "Title";
    titleContainer.appendChild(titleLabel);
    titleContainer.appendChild(titleInput);
    taskDiv.appendChild(titleContainer);

    // Description input field
    const descriptionContainer = document.createElement("div");
    descriptionContainer.classList.add("input-container");
    const descriptionLabel = document.createElement("label");
    descriptionLabel.innerHTML = "Description:";
    descriptionLabel.htmlFor = "description-input";
    const descriptionInput = document.createElement("textarea");
    descriptionInput.id = "description-input";
    descriptionInput.value = task.description || "";
    descriptionInput.placeholder = "Description";
    descriptionContainer.appendChild(descriptionLabel);
    descriptionContainer.appendChild(descriptionInput);
    taskDiv.appendChild(descriptionContainer);

    // Due date input field
    const dateContainer = document.createElement("div");
    dateContainer.classList.add("input-container");
    const dueDateLabel = document.createElement("label");
    dueDateLabel.innerHTML = "Due Date:";
    dueDateLabel.htmlFor = "due-date-input";
    const dueDateInput = document.createElement("input");
    dueDateInput.id = "due-date-input";
    dueDateInput.type = "date";
    const convertedDate = HTMLdate(task.dueDate);
    dueDateInput.value = convertedDate;

    dateContainer.appendChild(dueDateLabel);
    dateContainer.appendChild(dueDateInput);
    taskDiv.appendChild(dateContainer);

    // Priority input field
    const priorityContainer = document.createElement("div");
    priorityContainer.classList.add("input-container");
    const priorityLabel = document.createElement("label");
    priorityLabel.htmlFor = "priority-input";
    priorityLabel.innerHTML = "Priority:";
    const priorityInput = document.createElement("select");
    priorityInput.id = "priority-input";
    const priorityOptions = ["Low", "Medium", "High"];

    priorityOptions.forEach((option) => {
      const priorityOption = document.createElement("option");
      priorityOption.text = option;
      priorityOption.value = option.toLowerCase();
      priorityInput.appendChild(priorityOption);
    });
    priorityInput.value = task.priority;

    priorityContainer.appendChild(priorityLabel);
    priorityContainer.appendChild(priorityInput);
    taskDiv.appendChild(priorityContainer);

    // Button container
    const buttonContainer = document.createElement("div");
    buttonContainer.className = "button-container";

    // Delete task button
    const deleteTaskBtn = document.createElement("button");
    deleteTaskBtn.innerText = "Delete Task";
    deleteTaskBtn.className = "delete-task-btn";
    deleteTaskBtn.addEventListener("click", () => handleDeleteTask(task));
    buttonContainer.appendChild(deleteTaskBtn);

    // Save task button
    const saveTaskBtn = document.createElement("button");
    saveTaskBtn.innerText = "Save";
    saveTaskBtn.className = "save-task-btn";
    saveTaskBtn.addEventListener("click", () => {
      // make sure the task at least has a name
      if (titleInput.value != "" || !isNewTask) {
        handleSaveTask({
          task,
          titleInput,
          descriptionInput,
          dueDateInput,
          priorityInput,
        });
      } else if (isNewTask) {
        handleDeleteTask(task);
      }
      updateLocalStorage();
    });

    buttonContainer.appendChild(saveTaskBtn);

    // Cancel task editing button
    const cancelTaskEditBtn = document.createElement("button");
    cancelTaskEditBtn.innerText = "Cancel";
    cancelTaskEditBtn.className = "cancel-task-btn";
    cancelTaskEditBtn.addEventListener("click", () =>
      handleCancel(task, isNewTask)
    );
    buttonContainer.appendChild(cancelTaskEditBtn);

    taskDiv.appendChild(buttonContainer);

    attachmentPoint.parentNode.replaceChild(taskDiv, attachmentPoint);
    titleInput.focus();
  };

  return { updateTaskView, editTask, storeInitialProjects };
}

export default View;
