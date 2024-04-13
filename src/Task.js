function Task({ title, description, dueDate, priority, notes }) {
  const generateId = () => Math.random().toString(36).substring(2, 9);

  let task = { title, description, dueDate, priority, notes, id: generateId() };  

  const getTask = () => task;
  const getTaskId = () => task.id;

  const editTask = ({ title, description, dueDate, priority, notes }) => {
    if (title !== undefined) task.title = title;
    if (description !== undefined) task.description = description;
    if (dueDate !== undefined) task.dueDate = dueDate;
    if (priority !== undefined) task.priority = priority;
    if (notes !== undefined) task.notes = notes;
  };

  return { getTask, getTaskId, editTask };
}

export default Task;
