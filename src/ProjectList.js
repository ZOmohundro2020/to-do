function ProjectList() {
  const projects = [];

  const addProject = (project) => projects.push(project);

  const deleteProject = (projectId) => {
    const result = projects.findIndex((obj) => obj["id"] === projectId);
    projects.splice(result, 1);
    console.log(`Project ${projectId} deleted...`);
  };

  const getProjects = () => projects;

  return { addProject, deleteProject, getProjects };
}

export default ProjectList;
