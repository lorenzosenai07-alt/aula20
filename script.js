let idadeUsuario = +prompt("Qual é a sua idade?");

if (idadeUsuario >= 18) {
    console.log("Acesso liberado! Divirta-se.");
} else {
    console.log("Acesso negado. Você é menor de idade.");
}

const senhaCorreta = "front123";
let senhaDigitada = prompt("Digite a senha de acesso:");

if (senhaDigitada === senhaCorreta) {
    console.log("Login efetuado com sucesso!");
} else {
    console.log("Senha incorreta. Tente novamente.");
}

let valorCompra = +prompt("Digite o valor da compra:");

if (valorCompra > 100) {
    valorCompra = valorCompra - 10;
}

console.log("O total a pagar é: " + valorCompra);

let quantidade = +prompt("Digite a quantidade de produtos:");
let valorGasto = +prompt("Digite o valor gasto:");
let pontos = 10;

if (quantidade >= 5) {
    pontos = pontos + 50;
}

if (valorGasto >= 200) {
    pontos = pontos + 100;
}

console.log("Total de pontos: " + pontos);

let salarioBase = +prompt("Digite o salário base:");
let totalVendas = +prompt("Digite o total de vendas:");
let notaAvaliacao = +prompt("Digite a nota da avaliação:");

let salarioFinal = salarioBase;

if (totalVendas > 5000 && notaAvaliacao >= 8) {
    salarioFinal = salarioBase + (salarioBase * 0.15);
}

console.log("Salário final: " + salarioFinal);

let valorPedido = +prompt("Digite o valor do pedido:");
let distanciaKm = +prompt("Digite a distância em km:");

let taxa = 10;

if (valorPedido < 30 || distanciaKm > 10) {
    taxa = taxa + 5;
}

let valorTotal = valorPedido + taxa;

console.log("Valor total: R$ " + valorTotal);