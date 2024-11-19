function AddTask(){
    let TasksContainer = document.getElementById("tasksBag");
    let inputTag = document.getElementById("inputTag");

    let inputData = inputTag.value.trim();
    if(inputData === ""){
        alert("please enter the data to show in the document")
        return console.log("enter the data:")
    }

    let liTag=document.createElement("li")
    liTag.innerHTML=`${inputData}<button class="editBtn" onclick="editTask()">Edit</button><button class="dlteBtn" onclick="DeleteTask()">Delete</button>`;
    TasksContainer.append(liTag);
    inputTag.value = "";

    let editOption = liTag.querySelector(".editBtn");
    editOption.style.backgroundColor = "yellow";
    editOption.addEventListener("click",function(){
        editTask(liTag)
    })

    let dlteOption = liTag.querySelector(".dlteBtn");
    dlteOption.style.backgroundColor = "red";
    dlteOption.addEventListener("click",function(){
        DeleteTask(liTag);
    });
}
   
function DeleteTask(liTag){
    let confirmation=confirm("are you sure you want to delete the task?")
    if(confirmation){
        liTag.remove();
    }
}

function editTask(liTag){
    let currentTask = liTag.firstChild.textContent;
    let newTask = prompt("edit the text",currentTask)

    if(newTask !== null && newTask.trim()!==""){
        liTag.firstChild.textContent=newTask;
    }
}


















































