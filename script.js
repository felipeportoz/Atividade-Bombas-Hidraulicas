const links = document.querySelectorAll(".menu a");

links.forEach((link) => {
  link.addEventListener("click", function () {
    links.forEach((item) => item.classList.remove("ativo"));
    this.classList.add("ativo");
  });
});

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  alert("Mensagem enviada com sucesso!");

  formulario.reset();
});

function fazerLogin(event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  if (email === "admin@admin.com" && senha === "admin") {
    alert("Login realizado com sucesso!");
    window.location.href = "home-sistema.html";
  } else {
    alert("E-mail ou senha incorretos.");
  }
}

function fazerLogoff() {
  let resultado = confirm("Você tem certeza?");

  if (resultado) {
    window.location.href = "login.html";
  }
}
