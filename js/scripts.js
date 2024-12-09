// Pega os elementos do botão "Não" e "Sim" pelos seus respectivos IDs
let botaoNao = document.getElementById("nao");
let botaoSim = document.getElementById("sim");
let mensagemErro = document.getElementById("erro"); // Pega o elemento que exibe a mensagem de erro

// Adiciona um evento ao botão "Não" que será acionado quando o mouse passar sobre ele
botaoNao.addEventListener("mouseover", function() {
    // Gera uma nova posição aleatória para o botão "Não" dentro da largura e altura da janela
    let posX = Math.random() * (window.innerWidth - botaoNao.offsetWidth); // Calcula a posição X aleatória
    let posY = Math.random() * (window.innerHeight - botaoNao.offsetHeight); // Calcula a posição Y aleatória

    botaoNao.style.position = "absolute"; // Define o botão "Não" como um elemento posicionado de forma absoluta
    botaoNao.style.left = posX + "px"; // Aplica a nova posição X ao botão
    botaoNao.style.top = posY + "px";  // Aplica a nova posição Y ao botão

    // Exibe a mensagem de erro, tornando-a visível
    mensagemErro.style.display = "block";
});

// Adiciona um evento ao botão "Sim" que será acionado quando o mouse passar sobre ele
botaoSim.addEventListener("mouseover", function() {
    alert("Ótima escolha! Você já sabe que é o amor da minha vida e meu tipo sanguíneo é A+!"); // Exibe um alerta confirmando a escolha
});
