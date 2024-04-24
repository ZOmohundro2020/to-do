function Project(name) {
  const generateId = () => Math.random().toString(36).substring(2, 9);

  let projectName = name;
  const projectId = generateId();

  // one array stores task details, one stores the actual task objects themselves
  const tasksDetailsArray = [];
  const tasksObjectsArray = [];

  const addTask = (newTask) => {
    // console.log(newTask);
    // console.log(newTask.getTask());
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
    console.log("Tasks:", tasksDetailsArray);
    console.log("Looking for taskId:", taskId);
    const foundTask = tasksDetailsArray.findIndex((task) => task.id === taskId);
    console.log("Found task:", foundTask);
    return tasksObjectsArray[foundTask];
  };

  // TO DO: Issue is that I'm not storing the actual task object in tasksDetailsArray.
  // I'm storing task.getTask() which is just the details.

  const setProjectName = (name) => (projectName = name);
  const getProjectDetails = () => {
    return {
      projectName,
      projectId,
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
    getProjectDetails,
  };
}

export default Project;
