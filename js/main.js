
/*
var nome = "Fernando Armoa";
var idade = 41;
var idade2 = 50;
var frase = "Japão é o melhor time do mundo!";
//alert("Bem vindo aos " + idade + "! " + nome);
console.log(nome);
console.log(idade);
console.log(idade2);
console.log(idade + " + " + idade2 + " = " + (idade + idade2));
console.log(idade + idade2);
console.log("Bem vindo aos " + idade + "! " + nome);
console.log(frase);
console.log(frase.toLowerCase()); // deixa tudo em minúsculo
console.log(frase.toUpperCase()); // deixa tudo em maiúsculo

console.log(frase.replace("Japão", "Corrigindo: Brasil")); // Troca a palavra "Japão" por "Corrigindo: Brasil"

var lista = ["maçã", "pêra", "laranja"]; // cria com array com 3 elementos
console.log(lista); // mostra a lista inteira
console.log(lista.length); // mostra o tamanho do array
console.log(lista[1]); // mostra o segundo elemento da lista
lista.push("uva"); // acrescenta mais um elemento a lista
console.log(lista);
console.log(lista.length);
console.log(lista[3]);

lista.pop(); // remove o último item da lista
console.log(lista);
console.log(lista.length);

console.log(lista.reverse()); // inverte a ordem dos elementos da lista
console.log(lista.toString()); // converte os elementos da lista em uma única cadeia de string
console.log(lista.toString()[0]); // mostra o primeiro caracter da lista convertida em cadeia de string.
console.log(lista);
console.log(lista.join(" - ")); // converte os elementos da lista em uma cadeia de string e troca o sinal de separação entre os elementos

var fruta = {nome:"maçã", cor:"vermelha"} // dicionário, cria um objeto fruta com 2 propriedades "nome" e "cor"
console.log(fruta);
console.log(fruta.nome); // mostra o conteúdo da propriedade nome do objeto fruta
console.log(fruta.cor); // mostra o conteúdo da propriedade cor do objeto fruta

var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"}] // cria uma lista de dicionários
console.log(frutas);
console.log(frutas[0].nome);
console.log(frutas[1].cor);

// Exemplo de utilização de condicional IF-ELSE

var idade = prompt("Qual a sua idade?"); // interage com o usuário solicitando a idade e armazena o resultado na variável idade

if (idade >= 18) // condicional IF, verifica se a idade é maior ou igual a 18
    console.log("maior de idade"); // caso o resultado seja verdadeiro (true) - mostra a frase "maior de idade"
else
    console.log("menor de idade"); // caso o resultado seja falso (false) - mostra a frase "menor de idade"

// como só existe um comando a ser executado, tanto no if como no else, não é necessário a utilização do símbolo "{}"

// Exemplo de utilização de laço de repetição WHILE

var count = 0;

console.log("Exemplo de utilização do laço while");
while (count <= 5) // enquanto a condição for falsa, ou seja, enquanto o count for menor ou igual a 5 ele entra no laço e executa os comandos.
{
    console.log(count);
    count++; // incrementa a varável count com 1, é a mesma coisa que = count = count + 1
}

var numero;

console.log("Exemplo de utilização do laço for");
for (numero = 0; numero <= 5; numero++)
{
    console.log(numero);
}

var d = new Date(); // cria uma instância de um objeto do tipo Date
console.log(d); // mostra a data atual completa.
console.log(d.getMonth() + 1); // chama o método getMonth() do objeto d, o qual retorna no mês atual do objeto d, ele inicia sempre em 0, então é necessário acrescentar 1 ao seu retorno.
console.log(d.getMinutes()); // chama o método getMinutes() do objeto d, o qual retorna os minutos atuais da hora do objeto d
console.log(d.getDay()); // chama o método getDay() do objeto d, o qual retorno em número inteiro o dia da semana
console.log(d.getHours()); // chama o método getHours() do objeto d, o qual retorno a hora atual do objeto d


var num1 = parseInt(prompt("Digite o primero número:"));
var num2 = parseInt(prompt("Digite o segundo número:"));

function soma(n1, n2)
{
    return n1 + n2;
}

alert("O resultado da soma é " + soma(num1 , num2));

var idade = parseInt(prompt("Digite sua idade"));
function validarIdade(idade)
{
    var validar = false;
    if (idade >= 18)
        validar = true;

    return validar;
}

console.log(validarIdade(idade));

*/

function clicou()
{
    document.getElementById("agradecimento");
    console.log(document.getElementById("agradecimento")); // retorno o elemento html inteiro cujo id é "agradecimento"
    console.log(document.getElementById("agradecimento").textContent); // retorna apenas o conteúdo "texto" do elemento cujo id é "agradecimento"

    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";

    console.log(document.getElementById("agradecimento").textContent);

    //alert("obrigado por clicar!");
}

function redirecionar()
{
    window.open("http://ww1.globallabs.academy/", target="_blank");
    window.location.href = "http://ww1.globallabs.academy/";
}

/*
function alterar()
{
    var textoAtual = document.getElementById("trocaTexto").innerHTML;
    if (textoAtual == "Passe o mouse aqui")
        document.getElementById("trocaTexto").innerHTML = "Obrigado por passar o mouse";
    else
        document.getElementById("trocaTexto").innerHTML = "Passe o mouse aqui";
    
}
*/

function alterar(elemento)
{
    //document.getElementById(elemento).innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento)
{
    //document.getElementById(elemento).innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load()
{
    alert("Página carregada");
}

function funcaoChange(elemento)
{
    console.log(elemento.value);
}