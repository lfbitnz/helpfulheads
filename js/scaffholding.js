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

function topnavToggle() {
  var nav = document.getElementById("topnav");
  var top_hr = document.getElementById("top_header_line");
  var bot_hr = document.getElementById("bot_header_line");
  if (nav.style.display === "block") {
    nav.style.display = "none";
    top_hr.style.display = "none";
    bot_hr.style.background =
      "linear-gradient(to right, rgb(72, 186, 127), rgb(66, 151, 192))";
  } else {
    nav.style.display = "block";
    top_hr.style.display = "block";
    bot_hr.style.background = "rgb(66, 151, 192)";
  }
}
