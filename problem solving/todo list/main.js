let taskName = document.querySelector(".task-name");
let addTask = document.querySelector(".add-task");
let tasksCont=document.querySelector(".tasks");
let tasks_array = [] ;  
 if(localStorage.getItem('tasks')){
    tasks_array = JSON.parse(localStorage.getItem("tasks"))
} 



getdata();



addTask.onclick = function (){
    if(taskName.value != ""){
        addToArray(taskName.value);
        taskName.value = "" ; 

    }
}

function addToLocal(task){
    window.localStorage.setItem("tasks" ,JSON.stringify(task) )

}
function addToArray(task){
   const obj_task = {
    id : Date.now(),
    title : task ,
    state : false 
   }
   tasks_array.push(obj_task)
   addToContainer(tasks_array)
   addToLocal(tasks_array);
   
}
function addToContainer(array_tasks){
    tasksCont.innerHTML = "" ; 

array_tasks.forEach(task => {
    let div = document.createElement("div");
        div.className = 'task'
        if(task.state){
            div.classList.add("done")
        }
        div.innerHTML = task.title; 
        div.setAttribute("data-id" , task.id)
    let span = document.createElement("span")
        span.innerHTML = "Delete";
        span.className = "del" 
    div.appendChild(span);
    tasksCont.appendChild(div)
});
}

function getdata(){
   let data = window.localStorage.getItem("tasks");

    if(data){
        let tasks = JSON.parse(data) ;
        addToContainer(tasks)
    }
}


tasksCont.addEventListener("click" , (e)=>{
    if(e.target.classList.contains("del")){
        deleteElement(e.target.parentElement.getAttribute("data-id"));
        e.target.parentElement.remove();
    }
    if(e.target.classList.contains("task")){
        toggleState(e.target.getAttribute("data-id"));
        e.target.classList.toggle("done");

    }
})

function deleteElement(id){
  tasks_array = tasks_array.filter((task) => task.id != id )
  addToLocal(tasks_array)
}
function toggleState(id){
    for(let i = 0 ; i<tasks_array.length ; i++){
    if(tasks_array[i].id == id){
        tasks_array[i].state == false ?tasks_array[i].state = true : tasks_array[i].state = false ;  
        addToLocal(tasks_array)
    }
}
}