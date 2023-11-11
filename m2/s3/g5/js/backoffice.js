const selectedID = new URLSearchParams(window.location.search).get("eventId")
console.log(selectedID);
document.addEventListener('DOMContentLoaded', async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const selectedID = urlParams.get("id");
    const APIKEY = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkMmU4MjI1NGU4ODAwMTgzZjE4MzkiLCJpYXQiOjE2OTk1NTY5OTQsImV4cCI6MTcwMDc2NjU5NH0.czdosu_eNwD-g1E25bBc4b3TbZKM5q7jpW5VPNi9C0c";

    const subtitle = document.getElementById("subtitle");
    const mainBtn = document.querySelector("button[type='submit']");
    const deleteBtn = document.getElementById("delete-btn");

    if (selectedID) {
        subtitle.innerText = "— Modifica Evento";

        try {
            const resp = await fetch(`https://striveschool-api.herokuapp.com/api/product/${selectedID}`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": APIKEY
                },
            });

            if (resp.ok) {
                const { name, description, brand, price } = await resp.json();

                document.getElementById("name").value = name;
                document.getElementById("description").value = description;
                document.getElementById("price").value = price;
                document.getElementById("brand").value = brand;

                mainBtn.innerText = "Modifica Evento";
            } else {
                console.error("Errore durante il recupero dei dati:", resp.status, resp.statusText);
            }
        } catch (error) {
            console.error("Errore durante la chiamata GET:", error);
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const myEvent = {
            name: document.getElementById("name").value,
            description: document.getElementById("description").value,
            price: parseFloat(document.getElementById("price").value),
            brand: document.getElementById("brand").value,
        };

        try {
            const resp = await fetch(`https://striveschool-api.herokuapp.com/api/product/${selectedID ? `/${selectedID}` : ''}`, {
                method: selectedID ? "PUT" : "POST",
                body: JSON.stringify(myEvent),
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": APIKEY
                }
            });

            if (resp.ok) {
                const newEventObj = await resp.json();

                if (selectedID) {
                    alert(`Evento con l'id: ${newEventObj._id} è stato modificato con successo!`);
                } else {
                    alert(`Evento creato con successo, l'id è: ${newEventObj._id}`);
                    document.getElementById("name").value = "";
                    document.getElementById("description").value = "";
                    document.getElementById("price").value = "";
                    document.getElementById("brand").value = "";
                }

                window.location.assign("./index.html");
            } else {
                console.error("Errore durante la creazione/modifica dell'evento:", resp.status, resp.statusText);
            }
        } catch (error) {
            console.error("Errore durante la chiamata POST/PUT:", error);
        }
    };

    const handleDelete = async () => {
        try {
            const accepted = confirm("Sei sicuro di volerlo cancellare?");

            if (accepted) {
                const urlParams = new URLSearchParams(window.location.search);
                const selectedID = urlParams.get("id");

                if (selectedID && selectedID.trim() !== "") {
                    const resp = await fetch(`https://striveschool-api.herokuapp.com/api/product/${selectedID}`, {
                        method: "DELETE",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": APIKEY
                        }
                    });

                    if (resp.ok) {
                        const deletedObj = await resp.json();
                        alert(`Hai eliminato ${deletedObj.name} con id: ${deletedObj._id}`);
                        window.location.assign("./index.html");
                    } else {
                        console.error("Errore durante l'eliminazione dell'oggetto:", resp.status, resp.statusText);
                        alert("Errore durante l'eliminazione dell'oggetto.");
                    }
                } else {
                    console.error("ID non valido o mancante.");
                    alert("ID non valido o mancante. Operazione annullata.");
                }
            } else {
                alert("Operazione annullata.");
            }
        } catch (error) {
            console.error("Errore durante la gestione della richiesta DELETE:", error);
            alert("Errore durante la gestione della richiesta DELETE.");
        }
    };

    deleteBtn.onclick = handleDelete;
});
