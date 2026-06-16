// Função que irá executar quando clicar no botão btnGerar

function gerarTabuada() {
    // Pega o valor do campo input HTML
    const numeroInput = document.getElementById('numeroInput')
    let numero = parseInt(numeroInput.value)

    // Pega o elemento onde a tabuada será exibida
    const resultadoDiv = document.getElementById('resultadoTabuada')

    // Limpa o conteudo anterior
    resultadoDiv.innerHTML = ''

    // Adiciona um titulo para a tabuada
    resultadoDiv.innerHTML += `<h2>Tabuada do número ${numero}: </h2>`

    // Laço de repetição para gerar tabuada de 1 até 10
    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i
        resultadoDiv.innerHTML += `<p>${numero} * ${i} = ${resultado}</p>`
    }
}

// Faz a função gerarTabuada() ser executada uando clica no botão
const btnGerar = document.getElementById('btnGerar')
btnGerar.addEventListener('click', gerarTabuada)