// Define an array to store tasks (this should be replaced with a database in a real application)
const tasks = []

// Function to display tasks in the table
function displayTasks() {
  const taskListBody = document.getElementById('task-list-body')
  taskListBody.innerHTML = ''

  tasks.forEach((task) => {
    const row = document.createElement('tr')
    row.innerHTML = `
            <td>${task.name}</td>
            <td>${task.dueDate}</td>
            <td>${task.assignee}</td>
            <td>${task.status}</td>
        `
    taskListBody.appendChild(row)
  })
}

// Function to handle task creation
function createTask(event) {
  event.preventDefault() // Prevent form submission

  const taskName = document.getElementById('taskName').value
  const dueDate = document.getElementById('dueDate').value
  const assignee = document.getElementById('assignee').value

  // Basic validation
  if (!taskName || !dueDate || assignee === '') {
    alert('Please fill in all task details.')
    return
  }

  // Add the new task to the array (in a real app, this would involve server interaction)
  const newTask = { name: taskName, dueDate, assignee, status: 'Incomplete' }
  tasks.push(newTask)

  // Clear input fields
  document.getElementById('taskName').value = ''
  document.getElementById('dueDate').value = ''
  document.getElementById('assignee').value = ''

  // Display updated task list
  displayTasks()
}

// Attach event listener to the Create Task form
document.getElementById('task-form').addEventListener('submit', createTask)

// Initial display of tasks
displayTasks()
