let holes = document.querySelectorAll(".hole");
let counterLost = document.querySelector("#lost");
let clicks = Number(counterLost.textContent);
let counterDead = document.querySelector("#dead");
let clicksDead = Number(counterDead.textContent);


holes.forEach(hole => hole.addEventListener("click", e => {
    if(e.target.classList.contains("hole_has-mole")){
        clicksDead++;
        counterDead.textContent = clicksDead;
    }
    else{
        clicks++;
        counterLost.textContent = clicks;
    }
    check()
}))

function clear (){
    clicks = 0;
    counterLost.textContent = clicks;
    clicksDead = 0;
    counterDead.textContent = clicksDead;
}

function check (){
    if(clicks === 5){
       clear()
        alert("Вы проиграли!")
    }
    if(clicksDead === 10) {
       clear()
        alert("Вы победили!")
    }
}