import React, { useState } from 'react';

export default function AtividadeForm(props) {
  const getNextId = () => {
    return Math.max(0, ...props.atividades.map((item) => item.id)) + 1;
  };
  const [atividade, setAtividade] = useState({
    id: getNextId(),
    prioridade: '',
    descricao: '',
    titulo: ''
  });

  const inputTextHandler = (e) => {
    const { name, value } = e.target;
    setAtividade({ ...atividade, [name]: value });
  };

  return (
    <div>
      <form className="row g-3" onSubmit={props.addAtividade}>
        <div className="col-md-6">
          <label htmlFor="id" className="form-label">ID</label>
          <input
            name='id'
            id="id"
            type="text"
            className="form-control"
            onChange={inputTextHandler}
            value={atividade.id}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="prioridade" className="form-label">Prioridade</label>
          <select
            id="prioridade"
            name="prioridade"
            className="form-select"
            onChange={inputTextHandler}
            value={atividade.prioridade}
          >
            <option value="0">Selecione...</option>
            <option value="1">Baixa</option>
            <option value="2">Normal</option>
            <option value="3">Alta</option>
          </select>
        </div>
        <div className="col-md-6">
          <label htmlFor="descricao" className="form-label">Descrição</label>
          <input
            name='descricao'
            id="descricao"
            type="text"
            className="form-control"
            onChange={inputTextHandler}
            value={atividade.descricao}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="titulo" className="form-label">Título</label>
          <input
            name='titulo'
            id="titulo"
            type="text"
            className="form-control"
            onChange={inputTextHandler}
            value={atividade.titulo}
          />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-outline-secondary">
            + Atividade
          </button>
        </div>
      </form>
    </div>
  );
}
