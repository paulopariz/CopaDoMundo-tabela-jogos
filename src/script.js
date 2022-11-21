var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: false,
  
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
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










  document.getElementById("dia20").textContent = "Fase de grupos - Dom, 20/11" ;
  document.getElementById("dia21").textContent = "Fase de grupos - Seg, 21/11" ;
  document.getElementById("dia22").textContent = "Fase de grupos - Ter, 22/11" ;
  document.getElementById("dia23").textContent = "Fase de grupos - Qua, 23/11" ;