import React from 'react';

const Produto = ({ produto }) => {
  //Definido o state inicial dos dados
  const [dados, setDados] = React.useState(null);

  // Funcao useEffect executada sempre q há alguma mudança no state de 'produto'
  React.useEffect(() => {
    //Verificacao de seguranca caso produto seja null
    if (produto !== null) {
      // Feito o fetch com a escolha de produto do usuario o mesmo é tratado e retornado com jason
      fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`)
        .then((response) => response.json())
        .then((json) => setDados(json));
      // O jason é setado em dados para que possa ser usado
    }
  }, [produto]);

  // Verificacao de segurança caso dados esteja como null
  if (dados === null) return null;
  // Com a escolha do usuario, é esposto os dados que vieram da API ranek
  return (
    <div>
      <h1>{dados.nome}</h1>
      <p>R$ {dados.preco}</p>
      <div>
        <img
          style={{
            maxHeight: '60vh',
            borderRadius: '180px',
            border: '4px, solid, black',
          }}
          src={dados.fotos[0].src}
          alt=""
        />
      </div>
    </div>
  );
};

export default Produto;
