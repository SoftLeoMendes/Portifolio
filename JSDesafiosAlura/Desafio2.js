var comando = document.querySelector("#enviar");

comando.addEventListener("click", function(e){
    e.preventDefault();
    var nome = document.getElementById("Nome").value;
    var idade = document.getElementById("Idade").value;
    var linguagem = document.getElementById("linguagem").value;

    document.getElementById("resultado").innerHTML =`Olá ${nome}, voce tem ${idade} anos e esta aprendendo ${linguagem}`;
})
