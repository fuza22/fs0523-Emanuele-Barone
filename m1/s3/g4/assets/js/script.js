let bottoneInvia = document.querySelector("#invia-form");


bottoneInvia.addEventListener("click", function() {

    let target = document.getElementById("lista");
    let text = document.getElementById("testo");
    let bottone = document.getElementById("invia-form")

    if(!text.value) return;

    let lista = document.createElement("li");
    lista.classList.add("lista-elementi");
    lista.textContent = text.value;
    
    lista.addEventListener("click", function(){

        lista.classList.toggle("done");
        
    
    })
        target.append(lista);
        text.value = '';

    let deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-buttons")
    deleteButton.innerText = "Cancella"

    lista.appendChild(deleteButton)
    deleteButton.addEventListener("click",function(){

        lista.remove();
        
    })

})