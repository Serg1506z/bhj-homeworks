let dropdowns = document.querySelectorAll(".dropdown");
dropdowns.forEach(dropdown =>{
    let dropdownlist = dropdown.querySelector(".dropdown__list");
    let dropdownItems = dropdown.querySelectorAll(".dropdown__item");
    let dropdownValue = dropdown.querySelector(".dropdown__value");
    
    dropdown.addEventListener("click",() =>{
        dropdownlist.classList.toggle("dropdown__list_active");
    })
    
    dropdownItems.forEach(item => item.addEventListener("click",(e) =>{
        e.preventDefault();
        let value = e.target.textContent.trim();
        dropdownValue.textContent = value;
    }))
})
