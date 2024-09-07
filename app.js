function pesquisar() {
    // Seleciona a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
let campoPesquisa = document.getElementById ("campo-pesquisa").value

// se campoPesquisa for uma string sem nada 
if (campoPesquisa == "") {
    section.innerHTML = "<p>Nada foi encontrado.</p>"
    return
}

campoPesquisa = campoPesquisa.toLowerCase()

console.log(campoPesquisa);

    // Inicializa uma string vazia para armazenar o HTML dos resultados
    let resultados = "";
    let jogador = "";
     
    // Itera sobre cada dado da lista de dados e constrói o HTML para cada resultado
    for (let dado of dados) {
        jogador = dado.jogador.toLowerCase()
        // se titulo includes campoPesquisa 
        if (jogador.includes(campoPesquisa)) {
            // Cria um elemento HTML para exibir as informações de um jogador
            resultados += `
            <div class="item-resultado">
              <h2>
                <a href="#" target="_blank">${dado.jogador}</a>
              </h2>
              <p class="discricao-meta">${dado.descricao}</p>
              <a href="${dado.link}" target="_blank">Mais informações sobre o jogador.</a>
            </div>
          `;
        }
            
        console.log(dado.jogador.includes(campoPesquisa))
    }

if (!resultados) {
    resultados = "<p>Tente pesquisar algo relacionado ao jogador em mente.</p>"

}

    // Insere o HTML dos resultados na seção selecionada
    section.innerHTML = resultados;
  }