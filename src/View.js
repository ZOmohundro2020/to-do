function View() {
  const sidebarDiv = document.getElementById("sidebar");
  const mainContentDiv = document.getElementById("main-content");

  const updateProjectView = (projects) => {
    sidebarDiv.innerHTML = "";
    mainContentDiv.innerHTML = "";
    
    projects.forEach((element) => {
      console.log(element);
      const newProjectDiv = document.createElement("div");
      newProjectDiv.className = "project";
      const newProjectBtn = document.createElement("button");
      newProjectBtn.innerText = element.projectName;

      
      sidebarDiv.appendChild(newProjectBtn);

      const newUl = document.createElement("ul");
      element.tasks.forEach((task) => {
        const newLi = document.createElement("li");
        newLi.innerText = `${task.title} - ${task.description}`;
        newUl.appendChild(newLi);
      });

      
      mainContentDiv.appendChild(newUl);
    });
  };

  return { updateProjectView };
}

export default View;
