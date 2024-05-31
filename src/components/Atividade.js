import React from 'react'

export default function Atividade(props) {

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

  return (
    <div  className={`card mb-2 shadow-sm ${props.prioridadeBorder(props.atividade.prioridade)}`}>
            <div className="card-body">
              <div className='d-flex justify-content-between'>
                <h5 className='card-title'>
                  <span className='badge bg-secondary me-1'>{props.atividade.id}</span>
                  - {props.atividade.titulo}
                </h5>
                <h6>
  <span className='text-secondary'>Prioridade: </span>
  <span className={`ms-1 ${prioridadeStyle(props.atividade.prioridade).split(' ')[0]}`}>
    {prioridadeLabel(props.atividade.prioridade)} 
    <i className={`me-1 far ${prioridadeStyle(props.atividade.prioridade).split(' ')[1]}`}></i>
  </span>
</h6>

              </div>
              <p className="card-text">{props.atividade.descricao}</p>
              <div className="d-flex justify-content-end pt-2 m-0 border-top">
                <button className="btn btn-outline-primary me-2 btn-sm mt-2"
                 onClick={() => props.pegarAtividade(props.atividade.id)}>
                  
                  <i className='fas fa-pen me-2'></i>
                  Editar
                </button>
                <button className="btn btn-sm btn-outline-danger mt-2" onClick={() => props.deletarAtividade(props.atividade.id)}>
                  <i className='fas fa-trash me-2'></i>
                  Deletar
                </button>
              </div>
            </div>
          </div>
  )
}
