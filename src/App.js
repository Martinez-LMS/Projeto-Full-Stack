import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AtividadeForm from './components/AtividadeForm';
import Atividade from './components/Atividade';
import AtividadeLista from './components/AtividadeLista';

function App() {
  const [atividades, setAtividades] = useState([
    { id: 1, prioridade: '1', descricao: 'Primeira Atividade', titulo: 'Titulo 1' },
    { id: 2, prioridade: '2', descricao: 'Segunda Atividade', titulo: 'Titulo 2' },
  ]);
  const [atividade, setAtividade] = useState({});

  function addAtividade(e) {
    e.preventDefault();
    const idInput = document.getElementById('id');
    let novoId = idInput.value ? Number(idInput.value) : atividades.length + 1;
  
    const novaAtividade = {
      id: novoId,
      prioridade: document.getElementById('prioridade').value,
      titulo: document.getElementById('titulo').value,
      descricao: document.getElementById('descricao').value,
    };
  
    setAtividades([...atividades, novaAtividade]);
  
    idInput.value = '';
  }

  function deletarAtividade(id) {
    const atividadesFiltradas = atividades.filter(atividade => atividade.id !== id);
    setAtividades(atividadesFiltradas);
  }
  function pegarAtividade(id){
    const atividade = atividades.filter(atividade => atividade.id === id)
    setAtividade(atividade[0])
  }

  function prioridadeBorder(param) {
    switch (param) {
      case '1':
        return 'border-success';
      case '2':
        return 'border-secondary';
      case '3':
        return 'border-danger';
      default:
        return '';
    }
  }

  return (
    <>
      <AtividadeForm addAtividade={addAtividade} atividades={atividades}
      ativSelecionada ={atividade} />
      
      <AtividadeLista
      atividades = {atividades} 
      deletarAtividade = {deletarAtividade}
      pegarAtividade = {pegarAtividade}
      prioridadeBorder={prioridadeBorder}/>
    </>
  );
}

export default App;
