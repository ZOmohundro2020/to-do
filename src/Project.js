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
    console.log(result);
    tasks.splice(result, 1);
  };

  const getTasks = () => tasks;

  const setProjectName = (name) => (projectName = name);
  const getProject = () => {
    return {
      projectName,
      projectId,
      tasks,
      deleteTask,
    };
  };

  return { addTask, deleteTask, getTasks, setProjectName, getProject };
}

export default Project;
