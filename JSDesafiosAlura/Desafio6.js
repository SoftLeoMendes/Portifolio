var frutas=[], laticinios=[1,2,3,4,5,6,7], congelados=[1,2,3,4,5,6,7], doces=[1,2,3,4,5,6,7];
let i = 1;
var resposta = prompt("Se voce deseja adicionar itens na sua lista digite 1\nCaso nao deseje digite 2");
if(resposta == 1){
    var item = prompt("Qual item voce deseja adicionar a sua lista?");
    console.log(item);
    var categoria = prompt("O seu item é da categoria:\n 1-Fruta\n2-Laticinio\n3-Congelado\n4-Doce");
        if(categoria == 1){
           frutas[0] = item;
        }
}
while(resposta != 2){
    var resposta = prompt("Se voce deseja adicionar itens na sua lista digite 1\nCaso nao deseje digite 2\nSe deseja Remover um item digite 3");
    if(resposta == 1){
        var item = prompt("Qual item voce deseja adicionar a sua lista?");
        var categoria = prompt("O seu item é da categoria:\n 1-Fruta\n2-Laticinio\n3-Congelado\n4-Doce");
        if(categoria == 1){
           frutas[i] = item;
        }
        //console.log(frutas);
    }
    if(resposta == 3){
        var eliminar = prompt(`Qual item voce deseja remover? Sua lista atual:\n ${frutas}`);
        var buscar_item = frutas.indexOf(eliminar);
        var eliminar_item  = frutas.splice(buscar_item, 1);
        console.log(buscar_item);
    }
    i++;
}

console.log(`Lista de compras é\nFrutas: ${frutas}`);