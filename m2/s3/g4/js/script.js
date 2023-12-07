const apiKey = 'xloAyWFJkaQbpEvbZNdfGAvOYM0fflSfEoHVRV5ZZandxpwv7emkrz1I';
const query = 'pizze'; // Sostituisci con la tua query di ricerca

const loadImagesButton = document.getElementById('load-images-button');
const galleryDiv = document.getElementById('gallery');

loadImagesButton.addEventListener('click', () => {
    const apiUrl = `https://api.pexels.com/v1/search?query=${query}`;

    fetch(apiUrl, {
        headers: {
            Authorization: apiKey,
        },
    })
    .then(response => response.json())
    .then(data => {
        // Rimuovi eventuali immagini precedenti
        galleryDiv.innerHTML = '';

        // Itera attraverso le immagini e crea gli elementi HTML
        data.photos.forEach(photo => {
            const imgElement = document.createElement('img');
            imgElement.src = photo.src.medium; // Puoi usare anche photo.src.large per immagini più grandi
            imgElement.alt = photo.photographer;

            // Aggiungi l'immagine al div della galleria
            galleryDiv.appendChild(imgElement);
        });
    })
    .catch(error => {
        console.error('Errore nella richiesta API:', error);
    });
});
