let buttons = document.querySelectorAll(".font-size");
let book = document.querySelector(".book");

buttons.forEach(button => button.addEventListener("click",(e) =>{
    e.preventDefault();
   let size = button.dataset.size;
   switch(size){
    case "small":
        book.classList.add("book_fs-small");
        book.classList.remove("book_fs-big");
        break;
    case "big":
        book.classList.add("book_fs-big");
        book.classList.remove("book_fs-small");
        break;
     default:
        book.classList.remove("book_fs-big");
        book.classList.remove("book_fs-small");
        break;
   }
   buttons.forEach(btn => btn.classList.remove("font-size_active"))
   button.classList.add("font-size_active");
}))