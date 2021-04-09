//var nome = "Ailton Ramos";
//var idade = 15;
//var idade2 = 10;
//var idade2 = "10";
//alert(nome + " tem " + idade + " anos.");
//alert(idade + idade2);
//var frase = "Japão é o melhor time do mundo!"

//console.log(nome);
//console.log(idade + idade2);
//alert(frase.replace("Japão", "Brasil"));
//console.log(frase.replace("Japão", "Brasil")); //Troca a frase.
//console.log(frase.toLowerCase()); //Texto em minúsculo.
//console.log(frase.toUpperCase()); //Texto em maiúsculo.
//console.log(frase.replace("Japão", "Brasil").toUpperCase()); //Texto convertido em maiúsculo.

/*
var lista = ["maçã", "pêra", "laranja"];
console.log(lista);
//console.log(lista[1]);
//alert(lista[1]);
lista.push('uva'); //insere esse elemento.
console.log(lista);
lista.pop();//retira o último elemento.
console.log(lista);
console.log(lista.length);//tamanho ada lista
console.log(lista.reverse());//reverte os elementos
console.log(lista.toString());//converte par string
console.log(lista.toString());//converte par string
console.log(lista[0]);//busca o 1º elemento
console.log(lista.toString()[0]);//busca a 1ª string
console.log(lista.join(" - "));//Transfora em string e consegue colocar o que quiser.

//dicionário
//var fruta = {nome:"maçã", cor:"vermelha"}
//console.log(fruta.nome);
//alert(fruta.cor);

//lista de dicionários
var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[0].nome);
alert(frutas[1].nome);
*/

/*
var idade = prompt("Qual a sua idade?");//consegue coletar dados inserido pelo usuário.
if (idade >= 18) {
    alert("Você já é maior de idade!")
} else {
    alert("Você ainda é menor de idade!");
};
 */

/*
var count = 0;
while (count <= 5) {
    console.log(count);
    alert(count);
    count++; //count= count + 1;
};
 */

/*
var count;
for (count = 0; count <= 7; count++){
    alert(count);
}
*/

/* 
//Trabalhar com data.
var d = new Date();
//alert(d);
alert(d.getMonth() + 1); //exibe o número do mês atual, mas tem que somar + 1;
alert(d.getDate()); //exibe os minutos
alert(d.getHours()); //exibe os minutos
alert(d.getMinutes()); //exibe os minutos
*/

/*
function soma(n1, n2) {
    return n1 + n2;
}

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}

alert(soma(5, 10));
alert(setReplace("Vai Japão", "Japão", "Brasil"));
 */

/*
var validar = 0; //variável global.
function validaIdade(idade){
    //var validar; //se usar a variável local, ele usa somente aqui.
    if (idade >= 18){
        validar = true;
    } else{
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual sua idade?");
validaIdade(idade);
console.log(validar); //o console chama a variável global, que está fora da função.
 */

function clicou(){ //Consegue-se manipular qualquer elemento por causa do DOM.
    //injetar um texto ou qualquer coisa.
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar.</b>"; //b de bold que é negrito
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar.");
}

function redirecionar(){
    window.open("https://globallabs.academy"); //Abre em uma nova aba/janela
    window.location.href = "https://globallabs.academy"; //não é função, estamos mudando a referência dele. Abre na mesma aba/janela.
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse.";
    //alert("Trocar texto");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui.";
}

function load(){
    alert("Página carregada!");
}

function funcaoChange(elemento){
    console.log(elemento.value);//pega o valor do elemento.
}