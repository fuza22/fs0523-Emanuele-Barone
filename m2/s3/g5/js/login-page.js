function submitForm(email, password) {

  if (email == "michele@epicode.com" && password == "pizza") {
    location.href = "profile.html";
  } else {

Swal.fire({
  title: "Attenzione!",
  text: "Inserisci i dati presenti nell'immagine",
  imageUrl: "https://i.ibb.co/qC4c6NC/Screenshot-2023-11-10-alle-16-07-34.png",
  imageWidth: 400,
  imageHeight: 200,
  imageAlt: "dati-accesso"
});
  }
}

let logInBtn = document.querySelector(".button-sign-in");

logInBtn.addEventListener("click", function () {

    let email = document.querySelector(".email-input").value;
    let password = document.querySelector(".password-input").value;

    submitForm(email,password);

});

