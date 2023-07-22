import { Fancybox } from "../node_modules/%40fancyapps/ui/dist/fancybox/fancybox.esm.js";
import { mouseEmCima } from "./MouseEmCima.js";
import { mouselivre } from './MouseLivre.js';
import { selecionarItem } from './carrousel.js';


/* evento de mouse em cima dos cartoes  */

const  adicionandoEventoInicial = ()=>{
    const elementoCartao = document.getElementsByClassName('cartao');
   

    for (let i = 0; i < elementoCartao.length; i++) {
        const cartao = elementoCartao[i];
        cartao.addEventListener("mouseenter",()=>{mouseEmCima()})        
        cartao.addEventListener("mouseleave",()=>{mouselivre()})        
    }
}

/* iniciando evento ao carregar a pagina */

document.addEventListener("DOMContentLoaded",adicionandoEventoInicial(),false);


/* evento pagina interna  */

/* função galeria imagens */
Fancybox.bind('[data-fancybox="galeria"]');
/* procedural */


/* função selecionar item */
const botaoElements = document.querySelectorAll('.botao');

botaoElements.forEach((element) => {
    element.addEventListener('click', () => {
        selecionarItem(element);
    });
});





