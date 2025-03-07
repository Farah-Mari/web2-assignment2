export default class Tasks {
  constructor(taskListElement) {
    this.taskListElement = taskListElement;
    this.tasks = [];
    this.loadTasks();
  }

  loadTasks() {
    const stored = localStorage.getItem("tasks");
    if (stored) {
      this.tasks = JSON.parse(stored);
      this.render();
    }
  }

  saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }

  addTask(taskText) {
    const task = {
      text: taskText,
      id: Date.now(),
    };
    this.tasks.push(task);
    this.saveTasks();
    this.render();
  }

  removeTask(taskId) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
    this.saveTasks();
    this.render();
  }

  render() {
    this.taskListElement.innerHTML = "";
    this.tasks.forEach((task) => {
      const li = document.createElement("li");
      li.textContent = task.text;
      const deleteBtn = document.createElement("button");
      deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
      deleteBtn.addEventListener("click", () => {
        this.removeTask(task.id);
      });
      li.appendChild(deleteBtn);
      this.taskListElement.appendChild(li);
    });
  }
}
