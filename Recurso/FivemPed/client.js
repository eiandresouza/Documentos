// client.js

// Registra um comando para mudar o modelo do jogador
RegisterCommand('metamorfo', async (source, args) => {
  // Tenta executar o código
  try {
    // Pega o primeiro argumento do comando como o nome do modelo
    let modelName = args[0];
    // Converte o nome do modelo em hash
    let modelHash = GetHashKey(modelName);
    // Carrega o modelo usando a função do shared.js
    await loadModel(modelHash);
    // Muda o modelo do jogador
    SetPlayerModel(PlayerId(), modelHash);
    // Aplica a variação padrão do ped
    SetPedDefaultComponentVariation(PlayerPedId());
  } catch (error) {
    // Captura qualquer erro que possa ocorrer
    console.log('Ocorreu um erro ao mudar o modelo: ' + error.message);
  }

});

