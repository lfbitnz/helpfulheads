document.addEventListener("DOMContentLoaded", function () {
fetch("fragments/header.html")
    .then((response) => response.text())
    .then((data) => {
    document.getElementById("header").innerHTML = data;
    });

fetch("fragments/footer.html")
    .then((response) => response.text())
    .then((data) => {
    document.getElementById("footer").innerHTML = data;
    });
});