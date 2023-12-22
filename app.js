alert('Boas vindas ao jogo do número secreto!!!');
/*A função alert() em JavaScript é usada para exibir uma caixa de diálogo de alerta ao usuário. */

let numeroSecreto = 5;

console.log(numeroSecreto);

// let chute = prompt('Escolha um número entre 1 e 30:');
/*a função prompt() é usada para exibir uma caixa de diálogo ao usuário, permitindo que ele insira dados de texto. E a variável 'chute' RECEBE os dados digitados no Prompt, pelo usuário.*/

let chute;
let tentativas = 1;

// ENQUANTO chute NÃO for igual ao numeroSecreto
while (chute != numeroSecreto) {
  chute = prompt('Escolha um número entre 1 e 30:');
  // se chute for igual ao número secreto
  if (chute == numeroSecreto) {
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto}:)com 
    ${tentativas} tentativas`);
  } else if (chute > numeroSecreto) {
    alert(`O número secreto é MENOR que  
${chute}`);
  } else {
    alert(`O número secreto é MAIOR que  
${chute}`);
  }
  // tentativas = tentativas + 1;
  tentativas++;
}