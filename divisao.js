function gerarTabuada() {
    // Pega o valor do input
    const numeroInput = document.getElementById('numeroInput');
    let numero = parseFloat(numeroInput.value);

    // Pega o elemento onde a tabuada será exibida
    const resultadoDiv = document.getElementById('resultadoTabuada');

    // Limpa o conteúdo anterior
    resultadoDiv.innerHTML = '';

    // Verifica se o valor é válido
    if (isNaN(numero)) {
        resultadoDiv.innerHTML = '<p>Digite um número válido.</p>';
        return;
    }

    // Adiciona título
    resultadoDiv.innerHTML += `<h2>Tabuada de divisão do número ${numero}</h2>`;

    // Gera a tabuada de divisão de 1 a 10
    for (let i = 1; i <= 10; i++) {
        let resultado = numero / i;
        resultadoDiv.innerHTML += `<p>${numero} ÷ ${i} = ${resultado}</p>`;
    }
}

// Executa a função ao clicar no botão
const btnGerar = document.getElementById('btnGerar');
btnGerar.addEventListener('click', gerarTabuada);