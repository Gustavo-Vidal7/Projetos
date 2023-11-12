function adicionar() {
    let primeiroNumero = parseInt(document.getElementById("perguntas1").value)
    let codigo = document.getElementById("codigo").value
    let segundoNumero = parseInt(document.getElementById("perguntas3").value)
    let carrinho = document.getElementById('resultado')

    if (codigo == 1) {
      let resultado1 = primeiroNumero + segundoNumero
      carrinho.innerHTML = `<p id="resultado">Resultado: <span>${resultado1}</span></p>`
      console.log(resultado1)
    } 
    if (codigo == 2) {
      let resultado2 = primeiroNumero - segundoNumero
      carrinho.innerHTML = `<p id="resultado">Resultado: <span>${resultado2}</span></p>`
      console.log(resultado2)
    }
    if (codigo == 3) {
      let resultado3 = primeiroNumero * segundoNumero
      carrinho.innerHTML = `<p id="resultado">Resultado: <span>${resultado3}</span></p>`
      console.log(resultado3)
    }
    if (codigo == 4) {
      let resultado4 = primeiroNumero / segundoNumero
      carrinho.innerHTML = `<p id="resultado">Resultado: <span>${resultado4.toFixed(2)}</span></p>`
      console.log(resultado4)
    }

    if (primeiroNumero == '') {
      alert('Bote um número para fazer o calculo')
    }
    if (codigo == '') {
      alert('Bote um número para fazer o calculo')
    }
    if (segundoNumero == '') {
      alert('Bote um número para fazer o calculo')
    }
  }