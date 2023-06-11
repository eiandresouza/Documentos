// shared.js

// Função para carregar um modelo pelo hash
async function loadModel(hash) {
  console.log('carregando modelo');
  // Solicita o modelo pelo hash
  RequestModel(hash);
  // Cria uma função para esperar um tempo
  Delay = (ms) => new Promise((res) => setTimeout(res, ms));
  // Verifica se o modelo já foi carregado
  while (!HasModelLoaded(hash)) {
    // Espera um segundo
    await Delay(1000);
  }
  console.log('modelo carregado');
}