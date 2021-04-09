/*Desafio
Você deve fazer a leitura de 5 valores inteiros. Em seguida mostre quantos valores informados são pares, quantos valores informados são ímpares, quantos valores informados são positivos e quantos valores informados são negativos.

Entrada
Você receberá 5 valores inteiros.

Saída
Exiba a mensagem conforme o exemplo de saída abaixo, sendo uma mensagem por linha e não esquecendo o final de linha após cada uma.

 
Exemplo de Entrada	Exemplo de Saída
-5
0
-3
-4
12

3 valor(es) par(es)
2 valor(es) impar(es)
1 valor(es) positivo(s)
3 valor(es) negativo(s)
*/

let pares = 0;
let impares = 0;
let positivos = 0;
let negativos = 0;
let i = 0;
let num;

  while (i <= 4){
    num = parseInt(gets());
   if (num % 2 == 0){
       pares++;
   } if (num % 2 != 0) {
       impares++;
   } if (num > 0){
     positivos++;
   } if (num < 0){
       negativos++;
   } i++;
  }
  console.log(pares + " valor(es) par(es)");
  console.log(impares + " valor(es) impar(es)");
  console.log(positivos + " valor(es) positivo(s)");  
  console.log(negativos + " valor(es) negativo(s)");
  
  