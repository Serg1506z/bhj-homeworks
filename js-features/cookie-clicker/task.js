let cookie = document.querySelector("#cookie");
let counter = document.querySelector("#clicker__counter");
let clicks = Number(counter.textContent);

cookie.onclick = () => {
   clicks++;
   counter.textContent = clicks;
   if(clicks %2 === 0){
    cookie.width += 20;
   }
   else{
     cookie.width -= 20
    }
}