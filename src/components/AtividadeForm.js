import React from 'react'

export default function AtividadeForm() {
  return (
    <div>
      <form className="row g-3" onSubmit={addAtividade}>
        <div className="col-md-6">
          <label htmlFor="id" className="form-label">ID</label>
          <input id="id" type="text" className="form-control" />
        </div>
        <div className="col-md-6">
          <label htmlFor="prioridade" className="form-label">Prioridade</label>
          <select id="prioridade" className="form-select">
            <option defaultValue="0">Selecionar...</option>
            <option value="1">Baixa</option>
            <option value="2">Normal</option>
            <option value="3">Alta</option>
          </select>
        </div>
        <div className="col-md-6">
          <label htmlFor="descricao" className="form-label">Descrição</label>
          <input id="descricao" type="text" className="form-control" />
        </div>
        <div className="col-md-6">
          <label htmlFor="titulo" className="form-label">Título</label>
          <input id="titulo" type="text" className="form-control" />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-outline-secondary">+ Atividade</button>
        </div>
      </form>
    </div>
  )
}
