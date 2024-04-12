function Task({ title, description, dueDate, priority, notes }) {
  function getTask() {
    return { title, description, dueDate, priority, notes };
  }

  function editTask() {
    // edit task
  }

  return { getTask, editTask };
}

export default Task;
