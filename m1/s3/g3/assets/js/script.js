let container = document.querySelector(".container");
let bloccoNumeri = document.querySelector(".numeri-bingo");


for(let i = 1; i <= 76; i++){

  let bloccoNumero = document.createElement("div");
  bloccoNumero.innerText = i;
  bloccoNumeri.append(bloccoNumero);
  
}

let bottone = document.querySelector(".bottone");
let boxNumeroEstratto = document.querySelector(".numero-estratto");


bottone.addEventListener("click", function(){

let numeroEstratto = Math.floor(Math.random() * 76) + 1;

boxNumeroEstratto.innerText = numeroEstratto;

bloccoNumeri.children[numeroEstratto - 1].style.backgroundColor = "red";


})

