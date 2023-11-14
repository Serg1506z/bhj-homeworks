let els = document.querySelectorAll(".tabs");

els.forEach(el =>{
    let tabs = Array.from(el.querySelectorAll(".tab"));
    let contents = Array.from(el.querySelectorAll(".tab__content"));
    tabs.forEach(tab => tab.addEventListener("click",e =>{
        let i = tabs.indexOf(e.target);
        tabs.forEach(t => t.classList.remove("tab_active"));
        contents.forEach(t => t.classList.remove("tab__content_active"));
        tabs[i].classList.add("tab_active");
        contents[i].classList.add("tab__content_active");
    }))
})