function Project(name) {
  let projectName = name;
  const tasks = [];
  
  const addTask = (newTask) => {    
    tasks.push(newTask);
  };

  const deleteTask = (taskId) => {
    const result = tasks.findIndex((obj) => obj["id"] === taskId);
    console.log(result);
    tasks.splice(result, 1);
  };

  const getTasks = () => tasks;

  const setProjectName = (name) => (projectName = name);
  const getProjectName = () => projectName;  

  return { addTask, deleteTask, getTasks, getProjectName, setProjectName };
}

export default Project;
