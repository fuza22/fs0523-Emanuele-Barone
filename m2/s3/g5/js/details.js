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
        container.innerHTML = `
                <h1 class="fw-bolder">${name}</h1>
                <p>${description}</p>
                <p>${brand}</p>
                <p>${price}€</p>
                <h6 class="bg-light px-2 py-3">Server Details</h6>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item px-2"><strong>id:</strong> ${_id}</li>
                    <li class="list-group-item px-2"><strong>createdAt:</strong> ${createdAt}</li>
                    <li class="list-group-item px-2"><strong>updatedAt:</strong> ${updatedAt}</li>
                </ul>
        `
    }


    const handleLink = () => {
        window.location.assign("./backoffice.html?eventId=" + eventId)
    }
