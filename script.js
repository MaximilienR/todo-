function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");

    let task = document.createElement("li");

    let taskText=document.createElement("span")
    taskText.textContent = taskInput.value;
    task.appendChild(taskText);

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Suppr";
    deleteButton.onclick = function() {
            task.parentNode.removeChild(task);
    }

    let updateButton = document.createElement("button");
    updateButton.textContent = "Modifier";
    updateButton.onclick = function() {
            editTask(task);
    }

    task.appendChild(deleteButton);
    if (!task.classList.contains("editing")) {
            task.appendChild(updateButton);
    }

    taskList.appendChild(task);

    taskInput.value = "";


    function editTask(task) {
        let newTask = prompt("Modifier la tâche:", taskText.textContent);
        if (newTask !== null) {
                taskText.textContent = newTask;
                task.classList.remove("editing");
                task.appendChild(deleteButton);
                task.appendChild(updateButton);
        }
}}