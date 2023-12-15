alert('Boas vindas ao jogo do número secreto!!!');
/*A função alert() em JavaScript é usada para exibir uma caixa de diálogo de alerta ao usuário. */

let numeroSecreto = 5;

let chute = prompt('Escolha um número entre 1 e 30:');
/*a função prompt() é usada para exibir uma caixa de diálogo ao usuário, permitindo que ele insira dados de texto. E a variável 'chute' RECEBE os dados digitados no Prompt, pelo usuário.*/

// se chute for igual ao número secreto
if (chute == numeroSecreto) {
    console.log('Isso ai! Você descobriu o número secreto (5)');
} else {
    alert('Você errou :(')
}






