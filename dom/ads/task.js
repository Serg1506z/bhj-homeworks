let rotators = document.querySelectorAll(".rotator");

rotators.forEach(rotator =>{
    let cases = Array.from(rotator.querySelectorAll(".rotator__case"));
    let index = 0;
    setInterval(()=>{
        index++;
        if(index === cases.length) index = 0;
        cases.forEach(c => c.classList.remove("rotator__case_active"))
        cases[index].classList.add("rotator__case_active")
    },1000)
})