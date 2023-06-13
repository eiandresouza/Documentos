# Spawn de Veiculos

Um detalhamento passo a passo do código:

- Registramos um comando chamado 'carro' usando a função. Este comando é usado para gerar um veículo.RegisterCommand

- Dentro do retorno de chamada do comando, extraímos o nome do modelo do veículo dos argumentos do comando e o convertemos em um hash usando .GetHashKey
- Usamos a função para carregar de forma assíncrona o modelo do veículo. Essa função solicita que o modelo seja carregado e aguarda até que ele seja carregado usando um loop de atraso.loadModel

- Uma vez que o modelo é carregado, obtemos o punho ped do jogador usando e suas coordenadas usando .PlayerPedIdGetEntityCoords
- Criamos o veículo usando , passando o hash do modelo, coordenadas do jogador e outros parâmetros. Isso gera o veículo no mundo do jogo.CreateVehicle
- Para garantir que o veículo seja totalmente criado e sincronizado com a rede, adicionamos um atraso de 1 segundo usando a função.delay
- Após o atraso, usamos para obter o ID de rede do veículo. Se o ID de rede for válido (não 0), significa que o veículo foi gerado e sincronizado com êxito.NetworkGetNetworkIdFromEntity
- Se o veículo for válido, marcamos como não sendo mais necessário usar e marcamos o modelo do veículo como não sendo mais necessário usar.SetVehicleAsNoLongerNeededSetModelAsNoLongerNeeded
Registramos uma mensagem de sucesso indicando que o veículo foi gerado com sucesso.
- Se o veículo não for válido (ID de rede é 0), significa que houve um erro ao gerar o veículo. Registramos uma mensagem de erro e excluímos a entidade do veículo usando o .DeleteVehicle
- Se algum erro ocorrer durante o processo, registramos uma mensagem de erro indicando a falha na desova do veículo.