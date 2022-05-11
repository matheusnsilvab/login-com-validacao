function Login() {
  var done = 0;
  var usuario = document.getElementsByName('username')[0].value;
  usuario = usuario.toLowerCase();
  var senha = document.getElementsByName('password')[0].value;
  senha = senha.toLowerCase();

  if (usuario == "@oimatth_" && senha == "1704") {
    window.location = "index.html";
    done = 1;
    alert("logado com sucesso");
  }
  
  if (done == 0) {
    alert("Preencha os campos em branco");
  }
} 