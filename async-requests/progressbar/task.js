let form = document.querySelector("#form");
let progress = document.querySelector("#progress");
let fileInput = document.querySelector("#file");

form.addEventListener("submit",(e) => {
    e.preventDefault();
    let file = fileInput.files[0];
    let xhr = new XMLHttpRequest();
    let formSent = new FormData();
    if(fileInput.files.length > 0){
        formSent.append("file",file);
        xhr.upload.addEventListener("progress",(event) =>{
            let load = event.loaded/event.total;
            progress.value = load;
        })
        xhr.open("POST","https://students.netoservices.ru/nestjs-backend/upload");
        xhr.send(formSent);
    }
})