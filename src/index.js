document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.getElementById("create-task-form")
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    createTask(document.getElementById('new-task-description').value)
  })
});
function createTask(task){
  let main = document.getElementById("tasks")
  let newTask = document.createElement("li")
  let button = document.createElement("button")
  button.textContent = "x"
  button.addEventListener('click', deleteTask)
  let p = document.createElement('p')
  p.textContent =task;
  p.append(button)
  newTask.append(p)
  main.appendChild(newTask)
}
function deleteTask(e){
  e.target.parentNode.parentNode.remove()
}
