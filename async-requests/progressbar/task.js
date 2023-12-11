let form = document.querySelector("#form");
let progress = document.querySelector("#progress");
let file = document.querySelector("#file");

form.addEventListener("submit",(e) => {
    e.preventDefault();
    let f = file.files[0];
    let xhr = new XMLHttpRequest();
    let formSent = new FormData();
    if(file.files.length > 0){
        formSent.append("file",f);
        xhr.upload.addEventListener("progress",(event) =>{
            let load = event.loaded/event.total;
            progress.value = load;
        })
        xhr.open("POST","https://students.netoservices.ru/nestjs-backend/upload");
        xhr.send(formSent);
    }
})