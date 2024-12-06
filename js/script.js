const listOfTask = document.getElementById("list-of-tasks")
const taskTextInput = document.getElementById("task-input")
const submitButton = document.getElementById("submit")
const submitButtonDeleteAll = document.getElementById("delete-submit")

submitButton.addEventListener('click', function () {
    let taskText = taskTextInput.value
    if(taskText === ""){
        alert("Enter Task something is wrong")
    }else {
        const liItem = document.createElement("li")
        liItem.innerText = taskText
        listOfTask.appendChild(liItem)
        taskTextInput.value = ''
        alert("well done your task add successful")
    }
})

submitButtonDeleteAll.addEventListener("click", function () {
    listOfTask.innerHTML = ""
})