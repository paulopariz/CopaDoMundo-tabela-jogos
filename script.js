var swiper = new Swiper(".mySwiper", {
    slidesPerView: 0,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: false,
  
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints:{
      320:{
        slidesPerView: 1,
      },
      480:{
        slidesPerView: 1.5,
      },
      530:{
        slidesPerView: 1.70
      },
      640:{
        slidesPerView: 2
      },
      1050:{
        slidesPerView: 2.5
      },
      1220:{
        slidesPerView: 3,
      }
    }
  });

//VER MAIS
document.getElementById("buttonVerMais1").onclick = function() {vermais1()};

function vermais1(){
  document.getElementById("verMais1").style.display = "block";
  document.getElementById("buttonVerMais1").style.display = "none";
  document.getElementById("buttonVerMenos").style.display = "block";
}






//VER MENOS
document.getElementById("buttonVerMenos").onclick = function() {verMenos()};

function verMenos(){
  document.getElementById("verMenos").style.display = "none";
  document.getElementById("buttonVerMenos").style.display = "none";
  document.getElementById("buttonVerMais1").style.display = "block";
  window.location.reload();
}


//MENU-MOBILE
document.getElementById("button-menu").onclick = function() {menu()};

function menu(){
    document.getElementById("header").style.display = "none";
    document.getElementById("grupos").style.display = "none";
    document.getElementById("images").style.display = "none";
    document.getElementById("footer").style.display = "none";
    document.getElementById("title-grupos").style.display = "none";
    document.body.style.overflow = "hidden"
    document.getElementById("menu-mobile").style.display = "grid";
}


//BOTAO FECHAR MENU
document.getElementById("fechar-menu").onclick = function() {fecharMenu()};

function fecharMenu(){
  document.getElementById("header").style.display = "block";
  document.getElementById("grupos").style.display = "block";
  document.getElementById("images").style.display = "block";
  document.getElementById("footer").style.display = "grid";
  document.getElementById("title-grupos").style.display = "block";
  document.body.style.overflow = "visible"
  document.getElementById("menu-mobile").style.display = "none";
}


//LINKS MENU
document.querySelectorAll(".link-inicio").onclick = function() {linkInicio()};

function linkInicio(){
    document.getElementById("header").style.display = "block";
    document.getElementById("grupos").style.display = "block";
    document.getElementById("images").style.display = "block";
    document.getElementById("footer").style.display = "grid";
    document.getElementById("title-grupos").style.display = "block";
    document.body.style.overflow = "visible"
    document.getElementById("menu-mobile").style.display = "none";
}


document.querySelectorAll(".link-partidaa").onclick = function() {linkPartidas()};

function linkPartidas(){
    document.getElementById("header").style.display = "block";
    document.getElementById("grupos").style.display = "block";
    document.getElementById("images").style.display = "block";
    document.getElementById("footer").style.display = "grid";
    document.getElementById("title-grupos").style.display = "block";
    document.body.style.overflow = "visible"
    document.getElementById("menu-mobile").style.display = "none";
}


document.querySelectorAll(".link-grupos").onclick = function() {linkGrupos()};

function linkGrupos(){
    document.getElementById("header").style.display = "block";
    document.getElementById("grupos").style.display = "block";
    document.getElementById("images").style.display = "block";
    document.getElementById("footer").style.display = "grid";
    document.getElementById("title-grupos").style.display = "block";
    document.body.style.overflow = "visible"
    document.getElementById("menu-mobile").style.display = "none";
}






  document.getElementById("dia20").textContent = "Fase de grupos - Dom, 20/11" ;
  document.getElementById("dia21").textContent = "Fase de grupos - Seg, 21/11" ;
  document.getElementById("dia22").textContent = "Fase de grupos - Ter, 22/11" ;
  document.getElementById("dia23").textContent = "Fase de grupos - Qua, 23/11" ;
  document.getElementById("dia24").textContent = "Fase de grupos - Qui, 24/11" ;
  document.getElementById("dia25").textContent = "Fase de grupos - Sex, 25/11" ;
  document.getElementById("dia26").textContent = "Fase de grupos - Sab, 26/11" ;
  document.getElementById("dia27").textContent = "Fase de grupos - Dom, 27/11" ;
  document.getElementById("dia28").textContent = "Fase de grupos - Seg, 28/11" ;
  document.getElementById("dia29").textContent = "Fase de grupos - Ter, 29/11" ;
  document.getElementById("dia30").textContent = "Fase de grupos - Qua, 30/11" ;
  document.getElementById("dia01").textContent = "Fase de grupos - Qui, 01/12" ;
  document.getElementById("dia02").textContent = "Fase de grupos - Sex, 02/12" ;
  document.getElementById("dia03").textContent = "Fase de grupos - Sab, 03/12" ;
  document.getElementById("dia04").textContent = "Fase de grupos - Dom, 04/12" ;
  document.getElementById("dia05").textContent = "Fase de grupos - Seg, 05/12" ;
  document.getElementById("dia06").textContent = "Fase de grupos - Ter, 06/12" ;
  document.getElementById("dia07").textContent = "Fase de grupos - Qua, 07/12" ;
  document.getElementById("dia08").textContent = "Fase de grupos - Qui, 08/12" ;
  document.getElementById("dia09").textContent = "Fase de grupos - Sex, 09/12" ;
  document.getElementById("dia10").textContent = "Fase de grupos - Sab, 10/12" ;
  document.getElementById("dia11").textContent = "Fase de grupos - Dom, 11/12" ;
  document.getElementById("dia12").textContent = "Fase de grupos - Seg, 12/12" ;
  document.getElementById("dia13").textContent = "Fase de grupos - Ter, 13/12" ;
  document.getElementById("dia14").textContent = "Fase de grupos - Qua, 14/12" ;
  document.getElementById("dia15").textContent = "Fase de grupos - Qui, 15/12" ;
  document.getElementById("dia16").textContent = "Fase de grupos - Sex, 16/12" ;
  document.getElementById("dia17").textContent = "Fase de grupos - Sab, 17/12" ;
  document.getElementById("dia18").textContent = "Fase de grupos - Dom, 18/12" ;
 