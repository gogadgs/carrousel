export const selecionarItem = (item)=>{
    const element = item.id;
    const carroussel = document.querySelector('.carroussel');
    const estilo = carroussel.style.transform;
    const rotateY = estilo.match(/rotateY\((-?\d+deg)\)/i);
    const rotateYDeg = -120 * (Number(element) - 1 );

    const novaTransform = estilo.replace(rotateY[0],`rotateY(${rotateYDeg}deg)`);
    console.log(novaTransform);
   carroussel.style.transform = novaTransform;

   const botaoAtivo = document.querySelector('.botao.botao-ativado');
    botaoAtivo.classList.remove('botao-ativado');
    item.classList.add('botao-ativado');
   
}



