function Project(name) {
  const generateId = () => Math.random().toString(36).substring(2, 9);

  let projectName = name;
  const projectId = generateId();
  const tasks = [];

  const addTask = (newTask) => {
    tasks.push(newTask);
    return projectId;
  };

  const deleteTask = (taskId) => {
    const result = tasks.findIndex((obj) => obj["id"] === taskId);
    tasks.splice(result, 1);
  };

  const getTasks = () => tasks;

  const getTask = (taskId) => {
    console.log("Tasks:", tasks);
    console.log("Looking for taskId:", taskId);
    const foundTask = tasks.find((task) => task.id === taskId);
    console.log("Found task:", foundTask);
    return foundTask;
  };

  // TO DO: Issue is that I'm not storing the actual task object in tasks. 
  // I'm storing task.getTask() which is just the details.


  const setProjectName = (name) => (projectName = name);
  const getProjectDetails = () => {
    return {
      projectName,
      projectId,
      tasks,
    };
  };

  return {
    addTask,
    deleteTask,
    getTasks,
    getTask,
    setProjectName,
    getProjectDetails,
  };
}

export default Project;
