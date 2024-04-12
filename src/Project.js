function Project(obj) {
  const tasks = [];
  // add task

  // delete task
  // update task
  // update name
  const projectName = obj.name;

  const getProjectName = () => projectName;

  console.log("inside Project constructor: obj is: ",obj);

  return { getProjectName };
}

export default Project;
