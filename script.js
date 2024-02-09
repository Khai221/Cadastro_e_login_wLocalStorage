if (!localStorage.getItem('usuarios')) {
    localStorage.setItem('usuarios', JSON.stringify([]));
};

const usuario = document.getElementById('userCadastroId');
const email = document.getElementById('emailCadastroId');
const password = document.getElementById('passwordCadastroId');
const botao = document.getElementById('botao_cadastro');
const dataUsuarios = JSON.parse(localStorage.getItem('usuarios'));

function cadastro(){
    const userInfo = {
        usuario: usuario.value,
        email: email.value,
        password: password.value
    };
    dataUsuarios.push(userInfo);

    localStorage.setItem("usuarios", JSON.stringify(dataUsuarios));
}

botao.addEventListener('click', cadastro);