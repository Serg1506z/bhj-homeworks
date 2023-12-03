let tooltips = document.querySelectorAll(".has-tooltip");
let tooltip = document.querySelector(".tooltip");

tooltips.forEach(t => t.addEventListener("click",(e) =>{
    e.preventDefault();
    if(tooltip.textContent === t.title){
        tooltip.classList.toggle("tooltip_active");
    }else{
        tooltip.style.top = `${e.clientY +15}px`;
        tooltip.style.left = `${e.clientX}px`;
        let title = t.title;
        tooltip.textContent = title;
        tooltip.classList.add("tooltip_active")
    }
}))