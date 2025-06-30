document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formulario-pedido");
  const mensagemStatus = document.getElementById("mensagem-status");

  form.addEventListener("submit", async (e) => {
    e.preventDefault(); // Impede o envio padrão

    const formData = new FormData(form);

    try {
      const resposta = await fetch("../../controller/salvar_formulario.php", {
        method: "POST",
        body: formData
      });

      const resultado = await resposta.json();

      mensagemStatus.textContent = resultado.mensagem;
      mensagemStatus.className = "mensagem-status " + resultado.status;
    } catch (erro) {
      mensagemStatus.textContent = "Erro ao enviar o pedido. Tente novamente.";
      mensagemStatus.className = "mensagem-status erro";
    }
  });
});