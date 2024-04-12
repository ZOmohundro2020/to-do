function Project(obj) {
  const tasks = [];
  // add task
  const addTask = (newTask) => {
    console.log("inside Project.addTask", newTask);
    tasks.push(newTask);
  };

  const getTasks = () => tasks;

  // delete task
  // update task
  // update name
  const projectName = obj.name;

  const getProjectName = () => projectName;

  //console.log("inside Project constructor: obj is: ", obj);

  return { addTask, getTasks, getProjectName };
}

export default Project;
