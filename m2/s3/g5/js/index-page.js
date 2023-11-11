const URL = "https://striveschool-api.herokuapp.com/api/product/"
const APIKEY = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkMmU4MjI1NGU4ODAwMTgzZjE4MzkiLCJpYXQiOjE2OTk1NTY5OTQsImV4cCI6MTcwMDc2NjU5NH0.czdosu_eNwD-g1E25bBc4b3TbZKM5q7jpW5VPNi9C0c"



//------------------------------LOGIN----------------------------------//


let loginBtn = document.querySelector(".login-button");

loginBtn.addEventListener("click", function(){


    location.href = 'login-page.html'
  
})

//------------------------------CLONE----------------------------------//

let cardContainer = document.querySelector(".card-container");

fetch(`${URL}`,{
    method:"GET",
    headers:{
        'Content-Type':'application/json',
        "Authorization": APIKEY
    },
})
.then(res => res.json())
.then(products => {
    console.log(products);
    products.forEach((product) => {

        new Phone(product._id, product.name, product.description, product.brand, product.imageUrl, product.price)
    })

})
    

class Phone{

    constructor(id, name, description, brand, imageUrl, price){

        this.id = id;
        this.name = name;
        this.description = description;
        this.brand = brand;
        this.imageUrl = imageUrl;
        this.price = price;
        let clone = this.cloneTemplate();

    }

    cloneTemplate() {
        let template = document.getElementsByTagName("template")[0];
        let clone = template.content.cloneNode(true);
        this.compileProduct(clone);
        cardContainer.append(clone)
    }

    compileProduct(clone) {
    
        let cards = clone.querySelector(".card:last-of-type");
        let images = clone.querySelector(".card-img-top");
        images.src = this.imageUrl;
        let title = clone.querySelector(".card-title");
        title.innerHTML = this.name;
        let price = clone.querySelector(".card-price");
        price.innerHTML = this.price;
        let description = clone.querySelector(".card-description");
        description.innerHTML = this.description;
        let brand = clone.querySelector(".card-brand");
        brand.innerHTML = this.brand;
    }

}
    
