// shared.js

// Função para carregar um modelo de objeto
async function loadModel(model) {
  try {
    // Exibe uma mensagem no console
    console.log('Loading model:', model);
     // Solicita o carregamento do modelo
    RequestModel(model);
     // Define uma função para aguardar um determinado tempo
    let Delay = (ms) => new Promise((res) => setTimeout(res, ms));
    // Aguarda até que o modelo seja carregado
    while (!HasModelLoaded(model)) {
      await Delay(500);
    }
    // Exibe uma mensagem no console
    console.log('Model loaded:', model);
  } catch (error) {
     // Captura e exibe erros no console
    console.error(error);
  }
}