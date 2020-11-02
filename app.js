// ACCORDEON
let acc = document.getElementsByClassName('h3-about');
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function () {
        let box = this.parentNode
        const icon = this.querySelector('i');

        box.classList.toggle('open');
        icon.classList.toggle('fa-plus');
        icon.classList.toggle('fa-minus');
    });
}

// MENU BURGER
function menuBurger() {
    var x = document.getElementById("top-nav");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
