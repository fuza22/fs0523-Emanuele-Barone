let loginBtn = document.querySelector(".login-button");

loginBtn.addEventListener("click", function(){


    location.href = 'login-page.html'
  
})

document.addEventListener("DOMContentLoaded", function () {
    const URL = "https://striveschool-api.herokuapp.com/api/product/";
    const APIKEY = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkMmU4MjI1NGU4ODAwMTgzZjE4MzkiLCJpYXQiOjE2OTk1NTY5OTQsImV4cCI6MTcwMDc2NjU5NH0.czdosu_eNwD-g1E25bBc4b3TbZKM5q7jpW5VPNi9C0c"

    let productId = new URLSearchParams(window.location.search).get("id");

    if (productId) {
        fetch(`${URL}${productId}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                "Authorization": APIKEY
            },
        })
        .then(res => res.json())
        .then(product => {
            populateProductDetails(product);
        })
    }

    function populateProductDetails(product) {
        document.getElementById("product-name").innerText = product.name;
        document.getElementById("product-image").src = product.imageUrl;
        document.getElementById("product-description").innerText = product.description;
        document.getElementById("product-price").innerText = `Price: ${product.price} €`;
        document.getElementById("product-brand").innerText = product.brand;
    }
});
