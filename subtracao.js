function gerarTabuada() {
    // Pega o valor do input
    const numeroInput = document.getElementById('numeroInput');
    let numero = parseFloat(numeroInput.value);

    // Pega o elemento onde a tabuada será exibida
    const resultadoSub = document.getElementById('resultadoTabuada');

    // Limpa o conteúdo anterior
    resultadoSub.innerHTML = '';

    // Adiciona título
    resultadoSub.innerHTML += `<h2>Tabuada de subtração do número ${numero}</h2>`;

    // Gera a tabuada de Subtração de 1 a 10
    for (let i = 1; i <= 10; i++) {
        let resultado = numero - i;
        resultadoSub.innerHTML += `<p>${numero} - ${i} = ${resultado}</p>`;
    }
}

// Executa a função ao clicar no botão
const btnGerar = document.getElementById('btnGerar');
btnGerar.addEventListener('click', gerarTabuada);