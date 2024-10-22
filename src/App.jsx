import React from 'react';
import Produto from './produto';

// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo

const App = () => {
  // Definido o state, o mesmo recebe dados dos botoes da pagina e armazena
  const [produto, setProduto] = React.useState(null);

  // useEffect ira rodar ao iniciar a pagina
  React.useEffect(() => {
    // Ao abrir a pagina é salvo os dados do localStorage
    const produtoLocal = window.localStorage.getItem('produto');
    if (produto !== 'null') {
      // caso localStorage nao esteja vazio, o dado é salvo como produto
      setProduto(produtoLocal);
    }
  }, []);

  // Sempre q o usuario clica nos botoes a var 'produto' é modificada, ativando assim este useEffect
  React.useEffect(() => {
    if (produto !== 'null') {
      // Ao ser ativada a funcao salva a ultima escolha do usuário no localStorage
      window.localStorage.setItem('produto', produto);
    }
  }, [produto]);

  function handleClick(event) {
    setProduto(event.target.innerText);
    if (produto) localStorage.setItem('produto', produto);
  }

  /* A escolha de produto do usuario é enviada ao arquivo produto com uso de props*/
  return (
    <>
      <h1>Preferência: {produto}</h1>
      <button onClick={handleClick}>notebook</button>
      <button onClick={handleClick}>smartphone</button>

      <Produto produto={produto} />
    </>
  );
};

export default App;
