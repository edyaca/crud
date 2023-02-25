import React, { useState } from 'react'
import { isEmpty } from 'lodash'
import { nanoid } from 'nanoid'

function App() {
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState([])

  const addTask = (e) => {
    e.preventDefault()
    if (isEmpty(task)) {
      console.log('Task empty')
      return
    }

    const newTask = {
      id: nanoid(),
      name: task
    } 

    setTasks([...tasks, newTask])
    setTask('')
  }
  return (
    <div className='container mt-5'>
      <h1>Tareas</h1>
      <hr />
      <div className='row'>
        <div className='col-8'>
          <h4 className='text-center'>Lista de Tareas</h4>
          <ul className='list-group'>
            {
              tasks.map((task) => (
                <li className='list-group-item' key={task.id}>
                  <span className='lead'>{task.name}</span>
                  <button className='btn btn-danger btn-sm float-right mx-2'>Eliminar</button>
                  <button className='btn btn-warning btn-sm float-right'>Editar</button>
                </li>
              ))
            }
          </ul>
        </div>
        <div className='4'>
          <h4 className='text-center'>Formularios</h4>
          <form onSubmit={addTask}>
            <input
              type='text'
              className='form-control mb-2'
              placeholder='Ingresa la tarea...'
              onChange={(text) => setTask(text.target.value)}
              value={task}
            />
            <button
              className='btn btn-dark btn-bloq'
              type='submit'
            >
              Agregar
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
