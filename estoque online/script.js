const form = document.getElementById('form-produto');
const catalogo = document.getElementById('catalogo');

form.onsubmit = function (addprod) {
  addprod.preventDefault();

  const nome = document.getElementById('nome').value;
  const quantidade = document.getElementById('quantidade').value;
  const descricao = document.getElementById('descricao').value;

  const produto = document.createElement('div');
  produto.className = 'produto';

 
  produto.innerHTML = `
    <h3>${nome}</h3>
    <p>Quantidade: ${quantidade}</p>
    <p>${descricao}</p>
    <button onclick="removerProduto(this)">Remover</button>
  `;

  catalogo.appendChild(produto);
  form.reset();
};

function removerProduto(botao) {
  const produto = botao.parentNode; 
  produto.remove(); 
}
