alert('Boas vindas ao jogo do número secreto!!!')
//*A função alert() em JavaScript é usada para exibir uma caixa de diálogo de alerta ao usuário. */

/* Quero criar um local onde possa inserir o valor que será o máximo do
 jogo. Para criar essa lógica, necessito de uma variável*/

 let numeroMaximo = 5000;

// Function para GERAR UM NÚMERO ALEATÓRIO entre  1 e 100
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);

console.log(numeroSecreto)

// let chute = prompt('Escolha um número entre 1 e 30:');
/*a função prompt() é usada para exibir uma caixa de diálogo ao usuário, permitindo que ele insira dados de texto. E a variável 'chute' RECEBE os dados digitados no Prompt, pelo usuário.*/

let chute
let tentativas = 1

// ENQUANTO chute NÃO for igual ao numeroSecreto
while (chute != numeroSecreto) {
  chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}:`)
  // se chute for igual ao número secreto
  if (chute == numeroSecreto) {
    break
  } else if (chute > numeroSecreto) {
    alert(`O número secreto é MENOR que  
${chute}`)
  } else {
    alert(`O número secreto é MAIOR que  
${chute}`)
  }
  // tentativas = tentativas + 1;
  tentativas++
}

//  OPERADOR TERNÁRIO
let palavraTentativa = tentativas > 1 ? 'tentativaas' : 'tentativa';
alert(`Parabéns! Você ACERRTOU!!! ${numeroSecreto} é o NÚMERO SECRETO - Você precisou de       
 ${tentativas} ${palavraTentativa}`)

// let palavraTentativa ACIMA, SUBSTITUI o if, ABAIXO

// if (tentativas > 1) {
//   alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com
// ${tentativas} tentativas`);
// } else {
//   alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com
// ${tentativas} tentativa`);
// }
