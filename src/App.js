import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AtividadeForm from './components/AtividadeForm';

function App() {
  const [atividades, setAtividades] = useState([
    { id: 1, prioridade: '1', descricao: 'Primeira Atividade', titulo: 'Titulo 1' },
    { id: 2, prioridade: '2', descricao: 'Segunda Atividade', titulo: 'Titulo 2' },
  ]);

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

  function deletarAtividade(id){
    const atividadesFiltradas = atividades.filter(atividades => atividades.id !== id);
    setAtividades([...atividadesFiltradas ]);
  }

  function prioridadeLabel(param) {
    switch (param) {
      case '1':
        return 'Baixa';
      case '2':
        return 'Normal';
      case '3':
        return 'Alta';
      default:
        return 'Não Definido';
    }
  }

  function prioridadeStyle(param) {
    switch (param) {
      case '1':
        return 'text-success fa-smile';
      case '2':
        return 'text-secondary fa-meh';
      case '3':
        return 'text-danger fa-frown';
      default:
        return 'fa-question';
    }
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
      <AtividadeForm></AtividadeForm>
      <div className='mt-3'>
        {atividades.map((ativ) => (
          <div key={ativ.id} className={`card mb-2 shadow-sm ${prioridadeBorder(ativ.prioridade)}`}>
            <div className="card-body">
              <div className='d-flex justify-content-between'>
                <h5 className='card-title'>
                  <span className='badge bg-secondary me-1'>{ativ.id}</span>
                  - {ativ.titulo}
                </h5>
                <h6>
                  <span className='text-secondary'>
                    Prioridade: 
                  </span>
                  <span className={`ms-1 ${prioridadeStyle(ativ.prioridade).split(' ')[0]}`}>
                    {prioridadeLabel(ativ.prioridade)} 
                    <i className={`me-1 far ${prioridadeStyle(ativ.prioridade).split(' ')[1]}`}></i>
                  </span>
                </h6>
              </div>
              <p className="card-text">
                {ativ.descricao}
              </p>
              <div className="d-flex justify-content-end pt-2 m-0 border-top">
                <button className="btn btn-outline-primary me-2 btn-sm mt-2">
                  <i className='fas fa-pen me-2'></i>
                  Editar
                </button>
                <button className="btn btn-sm btn-outline-danger mt-2" onClick={() =>deletarAtividade(ativ.id)}>
                  <i className='fas fa-trash me-2'></i>
                  Deletar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
