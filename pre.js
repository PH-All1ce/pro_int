// Seleciona os elementos necessários
const userQuestionInput = document.getElementById('userQuestion');
const historyList = document.getElementById('historyList');

// Função para adicionar a pergunta ao histórico
function addQuestion() {
    const question = userQuestionInput.value.trim(); // Obtém o valor do input e remove espaços extras

    // Verifica se a pergunta não está vazia
    if (question === '') {
        alert('Por favor, digite uma pergunta!');
        return;
    }

    // Cria um novo item da lista
    const listItem = document.createElement('li');
    listItem.textContent = question;

    // Adiciona o item ao histórico
    historyList.appendChild(listItem);

    // Limpa o campo de input
    userQuestionInput.value = '';
}
