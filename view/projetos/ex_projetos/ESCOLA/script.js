function verificarStatus() {
    const nome = document.getElementById('nome').value;
    const media = parseFloat(document.getElementById('media').value);
    const resultadoDiv = document.getElementById('resultado');

    if (!nome || isNaN(media)) {
        resultadoDiv.innerHTML = 'Por favor, preencha todos os campos corretamente.';
        return;
    }

    if (media >= 7) {
        resultadoDiv.innerHTML = `${nome} está <span style="color: green; font-weight: bold;">APROVADO</span>.`;
    } else {
        resultadoDiv.innerHTML = `${nome} está <span style="color: red; font-weight: bold;">REPROVADO</span>.`;
    }
}