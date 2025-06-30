//1. ouvir o evento de quando o usuario sair do campo de cep
document.getElementById("cep").addEventListener("blur",(evento) =>{
    const elemento = evento.target;
    const cepInformado = elemento.value;

    //2. validar CEP
    if(!(cepInformado.length === 8))
        return;


    //3. fazer bussca no ViaCep
    //3.1 promessa de que o fatch vai buscar esse recurso
    fetch(`https://viacep.com.br/ws/${cepInformado}/json/`)
        .then(response => response.json())
        .then(data => {
            //3.2 processamento da pagina
            if(!data.erro){
                document.getElementById('logradouro').value = data.logradouro;
                document.getElementById('bairro').value = data.bairro;
                document.getElementById('cidade').value = data.localidade;
                document.getElementById('estado').value = data.uf;
            }else{
                alert("CEP não encontrado");
            }          
        })
        .catch(error => console.error("Erro ao buscar o CEP:", error));
})



