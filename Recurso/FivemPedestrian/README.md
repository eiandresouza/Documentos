# Criação de Pedestres

Um detalhamento passo a passo do código:

- Começamos registrando um comando chamado usando a função. Este comando será usado para gerar pedestres.'createped'RegisterCommand

- Quando o comando é executado, recuperamos o nome do modelo dos argumentos do comando. Isso é feito usando , que corresponde ao primeiro argumento passado após o comando.'createped'args[0]

- Realizamos uma verificação para garantir que um nome de modelo seja fornecido. Caso contrário, exibimos uma mensagem de erro e retornamos do comando.

- Em seguida, chamamos a função para carregar o modelo de pedestre de forma assíncrona. Essa função é definida no arquivo .js compartilhado.loadModel

- Dentro da função, exibimos uma mensagem no console indicando que o modelo está sendo carregado.loadModel

- Usamos a função para solicitar o modelo a ser carregado.RequestModel

- Entramos em um loop que espera até que o modelo seja carregado. Dentro do loop, aguardamos um atraso de 500 milissegundos usando a função.Delay

- Depois que o modelo é carregado, exibimos uma mensagem no console indicando que o modelo foi carregado com êxito.

- Voltando ao comando, procedemos para recuperar a posição do jogador usando . A posição do jogador será usada como posição para o novo pedestre.'createped'GetEntityCoords(PlayerPedId())

- Criamos o pedestre usando a função. Passamos como primeiro parâmetro para especificar que o pedestre é um civil.CreatePed28

- Verificamos se a criação de pedestres foi bem-sucedida. Caso contrário, exibimos uma mensagem de erro e retornamos do comando.

- Definimos o pedestre como uma entidade de missão usando a função. Isso garante que o pedestre não será excluído quando o jogador estiver longe.SetEntityAsMissionEntity

- Nós definimos a cabeça do pedestre para coincidir com a cabeça do jogador usando a função. Isso alinha a direção do pedestre com a direção do jogador.SetEntityHeading

- Finalmente, exibimos uma mensagem de sucesso no console indicando que o pedestre foi criado.

- Esse detalhamento fornece uma visão geral da lógica do código e da sequência de etapas executadas ao executar o comando.'createped'