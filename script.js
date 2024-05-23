const display = document.getElementById("display")

function clicado(char) {
    if (display.innerText === "0" && char !== ".") {
        display.innerText = char;
    } else { // aqui eu tava testando a calculadora que o sor fez e vi que não dava pra fazer a conta 0.2 + 0.2 então vi como poderia resolver usando alguns outros elementos do js, no meu caso o código divide o texto em partes usando o simbolo das expressoes como separador e após isso o pop pega o último elemento do array resultante e o include verifica se o último número contém um ponto decimal, no caso se houver ele retorna true e deixa outro colocar ponto. 
        if (char === '.' && display.innerText.split(/[\+\-\*\/]/).pop().includes('.')) {
            return;
        }
        display.innerText += char;
    }
}

function limpar() {
    display.innerText = "0";
}

function calcular() {
    try {
        display.innerText = eval(display.innerText);
    } catch (e) { //eu pesquisei e vi que nessa expressão "eval" quando ocorre algum erro ele é capturado pelo bloco 'catch' e ele captura o erro e armazena na variavel 'e' e dentro desse bloco 'catch' eu posso escrever o algo para mostrar quando deu erro
        display.innerText = "Erro!";
    }
}