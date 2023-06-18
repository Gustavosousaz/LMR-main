// Função para exibir a mensagem de boas-vindas
function exibirMensagemDeBoasVindas() {
    // Obtém o elemento da mensagem por ID
    var mensagemElement = document.getElementById("mensagem");
  
    // Exibe a mensagem
    mensagemElement.style.display = "block";
  }
  
  // Função para desativar a mensagem
  function desativarMensagem() {
    // Obtém o elemento da mensagem por ID
    var mensagemElement = document.getElementById("mensagem");
  
    // Oculta a mensagem
    mensagemElement.style.display = "none";
  }
  
  // Chama a função para exibir a mensagem de boas-vindas após um período de tempo
  setTimeout(exibirMensagemDeBoasVindas, 5000); // Exibe a mensagem após 5 segundos (5000 milissegundos)
  