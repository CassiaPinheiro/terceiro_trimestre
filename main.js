function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}
const listaDeTeclas= document.querySelectorAll('.tecla');

let contador=0;

//Estrutura de repetição - enquanto
for(let contador= 0;contador <listaDeTeclas.leigth;contador++){
 const tecla= listaDeTeclas[contador];
 const instrumento = tecla.classList[1];
 const idAudio= `#som_${instrumento}`;
 console.log(instrumento);

 tecla.onclick= function(){
tocaSom(idAudio);
    };
    tecla.onkeydown= function(evento){
        console.log(evento.code);
        if(evento.code==='enter'){
        tecla.classList.add('ativa');
    }
    if(evento.code==='space'){
        tecla.classList.add('ativa');
    }
    console.log(contador);
}
