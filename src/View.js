function View() {
  const updateView = () => {
    const newDiv = document.createElement("div");
    const newPara = document.createElement("p");
    newPara.textContent = "hello world";

    newDiv.appendChild(newPara);
    document.body.appendChild(newDiv);
  };

  const updateProjectView = (projects) => {
    projects.forEach((element) => {
      console.log(element);
      const newProjectDiv = document.createElement("div");
      newProjectDiv.className = "project";
      const newProjectH3 = document.createElement("h3");
      newProjectH3.innerText = element.projectName;

      const newUl = document.createElement("ul");
      element.tasks.forEach((task) => {
        const newLi = document.createElement("li");
        newLi.innerText = `${task.title} - ${task.description}`;
        newUl.appendChild(newLi);
      });

      newProjectDiv.appendChild(newProjectH3);
      newProjectDiv.appendChild(newUl);

      document.body.appendChild(newProjectDiv);
    });
  };

  return { updateView, updateProjectView };
}

export default View;
