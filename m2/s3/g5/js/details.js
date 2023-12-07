const URL = "https://striveschool-api.herokuapp.com/api/product/"
const APIKEY = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkMmU4MjI1NGU4ODAwMTgzZjE4MzkiLCJpYXQiOjE2OTk1NTY5OTQsImV4cCI6MTcwMDc2NjU5NH0.czdosu_eNwD-g1E25bBc4b3TbZKM5q7jpW5VPNi9C0c"


    const eventId = new URLSearchParams(window.location.search).get("eventId")

    window.onload = async () => {
        const resp = await fetch(`${URL}` + eventId,{
            method:"GET",
            headers:{
                'Content-Type':'application/json',
                "Authorization": APIKEY
            },
        })
        const eventObj = await resp.json()

        const {name, description, brand, price, _id, createdAt, updatedAt } = eventObj


        const container = document.getElementById("event-details")
        
        document.querySelector("#id").innerText = _id;
        document.querySelector("#name").innerText = name;
        document.querySelector("#description").innerText = description;
        document.querySelector("#brand").innerText = brand;
        document.querySelector("#price").innerText = price + " €";
        document.querySelector("#createdAt").innerText = createdAt;
        document.querySelector("#updatedAt").innerText = updatedAt;

    
        let spinner = document.querySelector(".spinner");
        spinner.classList.add("d-none");
        console.dir(spinner);

        
    }


    const handleLink = () => {
        window.location.assign("./backoffice.html?eventId=" + eventId)
    }


