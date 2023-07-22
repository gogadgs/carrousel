 const textosDescritivos = {
    "Html5 sem semântica": "Nesse projeto não foi usado as tags semanticas e por isso influenciarár no motor de busca do google em que cada página tem um robo que conduz e coloca como primeiro",
    "Css3": "divido em cada compronente para melhorar manutanção do codigo no qual a técnica 'BEM'(block element modifier) foi usado para dar maior poder de manipulação de camadas ao desenvolvedor ",
    "Arquivo Json": "Arquivo Json com informações padrões para futura escolha de como apresenta ou renderiza a página estilizando-a",
    "pseudoClasse CSS3": "Elemento que adicionam adicionam sem a necessidade de uma tag de marcação ",
    "JavaScript": "Javascript com evento embutido no Html , funções procedurais para realizar tais eventos e introduzindo dados nos elementos selecionados na marcação HTML"
  };

const  atualizarDescricao = (descricao)=> {
    const descricaoTexto = document.querySelector('.descrição-texto p');
    descricaoTexto.innerHTML = descricao;
  }

 const pilulas = document.querySelectorAll('.pilula li');
 pilulas.forEach((pilula) => {
    pilula.addEventListener('click', () => {
      const descricao = pilula.textContent.trim();
      const descricaoPersonalizada = textosDescritivos[descricao];
      atualizarDescricao(descricaoPersonalizada);
    });
  });
