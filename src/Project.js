function Project(name) {
  const generateId = () => Math.random().toString(36).substring(2, 9);

  let projectName = name;
  const projectId = generateId();
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

  const getTasksDetails = () => tasksDetailsArray;
  const getTasksObjects = () => tasksObjectsArray;

  const getTask = (taskId) => {
    const foundTask = tasksDetailsArray.findIndex((task) => task.id === taskId);
    return tasksObjectsArray[foundTask];
  };

  const setProjectName = (name) => (projectName = name);

  // Not currently using this functionality
  const toggleProjectActive = () => projectIsActive = !projectIsActive;

  const getProjectDetails = () => {
    return {
      projectName,
      projectId,
      projectIsActive, // Not currently using this
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
  };
}

export default Project;
