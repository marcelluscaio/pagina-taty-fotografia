//swiper
const buttonsList = document.querySelectorAll(".introduction--swiper--arrow");
const swiper = document.querySelector(".introduction--swiper--list");
let transformRate = -99.99;

buttonsList.forEach(button => {
  button.addEventListener("click", (e) => {    
    e.target.disabled = true;
    let direction = e.target.dataset.direction;
    if(direction==="next"){
      swiper.style.transition = "transform 2s ease-in-out";
      transformRate -= 33.33;
      swiper.style.transform = `translateX(${transformRate}vw)`;
      if(transformRate<=-199){
        setTimeout(function() {
          swiper.style.transition = "none";
          swiper.style.transition = "transform 0s ease-in-out";
          transformRate = -33.33;
          swiper.style.transform = `translateX(${transformRate}vw)`;}, 2000);
      }
    } else if(direction === "previous"){
      swiper.style.transition = "transform 2s ease-in-out";
      transformRate += 33.33;
      swiper.style.transform = `translateX(${transformRate}vw)`;
      if(transformRate>=0){
        setTimeout(function() {
          swiper.style.transition = "none";
          swiper.style.transition = "transform 0s ease-in-out";
          transformRate = -166.65;
          swiper.style.transform = `translateX(${transformRate}vw)`;}, 2000);
      }
    }
    setTimeout(() => e.target.disabled = false, 2000);
  })
});

//Set year of copyright
const now = new Date();
const year = now.getFullYear();
const footer = document.querySelector('.footer__copyright');
footer.textContent = `${year} ${footer.textContent}`;