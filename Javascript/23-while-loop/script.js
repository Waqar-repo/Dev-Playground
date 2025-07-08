document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('todo-form');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Load tasks from localStorage
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
      const li = document.createElement('li');
      li.className = task.completed ? 'completed' : '';

      const span = document.createElement('span');
      span.textContent = task.text;
      span.style.cursor = 'pointer';
      span.addEventListener('click', () => toggleComplete(index));

      const actions = document.createElement('div');
      actions.className = 'actions';

      const deleteBtn = document.createElement('button');
      deleteBtn.innerHTML = '🗑️';
      deleteBtn.addEventListener('click', () => deleteTask(index));

      actions.appendChild(deleteBtn);

      li.appendChild(span);
      li.appendChild(actions);
      taskList.appendChild(li);
    });
  }

  function addTask(text) {
    tasks.push({ text, completed: false });
    saveTasks();
    renderTasks();
  }

  function deleteTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
  }

  function toggleComplete(index) {
    tasks[index].completed = !tasks[index].completed;
    saveTasks();
    renderTasks();
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = taskInput.value.trim();
    if (text) {
      addTask(text);
      taskInput.value = '';
    }
  });

  // Initial render
  renderTasks();
});