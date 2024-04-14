function ProjectList() {
  const projects = [];

  const addProject = (project) => projects.push(project);
  const deleteProject = () => {};
  const getProjects = () => projects;

  return { addProject, deleteProject, getProjects };
}

export default ProjectList;
