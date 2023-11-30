let basket = [];
let products = document.querySelectorAll(".product");
let cartProducts = document.querySelector(".cart__products");


products.forEach(product => {
    let dec = product.querySelector(".product__quantity-control_dec");
    let inc = product.querySelector(".product__quantity-control_inc");
    let value = product.querySelector(".product__quantity-value");
    let add = product.querySelector(".product__add");
    let image = product.querySelector("img");
    
    dec.addEventListener("click",() =>{
        let count = Number(value.textContent);
        if(count > 1) count--;
        value.textContent = count;
    })
    
    inc.addEventListener("click",() =>{
        let count = Number(value.textContent);
        count++;
        value.textContent = count;
    })
    
    add.addEventListener("click",()=>{
        let count = Number(value.textContent);
        let id = Number(product.dataset.id)
        let img = image.src;
        addToCart({id,count,img})
        // renderCart(item)
    })
})

function addToCart (product){
    for(let i = 0; i < basket.length; i++){
        if(basket[i].id === product.id){
            basket[i].count += product.count;
            return;
        }
    }
    basket.push(product);
    // basket.forEach(item => {
    //     console.log(item);
    //   })




// function renderCart (item){
//     basket.forEach(item => {
//         e.preventDefault();
//         let count = item.count.value;
//         let id = item.id.value;
//         let img = item.img.value;


//         let element = document.createElement("div");
//         element.className = "cart__products";

//         element.innerHTML = 
//        `<div class="cart__product" data-id="${id}">
//             <img class="cart__product-image" src="${img}">
//             <div class="cart__product-count">${count}</div>
//         </div>`;
//     })
    
// }

}