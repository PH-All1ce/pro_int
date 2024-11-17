// script.js

async function buscarCao() {
    const url = "https://dog.ceo/api/breeds/image/random";
  
    try {
      const response = await fetch(url);
  
      // Verificação de sucesso na resposta
      if (!response.ok) {
        throw new Error("Erro ao buscar a imagem");
      }
      
      const data = await response.json();
      
      // Verifica se o link da imagem existe na resposta
      if (!data.message) {
        throw new Error("Imagem não encontrada");
      }
  
      // Exibe a imagem do cão na página
      document.getElementById("imagem-cao").innerHTML = `
        <img src="${data.message}" alt="Imagem de um cão aleatório" style="max-width: 100%; border-radius: 8px;">
      `;
    } catch (error) {
      document.getElementById("imagem-cao").innerHTML = `
        <p style="color: red;">${error.message}</p>
      `;
    }
  }
  