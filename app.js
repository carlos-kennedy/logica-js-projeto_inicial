alert("Olá, tudo bem?");
alert("Boas vindas ao jogo do número da sorte!");
let secretNumber = 29;
let chute = prompt("Escolha um número entre 1 a 30");

if (secretNumber == chute) {
  console.log(`ACERTOU! o número secreto era (${secretNumber})`);
} else {
  console.log("Não acertou.. tente de novo.");
}
