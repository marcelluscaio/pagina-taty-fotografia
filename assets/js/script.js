//swiper
const buttonsList = document.querySelectorAll(".introduction--swiper--arrow");
const swiper = document.querySelector(".introduction--swiper--list");
let transformRate = -99.99;

buttonsList.forEach(button => {
  button.addEventListener("click", (e) => {    
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
        swiper.style.transition = "none";
        swiper.style.transition = "transform 2s ease-in-out";
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
        swiper.style.transition = "none";
        swiper.style.transition = "transform 2s ease-in-out";
      }
    }
  })
});

//Tentar manipular a classe


//15 itens, jogar uma pro final, mexer ul, depois fazer a tansição


//mudar src das que estao invisiveis
//problema: se eu estou movendo o ul, alguma hora vai acabar
//quando a o carrossel atingir deteminado tamanho, cortar 5 imagens
// 1 2 3 4 5 | 1 2 3 4 5 | 1 2 3 4 5
// se 1 2 3 4 5 1 2 3 4 5 | 1 2 3 4 5|
// 

//Usar uma coringa
// 1 2 3 4 5 1 2 3 4 5 1 2 3 4 5 
//desliza, coloca uma ponta na outra

//desafio: fazer infinito
/*    swiper.appendChild(element) */
      //      swiper.prepend(swiper.lastElementChild);
//      ;
      //Excluir o primeiro
      //Inserir no ultimo
/*             let element = swiper.lastElementChild.cloneNode();
      swiper.prepend(element); */

      /*       swiper.appendChild(swiper.firstElementChild);
      swiper.style.transition = "transform 0s ease-in-out"; */

      /*       swiper.prepend(swiper.lastElementChild);
      swiper.style.transition = "transform 0s ease-in-out"; */