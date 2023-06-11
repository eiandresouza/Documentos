# Super poderes

um detalhamento passo a passo do código:

- A função é usada para registrar um novo comando chamado em FiveM.RegisterCommand'superpowers'

- A função manipulador de comandos é definida com . Não requer nenhum parâmetro.async () => { ... }

- Dentro da função manipulador de comandos, os seguintes superpoderes são ativados:

- um. A força do soco é aumentada definindo o modificador de dano da arma para a arma desarmada () para 500. Isso torna os socos mais poderosos.'WEAPON_UNARMED'

- **b.** A habilidade de super salto é habilitada criando um tick que chama cada tick. Isso permite que o personagem realize saltos mais altos.SetSuperJumpThisFrame(PlayerId())

- **c.** A velocidade do movimento é aumentada criando um tick que chama cada tick. Isso aumenta a velocidade de movimento do personagem.SetPedMoveRateOverride(PlayerPedId(), 1.2)

- **d**. O personagem fica imune ao ragdolling quando atingido por um veículo que usa . Isso evita que o personagem caia ao ser atingido por um veículo.SetPedCanRagdollFromPlayerImpact(PlayerPedId(), false)

- **e.** O personagem é feito invencível a todo dano usando . Isso torna o personagem imune a qualquer tipo de dano.SetPlayerInvincible(PlayerId(), true)

- Uma mensagem de êxito é registrada no console indicando que os superpoderes foram ativados.

- Após um atraso de 30 segundos (30000 milissegundos), os superpoderes são desativados:

- **A.** A força do soco é restaurada ao seu valor original de 1, definindo o modificador de dano da arma para a arma desarmada de volta para 1.

- **b.** A habilidade de super salto é desativada limpando o carrapato que foi criado para o super salto.

- **c.** A sobreposição de velocidade de movimento é eliminada limpando o tick que foi criado para a velocidade de movimento.

- **d.** O personagem tem permissão para ragdoll quando atingido por um veículo por configuração .SetPedCanRagdollFromPlayerImpact(PlayerPedId(), true)

- **e.** A invencibilidade do personagem é removida usando .SetPlayerInvincible(PlayerId(), false)

- Uma mensagem de êxito é registrada no console indicando que os superpoderes foram desativados.

- Se ocorrerem erros durante a execução do código, eles serão capturados pelo bloco e uma mensagem de erro será registrada no console indicando a ocorrência do erro.try-catch

#### Proxima desafio 


- Criar Capacidade de pegar veiculos 
- Criar Capacidade de voar 
- Criar invisibilidade 
- Criar imortalidade

