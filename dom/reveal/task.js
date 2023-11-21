let reveals = document.querySelectorAll(".reveal");

document.addEventListener("scroll", (e) =>{
    reveals.forEach(reveal => {
        let coords = reveal.getBoundingClientRect();
        if(coords.top >= 0  && coords.bottom <= window.innerHeight){
            reveal.classList.add("reveal_active");
        }

    })
})

