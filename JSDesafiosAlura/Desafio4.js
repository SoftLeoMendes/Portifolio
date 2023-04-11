/*Você já brincou de tentar adivinhar o número que seu amigo ou amiga estava pensando? Hoje você vai voltar 
na infância e fazer exatamente isso. Mas agora, o jogo vai ser contra o próprio computador!Você deve criar 
um programinha que comece com um valor específico pré-definido entre 0 a 10 para o número que você vai 
adivinhar (7, por exemplo).Em seguida, o programa vai perguntar para você qual o valor que você deseja 
chutar e, caso você acerte, ele irá te parabenizar. Caso erre, ele vai te dar mais 2 tentativas.No fim, caso 
você não acerte nenhuma vez, ele vai imprimir qual era o número inicial.Depois que o programinha estiver 
funcionando, tente usar um número randômico em vez de um número pré-definido.*/
var comando = document.querySelector("#enviar");
let Num, acertou = 0;

Num = Math.floor(Math.random()*10);

console.log(Num);

comando.addEventListener("click", function(e){
    console.log(Num);
    e.preventDefault();
    for(i=3;i>0;i--){
        var tentativa = document.getElementById("Numerosorteado").value;
        if(tentativa == Num){
            document.getElementById("resultado").innerHTML ="Parabens voce venceu!";
            acertou = 1;
            break;
        }
        else if(tentativa != Num){
            document.getElementById("resultado").innerHTML = `Tente novamente voce tem: ${i - 1} tentativas restantes`;
            acertou = 2;
        }
    }
if(acertou == 2){
    document.getElementById("perdeu").innerHTML ="Suas tentativas acabaram, voce perdeu!";
}
})




