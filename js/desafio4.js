/*Desafio
Crie um programa que leia 6 valores. Você poderá receber valores negativos e/ou positivos como entrada, devendo desconsiderar os valores nulos. Em seguida, apresente a quantidade de valores positivos digitados.

Entrada
Você receberá seis valores, negativos e/ou positivos.

Saída
Exiba uma mensagem dizendo quantos valores positivos foram lidos assim como é exibido abaixo no exemplo de saída. Não esqueça da mensagem "valores positivos" ao final.

 
Exemplo de Entrada	Exemplo de Saída
7
-5
6
-3.4
4.6
12

4 valores positivos */

//ok
let valorespositivos = 0;
let contador = 0;
let entradas;

  while (contador <= 5){
    entradas = parseInt(gets());
   if (entradas > 0){
     valorespositivos++;
   }
    contador++;
  }
  
  console.log(valorespositivos + " valores positivos");

  /* for(var i = 0; i < 6; i++){    
   let v = gets();    
   if (v > 0) { positivos++; }    
   }    
   console.log(positivos+" valores positivos");var positivos = 0;  */













