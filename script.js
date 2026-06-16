function gerarTabuada(){

    let numero = Number(
        document.getElementById("numero").value
    );

    let resultado =
        document.getElementById("resultado");

    resultado.innerHTML = "";

    if(isNaN(numero)){

        resultado.innerHTML =
        "Digite um número.";

        return;
    }

    for(let i = 1; i <= 10; i++){

        resultado.innerHTML +=

        `<div class="linha">

        ${numero} + ${i}
        =
        ${numero + i}

        </div>`;
    }
}