class Parquimetro {
    constructor(valor) {
      this.valor = parseFloat(valor);
      this.tempo = 0;
      this.troco = 0;
    }
  
    calcular() {
      if (this.valor < 1 || this.valor > 3) {
        return { erro: "Valor inválido. Insira entre R$1,00 e R$3,00." };
      }
  
      let tempoMax = 120; // minutos
      let tempoCalculado = (this.valor / 3.0) * tempoMax;
  
      if (tempoCalculado > 120) tempoCalculado = 120 ;
  
      this.tempo = Math.floor(tempoCalculado);
  
      let valorUsado = (this.tempo / tempoMax) * 3.0;
      this.troco = parseFloat((this.valor - valorUsado).toFixed(2));
  
      return {
        tempo: this.tempo,
        troco: this.troco
      };
    }
  }
  
  function simular() {
    const valor = document.getElementById("valor").value;
    const parquimetro = new Parquimetro(valor);
    const resultado = parquimetro.calcular();
    const divResultado = document.getElementById("resultado");
  
    if (resultado.erro) {
      divResultado.innerHTML = `<p style="color: red;">${resultado.erro}</p>`;
    } else {
      divResultado.innerHTML = `
        <p>Tempo de permanência: <strong>${resultado.tempo} minutos</strong></p>
        <p>Troco: <strong>R$ ${resultado.troco.toFixed(2)}</strong></p>
      `;
    }
  }
  