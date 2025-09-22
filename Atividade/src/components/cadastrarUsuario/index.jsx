const FormularioCadastro = ({ jogadores, onAdicionarJogador })=> {
  const [nome, setNome] = React.useState('');
  const [numeroCamisa, setNumeroCamisa] = React.useState('');

  const adicionarJogador = ()=> {
    if (nome.trim() === '' || numeroCamisa.trim() === '') {
      alert('Por favor, preencha todos os campos!');
      return;
    }

    const numeroExistente = jogadores.some(jogador=> jogador.numero === parseInt(numeroCamisa));
    if (numeroExistente) {
      alert('Este número de camisa já está em uso');
      alert('Tente outro número');
      return;
    }

    const novoJogador = {
      id: Date.now(),
      nome: nome.trim(),
      numero: parseInt(numeroCamisa)
    };

    onAdicionarJogador(novoJogador);
    setNome('');
    setNumeroCamisa('');
  };
  return (
    <div className="form-cadastro">
      <h2 className="form-titulo">Cadastrar novo jogador</h2>
      <div className="form-group">
        <div className="label">Nome do jogador</div>
        <input
          type="text"
          className="input" value={nome}
          onChange={(e)=> setNome(e.target.value)}
          placeholder="Digite o nome do jogador"
        />
      </div>
      <div className="form-group">
        <div className="label">Número da camisa</div>
        <input
          type="number"
          className="input" value={numeroCamisa}
          onChange={(e)=> setNumeroCamisa(e.target.value)}
          placeholder="Digite o número da camisa"
          min="0"
          max="999"
        />
      </div>
      <button onClick={adicionarJogador} className="btn-primary">
        Cadastrar Jogador no time
      </button>
    </div>
  );
};