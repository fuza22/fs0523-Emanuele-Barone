const URL = "https://striveschool-api.herokuapp.com/api/product/"
const APIKEY = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkMmU4MjI1NGU4ODAwMTgzZjE4MzkiLCJpYXQiOjE2OTk1NTY5OTQsImV4cCI6MTcwMDc2NjU5NH0.czdosu_eNwD-g1E25bBc4b3TbZKM5q7jpW5VPNi9C0c"



//------------------------------LOGIN----------------------------------//


let loginBtn = document.querySelector(".login-button");

loginBtn.addEventListener("click", function(){


    location.href = 'login-page.html'
  
})

//------------------------------CLONE----------------------------------//

fetch(`${URL}`,{
    headers:{
        'Content-Type':'application/json',
        "Authorization": APIKEY
    },
})
.then(res => res.json())
.then(products => {
    
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
        this.compileProduct(clone);
    }

    cloneTemplate() {
        const template = document.getElementsByTagName("template")[0].content;
        const clone = template.cloneNode(true);
        return clone;  
    }

    compileProduct(clone) {
    
        let cards = clone.querySelector(".card:last-of-type");
        let images = clone.querySelector(".card-img-top");
        images.src = product.imageUrl;
        let title = clone.querySelector(".card-title");
        title.innerHTML = product.name;
        let price = clone.querySelector(".card-price");
        price.innerHTML = product.price;
        let description = clone.querySelector(".card-description");
        description.innerHTML = product.description;
        let brand = clone.querySelector(".card-brand");
        brand.innerHTML = product.brand;
    }

}
    









