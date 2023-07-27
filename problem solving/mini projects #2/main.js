let states =  document.querySelectorAll(".statistics div")
let section3 = document.querySelector(".three")
let section4 = document.querySelector(".four")
let spans = document.querySelectorAll(".progress span")
let started = false ;

window.addEventListener("scroll" , ()=>{
if(window.scrollY >= section4.offsetTop){
    if(!started){
        spans.forEach((s)=> s.style.width = s.getAttribute("data-fill"))
    }
    started = true;
}
})

/*
window.addEventListener("scroll" , ()=>{
    if(window.scrollY >= section3.offsetTop){
        
        if(!started){
            states.forEach((el)=> startcount(el))
        }
        started = true;
    }
} ) 
*/


function startcount(el){
    let goal = el.dataset.goal ; 
    let counter = setInterval(() => { 
        if(el.textContent === goal){
            clearInterval(counter)
        }else{
       el.textContent++;
        }
    }, 2000 / goal);
}

let days = document.querySelector(".Days")
let Hours = document.querySelector(".Hours")
let minutes = document.querySelector(".Minutes")
let seconds = document.querySelector(".Seconds")

 let count_down_date = new Date("Dec 31 , 2023 23:59:59").getTime();

 let counter = setInterval(()=>{
    let Datenow = new Date().getTime();
    let data_off = count_down_date - Datenow ;

let Days =   Math.floor(data_off/ (1000 * 60 * 60 * 24)) 
let hours =  Math.floor(data_off % (1000 * 60 * 60 * 24) / (1000 * 60 * 60 ))
let Minutes = Math.floor(data_off % (1000 * 60 * 60) / (1000 * 60))
let Seconds = Math.floor(data_off % (1000 * 60 ) / 1000 )
if(Days < 10){
    Days = "0"+Days
}
if(hours < 10){
    hours = "0"+hours
}
if(Minutes < 10){
    Minutes = "0"+Minutes
}
if(Seconds < 10){
    Seconds = "0"+Seconds
}
    seconds.innerHTML = Seconds ;
    minutes.innerHTML = Minutes; 
    Hours.innerHTML = hours;
    days.innerHTML = Days ;
if(data_off === 0){
    clearInterval(counter)
}

 } , 1000)


 let input_feild = document.querySelector("input")
 let countSpan = document.querySelector(".count")
 let progressSpan = document.querySelector("span.progress");
let current_length = 0 ;
let max_length = input_feild.getAttribute("maxlength");
countSpan.innerHTML = max_length;

input_feild.oninput = function(){
countSpan.innerHTML = max_length - input_feild.value.length ; 
let percent = (100 * input_feild.value.length ) /max_length;   

progressSpan.style.width = `${percent}%`
}
/*
100%     x%  
 10px  currentlength

*/


