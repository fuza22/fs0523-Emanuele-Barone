class books{

    constructor(img, title, price){
        this.img = img;
        this.title = title;
        this.price = price;
        this.templateClone();
        this.cardCompiler();
    }

    templateClone(){
        
        let templateClone = document.getElementsByTagName("template")[0].content;
        let cloned = templateClone.cloneNode(true);
        let cloneContainer = document.querySelector("#card-container");
        cloneContainer.prepend(cloned);

    }

    cardCompiler(){

        let card = document.querySelector(".card:last-of-type");
        let img = document.querySelector("img");
        img.src = this.img;
        let title = document.querySelector(".card-title");
        title.textContent = this.title;
        let price = document.querySelector(".card-price");
        price.textContent = this.price + "€";
        let buttonAdd = document.querySelector(".btn-primary");
        let buttonDelete = document.querySelector(".btn-danger");

    }

    remove(){

        let card = document.querySelector('.card:last-of-type');
        let buttonDelete = document.querySelector(".btn-danger");
        buttonDelete.addEventListener("click", () => {

            card.remove();

    })
    }
}



fetch("https://striveschool-api.herokuapp.com/books")
    .then(response => response.json())
    .then(book => {

        book.forEach(element => {

            new books(element.img, element.title, element.price);

        });

});