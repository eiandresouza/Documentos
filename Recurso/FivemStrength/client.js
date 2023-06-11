// Ativar os poderes
RegisterCommand('poderes', async ()=>{
    try {
        // Aumentar a força do soco
        SetWeaponDamageModifier('WEAPON_UNARMED', 10) // valor reduzido de 1000 para 10
        // Permitir o super salto
        superJumpTick = setTick(()=>{
            SetSuperJumpThisFrame(PlayerId())
        })
        // Aumentar a velocidade de movimento
        speedTick = setTick(()=>{
            SetPedMoveRateOverride(PlayerPedId(), 1.2) // valor reduzido de 2.0 para 1.2
        })
        // Impedir que o personagem caia quando é atingido por um carro
        SetPedCanRagdollFromPlayerImpact(PlayerPedId(), false)
        // Tornar o personagem imune a qualquer tipo de dano
        SetPlayerInvincible(PlayerId(), true)

        // Mostrar mensagem de sucesso
        console.log("Poderes ativados!")

        // Desativar os poderes depois de 30 segundos (30000 milissegundos) // valor reduzido de 60000 para 30000
        await new Promise(resolve => setTimeout(resolve, 30000));
        
        // Restaurar a força do soco
        SetWeaponDamageModifier('WEAPON_UNARMED', 1)
        // Desativar o super salto
        clearTick(superJumpTick)
        // Restaurar a velocidade de movimento
        clearTick(speedTick)
        // Permitir que o personagem caia quando é atingido por um carro
        SetPedCanRagdollFromPlayerImpact(PlayerPedId(), true)
        // Tornar o personagem vulnerável
        SetPlayerInvincible(PlayerId(), false)

        // Mostrar mensagem de sucesso
        console.log("Poderes desativados!")
    } catch (error) {
        // Mostrar mensagem de erro
        console.error("Ocorreu um erro ao executar o script: " + error.message)
    }
})
