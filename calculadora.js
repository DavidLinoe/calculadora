function calcular() {
  var operacao = parseFloat(document.getElementById('operacao').value);
  var n1 = parseFloat(document.getElementById('n1').value);
  var n2 = parseFloat(document.getElementById('n2').value);

  if (operacao == 1) {
    var conta = n1 + n2;
  } else if (operacao == 2) {
    var conta = n1 - n2;
  } else if (operacao == 3) {
    var conta = n1 / n2;
  } else if (operacao == 4) {
    var conta = n1 * n2;
  } else if (operacao == 5) {
    var conta = n1 % n2;
  } else if (operacao == 6) {
    var conta = n1 ** n2;
  } else {
    document.getElementById('resultado').innerHTML =
      '<p>Por favor, insira um operador válidos.</p>';
  }

  if (!isNaN(conta)) {
    document.getElementById('resultado').innerHTML = '<p>' + conta + '</p>';
  } else {
    document.getElementById('resultado').innerHTML =
      '<p>Por favor, insira valores válidos.</p>';
  }
}
