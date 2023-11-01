let header = document.getElementById("header")
window.addEventListener("scroll",function(){

    if(window.scrollY > 380){

        header.classList.add("alternative-header")

    }else{

        header.classList.remove("alternative-header")

    }

})

let bGetStarted = document.querySelector(".get-started")
let bStartReading = document.querySelector(".start-reading")
let backgroundPopUp = document.querySelector(".background-popup")
let contenutoPopUp = document.querySelector(".contenuto-popup")
let xButton = document.querySelector(".button-x")
let body = document.querySelector("body")

function popUp() {

    backgroundPopUp.classList.toggle("hidden")
    contenutoPopUp.classList.toggle("hidden")
    body.classList.toggle("block-scroll")
    

    
}

bGetStarted.addEventListener("click", function(){

popUp()

})

bStartReading.addEventListener("click", function(){

    popUp()
    
})

backgroundPopUp.addEventListener("click", function(){

    popUp()
    
})

xButton.addEventListener("click", function(){

    popUp()
    
})


let mGroup = document.querySelectorAll('g[stroke-linecap="butt"]')

function mBlinking() {

    let mRandom = Math.floor(Math.random() * mGroup.length);
    let mChosen = mGroup[mRandom];

    if(mChosen.style.opacity == 1){

        mChosen.style.opacity = 0

    }else{

        mChosen.style.opacity = 1

    }
    
}


setInterval(() => {
    
mBlinking();

}, 40);

let bBookmark = document.querySelectorAll(".bookmark")


bBookmark.forEach(bookmark => {

    bookmark.addEventListener("click", function(){

        Swal.fire(
            'Congrats!',
            'You add succesfully this to your bookmarks',
            'success'
          )
    
    
    })

})







