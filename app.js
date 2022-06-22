let numero = 1;
console.log(numero);

numero = 3;
console.log(numero);

numero = "teste";
console.log(numero);

numero = [1, 2, 3, 4];
console.log(numero);

const nome = "Fred";
console.log(nome);

if (nome == "Fred") {
    console.log(nome);
}

for (let i = 0; i <= 10; i++) {
    console.log(i);
}

function dizerOla() {
    console.log("Olá");
}

dizerOla();

function soma(numero1, numero2) {
    return numero1 + numero2;
}

const resultado = soma(3, 2);
console.log(resultado);

const num = 9;
const maiorQue10 = num > 10 ? "Maior que 10" : "Menor ou igual a 10";
console.log(maiorQue10);

const quantidade = 20;
const temEstoque = quantidade ?? "Estoque acabou";
console.log(temEstoque);