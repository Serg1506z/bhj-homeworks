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
        renderCart();
    })
})

function addToCart (product){
    const productInCard = basket.find(item => item.id === product.id);
    if(productInCard) {
        productInCard.count += product.count
    } else {
        basket.push(product); 
    }
}

function renderCart (){
    cartProducts.innerHTML = "";

    
    basket.forEach(item => {
        
        let element = document.createElement("div");
        element.className = "cart__product";
        element.dataset.id = item.id;

        element.innerHTML = 
        `<img class="cart__product-image" src="${item.img}">
        <div class="cart__product-count">${item.count}</div>`;
        cartProducts.append(element);
    })
    
}