// Variável global para armazenar o ID do ped do jogador
let playerPed = PlayerPedId();
let securityGuard = null;

// Registrar o comando 'criarseguranaça'
RegisterCommand('criarseguranca', () => {
    try {
        // Obter o ID do servidor do jogador
        let playerServerId = PlayerId();

        // Clonar o ped do jogador para criar o segurança
        securityGuard = ClonePed(playerPed, true, true, 1, false);

        // Obter o ID do grupo do jogador
        let group = GetPedGroupIndex(playerPed);

        // Definir o ped do jogador como líder do grupo
        SetPedAsGroupLeader(playerPed, group);

        // Adicionar o segurança ao grupo do jogador
        SetPedAsGroupMember(securityGuard, group);

        // Fazer o segurança nunca deixar o grupo
        SetPedNeverLeavesGroup(securityGuard, false);

        // Definir a distância máxima de separação entre os membros do grupo
        SetPedGroupMemberPassengerIndex(securityGuard, 5);

        // Ajustar a velocidade de movimento do segurança
        SetPedMovementClipset(securityGuard, "move_m@brave");

        // Fazer o segurança seguir o jogador com um certo deslocamento
        TaskFollowToOffsetOfEntity(securityGuard, playerPed, 0.0, 0.0, 2.0, 5.0, -1, 0.0, true);

        // Fazer o segurança atacar inimigos
        SetPedCombatAttributes(securityGuard, 5, true);

        // Fazer o segurança proteger o líder do grupo
        SetPedCombatAttributes(securityGuard, 46, true);

        // Permitir que o segurança interaja com o ambiente
        SetPedCombatAttributes(securityGuard, 1, true);

        // Registrar o comando 'securityentervehicle'
        RegisterCommand('entrarseguranca', () => {
            try {
                // Obter o veículo que o jogador está usando
                let vehicle = GetVehiclePedIsUsing(playerPed);

                // Instruir o segurança a entrar no veículo
                TaskEnterVehicle(securityGuard, vehicle, -1, 0, 2.0, 1, 0);

                // Exibir uma mensagem de sucesso indicando que o segurança entrou no veículo
                console.log("Segurança entrou no veículo com sucesso!");
            } catch (error) {
                // Exibir uma mensagem de erro no console se algo der errado
                console.error("Ocorreu um erro ao fazer o segurança entrar no veículo:", error);
            }
        });
 
        // Definir um intervalo para verificar a distância entre o segurança e o jogador
        const checkDistanceInterval = setInterval(() => {
            // Obter a distância entre o segurança e o jogador
            let distance = GetDistanceBetweenCoords(
                GetEntityCoords(playerPed),
                GetEntityCoords(securityGuard)
            );

            // Se a distância exceder uma certa faixa, excluir o segurança
            if (distance > 100.0) {
                DeletePed(securityGuard);
                clearInterval(checkDistanceInterval);
                console.log("Segurança excluído por estar muito longe.");
            }
        }, 5000); // Verificar a cada 5 segundos

        // Exibir uma mensagem de sucesso no console
        console.log("Segurança criado com sucesso!");
    } catch (error) {
        // Exibir uma mensagem de erro no console se algo der errado
        console.error("Ocorreu um erro ao criar o segurança:", error);
    }
});
