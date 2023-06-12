// shared.js

// Função para carregar um modelo pelo nome
async function loadModel(model) {
    try {
        // Exibe uma mensagem no console
        console.log('Loading model:', model);

        // Solicita o modelo
        RequestModel(model);

        // Espera até que o modelo seja carregado
        while (!HasModelLoaded(model)) {
            await Delay(500);
        }

        // Exibe uma mensagem no console
        console.log('Model loaded:', model);
    } catch (error) {
        console.error(error);
    }
}
