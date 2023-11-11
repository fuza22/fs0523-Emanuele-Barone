const URL = "https://striveschool-api.herokuapp.com/api/product/"
const APIKEY = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkMmU4MjI1NGU4ODAwMTgzZjE4MzkiLCJpYXQiOjE2OTk1NTY5OTQsImV4cCI6MTcwMDc2NjU5NH0.czdosu_eNwD-g1E25bBc4b3TbZKM5q7jpW5VPNi9C0c"
    

        const getData = async () => {

            try {
                const ul = document.getElementById("currentEvents")

                const resp = await fetch(`${URL}`,{
                    method:"GET",
                    headers:{
                        'Content-Type':'application/json',
                        "Authorization": APIKEY
                    },
                })
                if (!resp.ok) {

                    if (resp.status === 404) {
                        throw new Error("Not Found 404")
                    }
                    if (resp.status === 401) {
                        throw new Error("Not Permitted")
                    }
                    if (resp.status === 500) {
                        throw new Error("General Server Error")
                    }
                }

                const events = await resp.json()

                events.forEach(event => {
                    ul.innerHTML += `<li class="list-group-item d-flex align-items-center"><span class="me-auto">${event.name}</span> <span class="badge bg-dark me-2">${event.price}€</span> <a href="./details.html?eventId=${event._id}">Details</a></li>`
                })
            } catch (error) {
                console.log(error.message)
            }

            console.log("LAST on getData")
        }


        window.onload = () => {

            getData()

        }
