import React, { useState } from 'react';
import './style.css';

function FormularioCadastro({ onSubmit }) {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [time, setTime] = useState('');
  const [posicao, setPosicao] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const novoJogador = {
      nome,
      idade: Number(idade),
      time,
      posicao
    };
    
    onSubmit(novoJogador);
    
    // Limpar campos
    setNome('');
    setIdade('');
    setTime('');
    setPosicao('');
  }

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        placeholder="Nome do Jogador"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Idade"
        value={idade}
        onChange={(e) => setIdade(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Posição"
        value={posicao}
        onChange={(e) => setPosicao(e.target.value)}
        required
      />
      <button type="submit">Cadastrar</button>
    </form>
  );
}

export default FormularioCadastro;