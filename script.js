// Seleciona elementos do DOM
const btnAdicionar = document.querySelectorAll('.btn-adicionar');
const listaCarrinho = document.getElementById('lista-carrinho');
const totalElemento = document.getElementById('total');
const cartCount = document.getElementById('cart-count');
const btnLimpar = document.getElementById('btn-limpar');

let carrinho = [];

// Atualiza visual do carrinho
function atualizarCarrinho() {
  listaCarrinho.innerHTML = '';
  if (carrinho.length === 0) {
    listaCarrinho.innerHTML = '<li>Seu carrinho está vazio.</li>';
    totalElemento.textContent = '0,00';
    btnLimpar.disabled = true;
    cartCount.textContent = '0';
    return;
  }

  let total = 0;
  carrinho.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
    listaCarrinho.appendChild(li);
    total += item.preco;
  });

  totalElemento.textContent = total.toFixed(2);
  btnLimpar.disabled = false;
  cartCount.textContent = carrinho.length.toString();
}

// Adiciona produto ao carrinho
btnAdicionar.forEach(botao => {
  botao.addEventListener('click', () => {
    const nome = botao.getAttribute('data-nome');
    const preco = parseFloat(botao.getAttribute('data-preco'));
    carrinho.push({ nome, preco });
    atualizarCarrinho();
  });
});

// Limpa carrinho
btnLimpar.addEventListener('click', () => {
  carrinho = [];
  atualizarCarrinho();
});

// Inicializa carrinho vazio
atualizarCarrinho();