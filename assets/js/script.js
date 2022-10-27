//swiper
const buttonsList = document.querySelectorAll(".introduction--swiper--arrow");
const swiper = document.querySelector(".introduction--swiper--list");
let transformRate = 0;

buttonsList.forEach(button => {
  button.addEventListener("click", (e) => {
    
    let direction = e.target.dataset.direction;
    
    if(direction==="previous" /*&& transformRate>-60*/){
      transformRate -= 30;
      swiper.appendChild(swiper.firstElementChild);
    } else if(direction === "next" && transformRate<0){
      transformRate += 30;
    }
    swiper.style.transform = `translateX(${transformRate}vw)`
  })
});
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