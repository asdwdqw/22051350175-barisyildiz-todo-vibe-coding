const list = document.getElementById("taskList")

function addTask() {
  const input = document.getElementById("taskInput")
  if (input.value === "") return
  const li = document.createElement("li")
  li.textContent = input.value
  li.onclick = () => li.remove()
  list.appendChild(li)
  input.value = ""
}
