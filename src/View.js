function View() {
  const updateView = () => {
    const newDiv = document.createElement("div");
    const newPara = document.createElement("p");
    newPara.textContent = "hello world";

    newDiv.appendChild(newPara);
    document.body.appendChild(newDiv);
  };

  return { updateView };
}

export default View;
