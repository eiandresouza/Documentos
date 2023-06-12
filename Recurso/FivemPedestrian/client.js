// client.js

// Registra um comando chamado 'createped'
RegisterCommand('createped', async (source, args) => {
    try {
        // Obtém o nome do modelo dos argumentos do comando
        let modelName = args[0];

        // Verifica se um nome de modelo é fornecido
        if (!modelName) {
            console.error('Forneça um nome de modelo válido para o pedestre.');
            return;
        }

        // Carrega o modelo de pedestre
        await loadModel(modelName);

        // Obtém a posição do jogador
        let [x, y, z] = GetEntityCoords(PlayerPedId());

        // Cria o pedestre na posição do jogador
        let ped = CreatePed(28, modelName, x, y, z, 0, false, false);

        // Verifica se o pedestre foi criado com sucesso
        if (!ped) {
            console.error('Falha ao criar o pedestre.');
            return;
        }

        // Define o pedestre como uma entidade de missão
        SetEntityAsMissionEntity(ped, true, true);

        // Define a direção do pedestre para coincidir com a direção do jogador
        SetEntityHeading(ped, GetEntityHeading(PlayerPedId()));

        // Mostra uma mensagem de sucesso
        console.log('Pedestre criado:', modelName);
    } catch (error) {
        console.error(error);
    }
});

