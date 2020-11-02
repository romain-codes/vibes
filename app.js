//! ACCORDEON
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

//! MENU BURGER
function menuBurger() {
  var x = document.getElementById("top-nav");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
};

//! CHANGEMENT DE THEME
document.getElementById("goutte").addEventListener("click", function () {
  document.body.classList.toggle("another-theme");
});

//! PORTFOLIO (à améliorer)
document.getElementById("display_all").addEventListener("click", function () {
  const divs = document.querySelectorAll('.portfolio_img');
  for (let i = 0; i < divs.length; i++) {
    divs[i].classList.remove('display_hide');
  }
});

document.getElementById("display_audio").addEventListener("click", function () {
  document.querySelector(".portimg1").classList.remove("display_hide");
  document.querySelector(".portimg2").classList.remove("display_hide");
  document.querySelector(".portimg3").classList.remove("display_hide");
  document.querySelector(".portimg4").classList.remove("display_hide");
  document.querySelector(".portimg5").classList.remove("display_hide");
  document.querySelector(".portimg6").classList.remove("display_hide");
  document.querySelector(".portimg7").classList.remove("display_hide");
  document.querySelector(".portimg8").classList.remove("display_hide");

  const divs = document.querySelectorAll('.display__audio');
  for (let i = 0; i < divs.length; i++) {
    divs[i].classList.toggle('display_hide');
  };
});

document.getElementById("display_image").addEventListener("click", function () {
  document.querySelector(".portimg1").classList.remove("display_hide");
  document.querySelector(".portimg2").classList.remove("display_hide");
  document.querySelector(".portimg3").classList.remove("display_hide");
  document.querySelector(".portimg4").classList.remove("display_hide");
  document.querySelector(".portimg5").classList.remove("display_hide");
  document.querySelector(".portimg6").classList.remove("display_hide");
  document.querySelector(".portimg7").classList.remove("display_hide");
  document.querySelector(".portimg8").classList.remove("display_hide");

  const divs = document.querySelectorAll('.display__image');
  for (let i = 0; i < divs.length; i++) {
    divs[i].classList.toggle('display_hide');
  }
});

document.getElementById("display_video").addEventListener("click", function () {
  document.querySelector(".portimg1").classList.remove("display_hide");
  document.querySelector(".portimg2").classList.remove("display_hide");
  document.querySelector(".portimg3").classList.remove("display_hide");
  document.querySelector(".portimg4").classList.remove("display_hide");
  document.querySelector(".portimg5").classList.remove("display_hide");
  document.querySelector(".portimg6").classList.remove("display_hide");
  document.querySelector(".portimg7").classList.remove("display_hide");
  document.querySelector(".portimg8").classList.remove("display_hide");

  const divs = document.querySelectorAll('.display__video');
  for (let i = 0; i < divs.length; i++) {
    divs[i].classList.toggle('display_hide');
  }
});

//$ Classe current (à améliorer)
document.querySelector("#display_all").addEventListener("click", function () {
  document.querySelector("#display_all").classList.toggle("current");
  document.querySelector("#display_image").classList.remove("current");
  document.querySelector("#display_audio").classList.remove("current");
  document.querySelector("#display_video").classList.remove("current");
});

document.querySelector("#display_audio").addEventListener("click", function () {
  document.querySelector("#display_audio").classList.toggle("current");
  document.querySelector("#display_all").classList.remove("current");
  document.querySelector("#display_image").classList.remove("current");
  document.querySelector("#display_video").classList.remove("current");
});

document.querySelector("#display_image").addEventListener("click", function () {
  document.querySelector("#display_image").classList.toggle("current");
  document.querySelector("#display_all").classList.remove("current");
  document.querySelector("#display_audio").classList.remove("current");
  document.querySelector("#display_video").classList.remove("current");
});

document.querySelector("#display_video").addEventListener("click", function () {
  document.querySelector("#display_video").classList.toggle("current");
  document.querySelector("#display_all").classList.remove("current");
  document.querySelector("#display_audio").classList.remove("current");
  document.querySelector("#display_image").classList.remove("current");
});