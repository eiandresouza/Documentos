# Spawn de arma

Um detalhamento passo a passo do código:

- A função registra o comando e especifica uma função de retorno de chamada que será executada quando o comando for acionado.RegisterCommand'dararma'

- Na função de retorno de chamada, recupera o primeiroargs[0] argumento passado para o comando, que representa o nome da arma que o jogador quer receber.

- O código então verifica se a variável (nome da arma) é verdadeira, indicando que um argumento foi fornecido.arma

- Se um nome de arma válido for fornecido, o código prossegue para Converta o nome da arma para seu valor de hash correspondente usando a função. O valor de hash é armazenado na variável.GetHashKeyhash

- A função é então chamada, passando o ped ID do jogador (), o hash da arma (), a contagem de munição de 100 e dois valores para os dois últimos parâmetros, que representam o equipamento da arma agora e são atributos ocultos.GiveWeaponToPedPlayerPedId()hashfalse

- Depois de dar a arma ao jogador, uma mensagem de confirmação é registrada no console, indicando qual arma o jogador recebeu.

- Se nenhum nome de arma válido for fornecido (quando a variável for falsa), uma mensagem de erro será registrada no console, instruindo o jogador a inserir o nome da arma.arma

- O tratamento de erros é implementado usando um bloco try-catch. Quaisquer erros que ocorram dentro do bloco try serão detectados e a mensagem de erro será registrada no console.


**Proximo desafio:** Enviar arma para outro jogador. 
