import { useState } from 'react' 
import './App.css'
import FormularioCadastro from './components/cadastrarUsuario'
import ListaJogadores from './components/listarUsuario'

function App() {
  const [jogadores, setJogadores] = useState([])

  const adicionarJogador = (novoJogador) => {
    setJogadores([...jogadores, novoJogador])
  }

  return (
    <div className="container">
      <h1>Cadastro de Jogadores</h1>
      <FormularioCadastro onSubmit={adicionarJogador} />
      <ListaJogadores jogadores={jogadores} />
    </div>
  )
}

export default App