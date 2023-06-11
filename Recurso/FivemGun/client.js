// client.js

RegisterCommand('dararma', (source, args) => {
  try {
    let arma = args[0]; // pega o primeiro argumento
    // verifica se o argumento é válido
    if (arma) {
      // converte o nome da arma para o hash correspondente
      let hash = GetHashKey(arma);
      // dá a arma para o jogador
      GiveWeaponToPed(PlayerPedId(), hash, 100, false, false);
      // mostra uma mensagem de confirmação
      console.log('Você recebeu a arma ' + arma + '.');
    } else {
      // mostra uma mensagem de erro se o argumento for inválido
      console.log('Você precisa digitar o nome da arma.');
    }
  } catch (error) {
    console.error(error);
  }
}, false);

/*
weapon_knife
weapon_pistol
weapon_pumpshotgun
weapon_stickybomb
weapon_heavysniper
*/