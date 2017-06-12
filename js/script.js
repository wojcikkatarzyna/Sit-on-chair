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

//calculator- choose chair

  var arrows = document.querySelectorAll('.list_arrow');
  console.log(arrows);
  for (var i = 0; i < arrows.length; i++) {
    arrows[i].addEventListener('click',function(){
      this.nextElementSibling.classList.toggle('hidden');
    });
  }

  //calculator-summary
  var liChair = document.querySelectorAll(".chairs li");
  var h4Left = document.querySelector(".panel_left h4");
  var h4Right = document.querySelector(".panel_right h4");
  var liColor = document.querySelectorAll(".color li");
  var spanLeft = document.querySelectorAll(".panel_left span");
  var spanRight = document.querySelectorAll(".panel_right span");
  var liPattern = document.querySelectorAll(".pattern li");
  var cost1 = 0;
  var cost2 = 0;
  var cost3 = 0;
  var cost4 = 0;
  var sum = document.querySelector(".sum");
  var totalCost = 0;
  var check = document.querySelector('.active');
  var div = check.previousElementSibling;

  for (var i = 0; i < liChair.length; i++) {
    liChair[i].addEventListener('click',function(){
      event.preventDefault(event);
      cost1 = 0;
      h4Left.innerText = this.innerText;
      if (this.innerText === "Clair") {
        h4Right.innerText = "200";
        cost1 = 200;
      } else if (this.innerText === "Margarita") {
        h4Right.innerText = "300";
        cost1 = 300;
      } else {
        h4Right.innerText = "400";
        cost1 = 400;
      }
      totalCost = cost1 + cost2 + cost3 +cost4;
      sum.innerText = totalCost;
    });

  }

  for (var i = 0; i < liColor.length; i++) {
    liColor[i].addEventListener('click',function(event){
      event.preventDefault(event);
      cost2 = 0;
      spanLeft[0].innerText = this.innerText;
      spanRight[0].innerText = "0";
      cost2 = 0;
      totalCost = cost1 + cost2 + cost3 +cost4;
      sum.innerText = totalCost;
    });
  }

  for (var i = 0; i < liPattern.length; i++) {
    liPattern[i].addEventListener('click',function(event){
      event.preventDefault(event);
      cost3 = 0;
      spanLeft[1].innerText = this.innerText;
      if (this.innerText === "Tkanina") {
        spanRight[1].innerText = "0";
        cost3 = 0;
      } else {
        spanRight[1].innerText = "100";
        cost3 = 100;
      }
      totalCost = cost1 + cost2 + cost3 +cost4;
      sum.innerText = totalCost;
    });
  }

  check.addEventListener('click', function(event){
    event.preventDefault(event);
    div.classList.add('agree');
    cost4 = 0;
    spanLeft[2].innerText = "Transport";
    spanRight[2].innerText = "200";
    cost4 = 200;
    totalCost = cost1 + cost2 + cost3 +cost4;
    console.log(totalCost);
    sum.innerText = totalCost;
  });

  div.addEventListener('click', function(event){
    event.preventDefault(event);
    this.classList.remove('agree');
    cost4 = 0;
    spanLeft[2].innerText = "Transport";
    spanRight[2].innerText = "0";
    cost4 = 0;
    totalCost = cost1 + cost2 + cost3 +cost4;
    console.log(totalCost);
    sum.innerText = totalCost;
  });


});
