let timer = document.querySelector("#timer");
let time = Number(timer.textContent);
let interval = setInterval( () =>{
    time--;
    timer.textContent = time;
    if(time === 0){ 
        alert("Вы победили в конкурсе!")
        clearInterval(interval)
    }
},1000)