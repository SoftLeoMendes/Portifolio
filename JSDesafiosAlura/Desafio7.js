var escolha = prompt("Bem vindo a calculadora!\nDigite:\n1-Adição\n2-Subtração\n3-Multriplicação\n4-Divisão\n5-Sair");
while(escolha != 5){
    if(escolha==1){
        adicao();
    }
    else if(escolha ==2){
        substrcao();
    }
    else if(escolha ==3){
        multriplicacao();
    }
    else if(escolha == 4){
        divisao();
    }
    var escolha = prompt("Bem vindo a calculadora!\nDigite:\n1-Adição\n2-Subtração\n3-Multriplicação\n4-Divisão\n5-Sair");

}

function adicao(){
    var num1 = prompt("Digite o primeiro valor");
    var num2 = prompt("Digite o segundo valor");
    var resultado =  parseInt(num1)+parseInt(num2);
    console.log(resultado);
}
function substrcao(){
    var num1 = prompt("Digite o primeiro valor");
    var num2 = prompt("Digite o segundo valor");
    var resultado =  num1 - num2;
    console.log(resultado);
}
function multriplicacao(){
    var num1 = prompt("Digite o primeiro valor");
    var num2 = prompt("Digite o segundo valor");
    var resultado =  num1 * num2;
    console.log(resultado);
}
function divisao(){
    var num1 = prompt("Digite o primeiro valor");
    var num2 = prompt("Digite o segundo valor");
    var resultado =  num1 / num2;
    console.log(resultado);
}