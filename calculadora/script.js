function calcular() {
  var nome1 = document.getElementById('nome1').value.trim();
  var nome2 = document.getElementById('nome2').value.trim();
  
  if (nome1 === '' || nome2 === '') {
    alert('Por favor, preencha ambos os nomes.');
    return;
  }
  
  var porcentagem = Math.floor(Math.random() * 101); // Gerar porcentagem aleatória de 0 a 100
  
  var resultado = nome1 + ' e ' + nome2 + ' têm ' + porcentagem + '% de compatibilidade!';
  
  document.getElementById('resultado').textContent = resultado;
}
