
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

function addTask() {
  const taskText = taskInput.value.trim();
  
  if (taskText === '') {
    alert('Please enter a task.');
    return;
  }
  
  
  const taskItem = document.createElement('li');
  taskItem.classList.add('taskItem');
  
  const taskTextNode = document.createTextNode(taskText);
  taskItem.appendChild(taskTextNode);


  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remove';
  
  removeButton.addEventListener('click', () => {
    taskList.removeChild(taskItem);
  });
  
 
  taskItem.appendChild(removeButton);


  taskList.appendChild(taskItem);


  taskInput.value = '';
}

addTaskBtn.addEventListener('click', addTask);

taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTask();
  }
});
