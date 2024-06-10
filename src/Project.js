import Task from "./Task";

function Project(name, id = undefined, fromStorage = false) {
  let projectId;

  if (fromStorage == false) {
    projectId = Math.random().toString(36).substring(2, 9);
  } else {
    projectId = id;
  }

  let projectName = name;
  let projectIsActive = false;

  // one array stores task details, one stores the actual task objects themselves
  const tasksDetailsArray = [];
  const tasksObjectsArray = [];

  const addTask = (newTask) => {
    tasksDetailsArray.push(newTask.getTask());
    tasksObjectsArray.push(newTask);
    return projectId;
  };

  const deleteTask = (taskId) => {
    const result = tasksDetailsArray.findIndex((obj) => obj["id"] === taskId);
    tasksDetailsArray.splice(result, 1);
    tasksObjectsArray.splice(result, 1);
  };

  // Used for pulling in tasks from localstorage
  const setTasks = (tasksArray) => {
    tasksArray.forEach((element) => {
      const newTask = new Task({
        title: element.title,
        description: element.description,
        dueDate: element.dueDate || new Date(),
        priority: element.priority,
        notes: element.notes,
      });
      newTask.setTaskOwner(element.owner);
      newTask.setCompleted(element.completed);
      newTask.setTaskId(element.id);

      tasksObjectsArray.push(newTask);
      tasksDetailsArray.push(newTask.getTask());
    });
  };

  const getTasksDetails = () => tasksDetailsArray;
  const getTasksObjects = () => tasksObjectsArray;

  const getTask = (taskId) => {
    const foundTask = tasksDetailsArray.findIndex((task) => task.id === taskId);
    return tasksObjectsArray[foundTask];
  };

  const setProjectName = (name) => (projectName = name);

  // Not currently using this functionality
  const toggleProjectActive = () => (projectIsActive = !projectIsActive);

  const getProjectDetails = () => {
    return {
      projectName,
      projectId,
      projectIsActive, // Not currently using this
      tasksObjectsArray,
      tasksDetailsArray,
    };
  };

  return {
    addTask,
    deleteTask,
    getTasksDetails,
    getTasksObjects,
    getTask,
    setProjectName,
    toggleProjectActive,
    getProjectDetails,
    setTasks,
  };
}

export default Project;
