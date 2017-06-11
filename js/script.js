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

  //slider

  var next = document.querySelector('.adArrowRight');
  var prev = document.querySelector('.adArrowLeft');
  var li = document.querySelectorAll('.slider > li');
  console.log(next);
  console.log(prev);
  console.log(li);

  var index = 0;
  li[index].classList.remove('hidden');

  next.addEventListener('click',function(){

    li[index].classList.add('hidden');
    index++;
    if (index >li.length -1) {
      index = 0;
    }
    li[index].classList.remove('hidden');
  });

  prev.addEventListener('click',function(){

    li[index].classList.add('hidden');
    index--;
    if (index < 0) {
      index = li.length -1;
    }
    li[index].classList.remove('hidden');
  });


});
