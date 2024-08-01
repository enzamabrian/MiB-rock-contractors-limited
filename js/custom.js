// get current year
(function () {
    var year = new Date().getFullYear();
    document.querySelector("#currentYear").innerHTML = year;
})();

var loader = document.getElementById("preloader")
window.addEventListener("load", function(){
  loader.style.display="none";
})
document.addEventListener('contextmenu',event => event.preventDefault());


