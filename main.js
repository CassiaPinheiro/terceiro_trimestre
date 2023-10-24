function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
const listaDeTeclas= document.querySelectorAll('.tecla');
}
listaDeTeclas[0].onclick= tocaSom;

let contador=0;

//Estrutura de repetição - enquanto
while(contador<listaDeTeclas.length){
    const teclas= listaDeTeclas[contador];
 const instrumento = listaDeTeclas[contador].classList[1];
 const idAudio= '#som_$ {instrumento}';
 console.log(instrumento);
 listaDeTeclas[contador].onclick= function(){

    };
    contador= contador + 1;
}
