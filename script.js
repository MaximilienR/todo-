function addTask(){
    let taskInput=document.getElementById("taskInput");
    let taskList=document.getElementById("taskList")

    let task=document.createElement("li");
    task.textContent=taskInput.value; 
    taskList.appendChild(task);

    taskInput.value="";

    let deleteButton=document.createElement("button");
    deleteButton.textContent="Suppr";
    deleteButton.onclick=function(){
        task.parentNode.removeChild(task);

    }
    task.appendChild(deleteButton)
    taskList.appendChild(task)

    taskInput.value="";
}