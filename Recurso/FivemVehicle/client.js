// client.js

// Registra o comando para gerar um veículo
RegisterCommand('car', async (source, args) => {
    try {
        // Obtém o modelo do veículo a partir dos argumentos do comando
        const vehicleModel = args[0];

        // Converte o nome do modelo para hash
        const modelHash = GetHashKey(vehicleModel);

        // Carrega o modelo do veículo
        await loadModel(modelHash);

        // Obtém o handle do ped do jogador
        const playerPed = PlayerPedId();

        // Verifica se o jogador está em um veículo
        const currentVehicle = GetVehiclePedIsIn(playerPed, false);

        if (currentVehicle !== 0) {
            // Obtém as coordenadas e a rotação do veículo atual
            const [x, y, z] = GetEntityCoords(currentVehicle);
            const heading = GetEntityHeading(currentVehicle);

            // Se o jogador estiver em um veículo, deleta o veículo atual
            DeleteEntity(currentVehicle);

            // Gera o novo veículo na mesma posição e rotação
            const vehicle = CreateVehicle(modelHash, x, y, z, heading, false, false);

            // Obtém o ID de rede do veículo
            const networkId = NetworkGetNetworkIdFromEntity(vehicle);

            if (networkId !== 0) {
                // Marca o veículo como não mais necessário
                SetVehicleAsNoLongerNeeded(vehicle);

                // Marca o modelo do veículo como não mais necessário
                SetModelAsNoLongerNeeded(vehicleModel);

                // Coloca o jogador dentro do veículo
                SetPedIntoVehicle(playerPed, vehicle, -1);

                // Registra uma mensagem de sucesso
                console.log('Veículo gerado:', vehicleModel);
            } else {
                // Registra uma mensagem de erro se a geração falhar
                console.error('Falha ao gerar veículo:', vehicleModel);

                // Exclui a entidade do veículo se o ID de rede for inválido
                DeleteEntity(vehicle);
            }
        } else {
            // Registra uma mensagem de erro se o jogador não estiver em um veículo
            console.error('Erro: Você não está em um veículo.');
        }
    } catch (error) {
        // Registra uma mensagem de erro se a geração falhar
        console.error('Erro ao gerar veículo:', error);
    }
});
