function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");

    let task = document.createElement("li");
    task.textContent = taskInput.value;
    taskList.appendChild(task);

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
            let newTask = prompt("Modifier la tâche:", task.textContent);
            if (newTask !== null) {
                    task.textContent = newTask;
                    task.classList.add("editing");
                    task.removeChild(task.lastChild); // Supprimer l'ancien bouton de mise à jour
            }
    }
}