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
            // Se o jogador estiver em um veículo, deleta o veículo atual
            DeleteEntity(currentVehicle);
        }

        // Obtém as coordenadas do jogador
        const [x, y, z] = GetEntityCoords(playerPed);

        // Gera o veículo
        const vehicle = CreateVehicle(modelHash, x, y, z, 0, false, false);

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
    } catch (error) {
        // Registra uma mensagem de erro se a geração falhar
        console.error('Erro ao gerar veículo:', error);
    }
});
