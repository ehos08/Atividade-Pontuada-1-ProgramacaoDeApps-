import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import FormularioCadastro from './components/cadastrarUsuario';
import ListaJogadores from './components/listarUsuario';

const App = () => {
  const [jogadores, setJogadores] = React.useState([]);

  const adicionarJogador = (novoJogador) => {
    setJogadores([...jogadores, novoJogador]);
  };

  const removerJogador = (id) => {
    setJogadores(jogadores.filter(jogador => jogador.id !== id));
  };
  return (
    <div className="container">
      <div className="header">
        <h1 className="title"> Cadastro de Jogadores</h1>
        <p className="subtitle"> Gerencie o seu time</p>
      </div>

      <FormularioCadastro 
        jogadores={jogadores}
        onAdicionarJogador={adicionarJogador}
      />

      <ListaJogadores 
        jogadores={jogadores}
        onRemoverJogador={removerJogador}
      />
    </div>
  );
};

//renderizando
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
export default App;