const ListaJogadores = ({ jogadores, onRemoverJogador }) => {
  return (
    <div className="lista-jogadores">
      <h2 className="lista-titulo">
         Elenco Cadastrado
        <span className="contador-jogadores">
          {jogadores.length} jogadores
        </span>
      </h2>
      
      {jogadores.length === 0 ?(
        <div className="empty-state">
          <p> Nenhum jogador cadastrado ainda</p>
          <p>Use o formulário acima para adicionar jogadores ao elenco do time</p>
        </div>
      ):(
        <ul className="players-list">
          {jogadores.map((jogador)=> (
            <li key={jogador.id} className="player-item">
              <div className="player-info">
                <span className="player-number">#{jogador.numero}</span>
                <span className="player-name">{jogador.nome}</span>
              </div>
              <button
                className="btn-secondary"
                onClick={()=> onRemoverJogador(jogador.id)}
                title="Remover jogador" >
                Remover
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};