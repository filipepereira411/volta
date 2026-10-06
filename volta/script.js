function calcularReembolso() {
  const quantidade = document.getElementById('embalagens').value;
  const taxaDeposito = 0.10; // 0,10€ por embalagem
  const total = quantidade * taxaDeposito;
  
  document.getElementById('resultado').innerHTML = `Total a receber: <strong>${total.toFixed(2)}€</strong>`;
}
