import Task from "./Task";

function View() {
  const sidebarDiv = document.getElementById("sidebar");
  const mainContentDiv = document.getElementById("main-content");

  // Store project information for access inside of View
  let storedProjects = [];
  let activeProject;

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
    updateTaskView(project);
  };

  const handleNewTaskBtn = () => {
    const newTestingTask = Task({
      title: "",
      description: "",
      dueDate: undefined,
      priority: "",
      notes: "",
      completed: false,
    });
    const newTask = activeProject.addTask(newTestingTask);
    newTestingTask.setTaskOwner(newTask);
    editTask(newTestingTask.getTask(), true);
  };

  const handleDeleteTask = (task) => {
    const owningProject = getOwningProjectFromTaskDetails(task);

    if (owningProject) {
      owningProject.deleteTask(task.id);
      updateTaskView(owningProject);
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

  // TO DO: my styling broke the completed button functionality.
  const updateTaskView = (project, isNewTask = false) => {
    activeProject = project;
    mainContentDiv.innerHTML = "";
    const projectDetails = project.getProjectDetails();

    const newUl = document.createElement("ul");
    newUl.id = "task-list";
    projectDetails.tasksDetailsArray.forEach((task) => {
      const newLi = document.createElement("li");
      const newCompButton = document.createElement("button");
      newCompButton.classList.add("comp-btn");
      // newCompButton.innerText = "✔";
      const newBtnHoverText = document.createElement("div");
      newBtnHoverText.classList.add("button-text");
      newBtnHoverText.innerHTML = "✓";
      newCompButton.appendChild(newBtnHoverText);
      newLi.id = task.id;
      task.completed
        ? newLi.classList.add("completed")
        : newLi.classList.remove("completed");
      newLi.innerText = `${task.title} - ${task.description}`;
      newLi.addEventListener("click", (e) => {
        console.log("e.target", e.target);
        if (e.target === newCompButton || e.target === newBtnHoverText) {
          completeTask(task);
        } else {
          editTask(task);
        }
      });

      newLi.insertBefore(newCompButton, newLi.childNodes[0]);
      newUl.appendChild(newLi);
      mainContentDiv.appendChild(newUl);
    });

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
    const titleInput = document.createElement("input");
    titleInput.value = task.title;
    titleInput.placeholder = "Title";
    taskDiv.appendChild(titleInput);

    // Description input field
    const descriptionInput = document.createElement("textarea");
    descriptionInput.value = task.description || "";
    descriptionInput.placeholder = "Description";
    taskDiv.appendChild(descriptionInput);

    // Due date input field
    const dateContainer = document.createElement("div");
    dateContainer.classList.add("input-container");
    const dueDateLabel = document.createElement("label");
    dueDateLabel.innerHTML = "Due Date:";
    const dueDateInput = document.createElement("input");
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
    priorityLabel.innerHTML = "Priority:";
    const priorityInput = document.createElement("select");
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

  return { updateProjectView, updateTaskView, editTask };
}

export default View;
