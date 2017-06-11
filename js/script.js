document.addEventListener('DOMContentLoaded', function(){

  //drop down menu

  var mainMenu = document.querySelectorAll(".mainMenu > li");

  for (var i = 0; i < mainMenu.length; i++) {
    mainMenu[i].addEventListener("mouseover", function(event) {
    event.preventDefault();
    this.firstElementChild.classList.toggle("hidden");
    });
    mainMenu[i].addEventListener("mouseout", function(event) {
    event.preventDefault();
    this.firstElementChild.classList.toggle("hidden");
    });
  }

  //gallery

  var img = document.querySelectorAll(".galleryImage > img");

  for (var i = 0; i < img.length; i++) {
    img[i].addEventListener("mouseover", function(event) {
    event.preventDefault();
    this.nextElementSibling.classList.toggle("hidden");
    this.nextElementSibling.nextElementSibling.classList.toggle("hidden");
    });
    img[i].addEventListener("mouseout", function(event) {
    event.preventDefault();
    this.nextElementSibling.classList.toggle("hidden");
    this.nextElementSibling.nextElementSibling.classList.toggle("hidden");
    });
  }

});
