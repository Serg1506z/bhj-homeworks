let img = document.querySelector("#loader");
let items = document.querySelector("#items");

let xhr = new XMLHttpRequest();
xhr.open('GET','https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();
xhr.onreadystatechange = function () {
    if(xhr.readyState === 4) {
        img.classList.remove("loader_active")
        let currencies = JSON.parse(xhr.responseText).response.Valute;
        for(let cur in currencies){
            // console.log(cur,currencies[cur].Value)
            let value = currencies[cur].Value;
            let item = document.createElement("div");
            item.innerHTML = `<div class="item__code">
                   ${cur}
                </div>
                <div class="item__value">
                 ${value}
                </div>
                <div class="item__currency">
                    руб.
                </div>`
            item.className = "item"
            items.appendChild(item)
        }
    };
};