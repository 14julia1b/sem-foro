function changeLight(color) {
  // Remove a classe 'active' de todas as luzes
  document.getElementById('light-red').classList.remove('active');
  document.getElementById('light-yellow').classList.remove('active');
  document.getElementById('light-green').classList.remove('active');

  // Adiciona a classe 'active' apenas na cor selecionada
  if (color === 'red') {
    document.getElementById('light-red').classList.add('active');
  } else if (color === 'yellow') {
    document.getElementById('light-yellow').classList.add('active');
  } else if (color === 'green') {
    document.getElementById('light-green').classList.add('active');
  }
}

// Inicializa o semáforo com o sinal vermelho aceso ao carregar
window.onload = function() {
  changeLight('red');
};