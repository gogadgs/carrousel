const textosDescritivos = {
    "Html5 semântica": "Nesse projeto foi usado as tags semanticas para facilitar o (SEO) 'search engineer optimization' da máquina de busca do google",
    "Css3": "divido em cada compronente para melhorar manutanção do codigo no qual os elementos generalizados foram estilizados tornando menos camadas de estilização e manipulação ",
    "pseudoClasse CSS3": "Elemento que adicionam adicionam sem a necessidade de uma tag de marcação estilizando após ou antes das tags discriminadas  ",
    "JavaScript": "sem javascript apenas página estática para aprimioração das linguagems de marcação e estilo(CSS3)",
    "media querys":"usada para renderizar cada tela para dar responsividade em cada elemento independentemente da midia apresentada "
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
