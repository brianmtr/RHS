let hamButton = document.querySelector('.ham');
let navBar = document.querySelector('.navbar');
hamButton.addEventListener('click', openMenu);

function openMenu(){
    navBar.classList.toggle('showNav');
    hamButton.classList.toggle('showClose');
  }

let menuLinks = document.querySelectorAll('.menuLink');

menuLinks.forEach(
    function(menuLink){
      menuLink.addEventListener('click', openMen  u);
    }
  )