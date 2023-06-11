// client.js

// Registra um novo comando chamado 'createobject'
RegisterCommand('createobject', async (source, args) => {
  try {
    // Obtém o modelo de objeto do argumento do comando
    let objectModel = args[0];
    // Verifica se o modelo do objeto é fornecido
    if (objectModel) {
      // Carrega o modelo de objeto
      await loadModel(objectModel);
      // Obtém as coordenadas do jogador
      let [x, y, z] = GetEntityCoords(PlayerPedId(), true);
      // Cria o objeto nas coordenadas do jogador
      CreateObject(objectModel, x, y, z, true, true, true);
     // Registra uma mensagem no console
      console.log('Objeto criado:', objectModel);
    } else {
      // Log an error message if the object model is missing
      console.log('Você precisa fornecer o nome do modelo de objeto.');
    }
  } catch (error) {
    // Captura e exibe erros no console
    console.error(error);
  }
});
