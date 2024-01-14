/**
 * Lucas Alves pereira tem 18 anos, pesa 90 kg
 * tem 1.80 de altura e seu IMC é de 27.7777777777775
 * Lucas alves Naceu em 2005
 */
const nome = 'Lucas';
const sobrenome = 'alves';
const idade = 18;
const peso = 90;
const alturaEmCm = 1.80;
let imc; // peso / (altura * altura)
let anoNacimento;

imc = peso / (alturaEmCm * alturaEmCm)
anoNacimento = 2023 - idade;

// + 

console.log(`${nome} ${sobrenome} tem ${idade} anos pesa ${peso} kg`)
console.log(`${nome} naceu em ${anoNacimento} e`)
console.log(`tem cerca de ${alturaEmCm} de altura e seu IMC é de ${imc}`);
