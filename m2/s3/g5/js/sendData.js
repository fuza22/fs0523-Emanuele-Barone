const URL = "https://striveschool-api.herokuapp.com/api/product/"
const APIKEY = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkMmU4MjI1NGU4ODAwMTgzZjE4MzkiLCJpYXQiOjE2OTk1NTY5OTQsImV4cCI6MTcwMDc2NjU5NH0.czdosu_eNwD-g1E25bBc4b3TbZKM5q7jpW5VPNi9C0c"


async function getProducts(newProduct){


let result = await fetch(`${URL}`,{
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                    "Authorization": APIKEY
                },
                body: JSON.stringify(newProduct)
            })

            .then(res => res.json())
            .then(product => {
                
                let form = document.querySelector(".form")
                form.reset()
    
            })
            


}


//-------------------------- INSERIMENTO DATI ---------------------------------//


class Product{
    constructor(name, description, brand, imageUrl, price){

        this.name = name;
        this.description = description;
        this.brand = brand;
        this.imageUrl = imageUrl;
        this.price = price;
    }
}


let buttonAdd = document.querySelector(".buttonAdd");

buttonAdd.addEventListener("click", function(e){

    e.preventDefault();

    let name = document.querySelector("#validationCustom01").value;
    let description = document.querySelector("#validationCustom02").value;
    let brand = document.querySelector("#validationCustom03").value;
    let imageUrl = document.querySelector("#validationCustom04").value;
    let price = document.querySelector("#validationCustom05").value;

    let newProduct = new Product(name, description, brand, imageUrl, price);
    getProducts(newProduct)

});

