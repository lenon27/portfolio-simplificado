/* 
    Objetivo 1 - quando o usuário cliicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html

        Passo 1 - pegar o botão mostrar mais no JS para poder verifiicar quando o usuário clicar em cima dele 

        Passo 2 - indentificar o clique no botão 

        Passo 3 - adicionar a classe ativo nos projetos escondidos 
    
    Objetivo 2 - esconder o botão de mostrar ais 

    Passo 1 - pegar o botão e esconder ele 
*/


//Objetivo 1 - quando o usuário cliicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html

//Passo 1 - pegar o botão mostrar mais no JS para poder verifiicar quando o usuário clicar em cima dele 

const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

botaoMostrarProjetos.addEventListener('click', () => { /*() => {}, isso se cchama função de seta, precisa colocar entre as chaves a sua ação o que ela irar fazer ao cliclar no botão*/
    mostraMaisPojetos();
    esconderBotao();
});

function esconderBotao() {
    botaoMostrarProjetos.classList.add('remover');
}


function mostraMaisPojetos() {
    projetosInativos.forEach(projetosInativo => {
        projetosInativo.classList.add('ativo');/*classList, listas das classes que o objeto tem*/
    });
}
/* Vamos "REFATORAR" o codigo, praticamente vamos melhorar o código, podendo ser deixar eles com menas linhas deixar eles mais legivel */ // refaturação é parar criar function para poder facilitar a nossa leitura
