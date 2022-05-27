debugger;

function enviarFormulario() {
    var login = "aluno@basesocial.com";
    var senha = "base2022";
    if ((login == document.form1.email.value) && (senha == document.form1.password.value)) {
        alert("Bem vindo ao sistema!")
    } else {
        alert("Email ou senha incorretos!")
    }
}
