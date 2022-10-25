//swiper
const buttonsList = document.querySelectorAll(".introduction--swiper--list--arrow");
// estrutura

/* document.querySelectorAll('.some-class').forEach(item => {
  item.addEventListener('click', event => {
    //handle click
  })
}) */

function moveSwiper(){
   const swiper = document.querySelector(".introduction--swiper--list");
   //swiper. Move swiper
   console.log("Clicked")
}

buttonsList.forEach(addEventListener("click", moveSwiper));

