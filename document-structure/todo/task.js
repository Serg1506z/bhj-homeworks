let input = document.querySelector("#task__input");
let button = document.querySelector("#tasks__add")
let taskList = document.querySelector("#tasks__list");

function addTask (e){
    e.preventDefault();
    if(input.value.trim() !== ""){
        let text = input.value.trim();
        input.value = "";
    
        let element = document.createElement("div");
        element.className = "task";
        element.innerHTML = `<div class="task__title">${text}</div>
        <a href="#" class="task__remove">&times;</a>`;
    
        element.querySelector(".task__remove").addEventListener("click",(e) =>{
            e.preventDefault();
            taskList.removeChild(element);
        })
        taskList.append(element)
    }
}



button.addEventListener("click",addTask);