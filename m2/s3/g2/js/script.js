let savedName = localStorage.getItem("savedName");
if (savedName) {
    document.getElementById("savedName").textContent = savedName;
    document.getElementById("name").value = savedName;
}


document.getElementById("saveButton").addEventListener("click", function () {
    let name = document.getElementById("name").value;
    localStorage.setItem("savedName", name);
    document.getElementById("savedName").textContent = name;
});


document.getElementById("removeButton").addEventListener("click", function () {
    localStorage.removeItem("savedName");
    document.getElementById("name").value = "";
    document.getElementById("savedName").textContent = "";
});


let timerContainer = document.getElementById("timer");
let seconds = sessionStorage.getItem("seconds");

if(!seconds) {

    seconds = 0;

}


let timer = setInterval(function () {
    seconds++;
    timerContainer.textContent = seconds;
    sessionStorage.setItem("seconds", seconds);}, 1000);