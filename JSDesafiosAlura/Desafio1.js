var comando = document.querySelector("#enviar");

comando.addEventListener("click", function(e){
  e.preventDefault();
  var valor1 = document.getElementById("valor1").value;
  var valor2 = document.getElementById("valor2").value;
  if (valor1 == valor2) {
    document.getElementById("resultado").innerHTML ="As variáveis numeroUm e stringUm tem o mesmo valor";
  } else {
    document.getElementById("resultado").innerHTML ="As variáveis numeroUm e stringUm não tem o mesmo valor";
  }
})