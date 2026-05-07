const links = document.querySelectorAll(".menu a");

links.forEach(link => {
  link.addEventListener("click", function () {
    links.forEach(item => item.classList.remove("ativo"));
    this.classList.add("ativo");
  });
});

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    alert("Mensagem enviada com sucesso!");

    formulario.reset();

});