let tooltips = document.querySelectorAll(".has-tooltip");
let tooltip = document.querySelector(".tooltip");

tooltips.forEach(t => t.addEventListener("click",(e) =>{
    e.preventDefault();
    tooltip.style.top = `${e.clientY +15}px`;
    tooltip.style.left = `${e.clientX}px`;
    tooltip.classList.toggle("tooltip_active");
    let title = t.title;
    tooltip.textContent = title;
}))