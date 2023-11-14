//a função que deve ser executada é tocaSom, mas que som? Nesse caso, será o parâmetro idElementoAudio. Ou seja, o endereço da tecla será procurado no htmi e reproduzido.
function tocaSom(idElementoAudio){
    const elemento = document.querySelector(idElementoAudio);
//se o elemento pesquisado for igual a "inexistente", o alerta de elemento não encontrado aparecerá.
    if (elemento===null){
    alert('elemento não encontrado');
}
//se o elemento existir, a função play daquele elemento acontecerá, ou seja, a tecla será reproduzida
if (elemento !=null && elemento.localName==='audio'){
elemento.play();
   }else{
    alert('elemento não encontrado');
   }
}
//querySelector encontra as informações da tecla pesquisada no documento
const listaDeTeclas= document.querySelectorAll('.tecla');
//Estrutura de repetição - enquanto
//para que as teclas não sejam repetidas de maneira infinita, criamos o for, com valor de inicio 0, e valor final chamado de contador ‹ listaDeTeclas length, para que a repetição seja exatamente do tamanho da nossa lista, que é de 9 teclas.
for(let contador= 0;contador <listaDeTeclas.leigth;contador++){
 const tecla= listaDeTeclas[contador];
 // classList armazena todas as informações do elemento pesquisado.
 const instrumento = tecla.classList[1];
 // o idAudio é responsável por identificar o som do botão pesquisado.
 const idAudio= `#som_${instrumento}`;

 console.log(instrumento);

 tecla.onclick= function(){
tocaSom(idAudio);
    };
    tecla.onkeydown= function(evento){
        if(evento.code==='enter'){
        tecla.classList.add('ativa');
    }
    if(evento.code==='Enter'||evento.code==='Space'){
        tecla.classList.add('ativa');
    }
}
    tecla.onkeyup=function(){
        tecla.classList.remove('ativa');
    }
    console.log(instrumento);
    console.log(contador);
    }
