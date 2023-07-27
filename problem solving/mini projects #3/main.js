let arr_hexCode = [1,2,3,4,5,6,7,8,9 ,"A","B","C","D","E","F"]
let hexCode = [];
for(let i = 0 ; i < 6 ; i++){
    let random = Math.floor(Math.random() * arr_hexCode.length);
    hexCode.push(arr_hexCode[random]) 
}
let color = `#${hexCode.join("")}`
document.querySelectorAll(".gallery .all").forEach((e)=>{
    e.style['background-color'] = color
})

let container = document.querySelector(".gallery")
let skills = document.querySelectorAll(".gallery div")
let topic = document.querySelectorAll(".control div");

topic.forEach((e)=>{
    
    e.onclick = function (){
        
      remove_active()
     this.classList.add("active")

 
        this.style["background-color"] = color ;
        this.style.color = "white" ;
        
         
        container.innerHTML = "";
            for(let  i = 0 ; i<skills.length ; i++ ){
                if(skills[i].classList.contains(e.getAttribute("data-set"))){
                container.appendChild(skills[i])
                }
               
               
            }
       
    }
    
})

function remove_active(){
    topic.forEach((e)=>{
        e.classList.remove("active")
        e.style["background-color"] = "#eee";
        e.style.color = "black";
    })
}

/* ganerate serial  */
let arr_serial = Array.from("1234567890abcdefghijklmnopqrstuvwxyz") ; 
let long = 25 ;
   
document.querySelector(".genrate").onclick = function (){
let final_serial ="" ; 
    for(let i = 0 ; i<long ; i++){
        let random = Math.floor(Math.random() * arr_serial.length);
        final_serial += arr_serial[random]
    }
 document.querySelector(".serial").innerHTML = final_serial;
}



/**************** */ 
let arr_tabs =Array.from(document.querySelectorAll(".tabs li"));

let divs = Array.from(document.querySelectorAll(".content > div"))

arr_tabs.forEach((el)=>{
   el.addEventListener("click" , (e)=>{
        arr_tabs.forEach((e)=>{
            e.classList.remove("active")
        })
        e.target.classList.add("active")
        divs.forEach((d)=>{
            d.style.display = "none"
        })
        console.log(document.querySelector(e.currentTarget.dataset.cont))
        document.querySelector(e.currentTarget.dataset.cont).style.display ="block"
   })
})

let span = document.querySelector(".up")
    span.style["background-color"] = color ; 

window.onscroll = function (){
console.log(this.scrollY)
    if(this.scrollY >= 1000){
        span.classList.add("show");
        span.onclick=function (){
            window.scrollTo({
                top : 0 ,
                behavior : "smooth"
            })
        }
    }else{
        span.classList.remove("show");
    }
}