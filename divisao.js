function gerarTabuada(){
    //PEGA O vALOR DO INPUT DO html
    const numeroInput = document.getElementById('numeroInput')
    let numero = parseInt(numeroInput.value)

    //Pega o Elemento onde a Tabuada será Exibida
    const resultadoDiv = document.getElementById('resultado Tabuada')
    
    //Limpa o Conteúdo Anterior
    resultadoDiv.innerHTML = ''

    //Adiciona Título para a Tabuada
    resultadoDiv.innerHTML += `<h2>Tabuada do Número ${numero}: <h2>`

    //Laço de Repetição para Gerar Tabuada de 1 a 10
    for (let i = 1; i <= 10; i++){
        let resultado= numero * i
        resultadoDiv.innerHTML += `<p>${numero} / ${i} = ${resultado}</p>`
    }
}

//Faz a Função gerarTabuada() ser executada quando clicar no botão
const btnGerar = document.getElementById('btnGerar')
btnGerar.addEventListener('click', gerarTabuada)