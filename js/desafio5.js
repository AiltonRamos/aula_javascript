/*let line = gets().split(" ");
let A = parseInt(line[0]);
let B = parseInt(line[1]);
let total = 0; // Altere o valor da variável com o cálculo esperado
console.log("X = " + total); 

Desafios
Crie um programa que leia um número e mostre os números pares até esse número, inclusive ele mesmo.

Entrada
Você receberá 1 valor inteiro N, onde N > 0.

Saída
Exiba todos os números pares até o valor de entrada, sendo um em cada linha. 

 
Exemplo de Entrada	Exemplo de Saída
6	
2
4
6

*/

let numero = gets();

let par = 2;

for (par = 2; par <= numero; par += 2) {
  console.log(par);
} 

