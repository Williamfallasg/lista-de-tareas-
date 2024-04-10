
import './App.css';
import Tareas from './components/Tareas';
import React, { useEffect, useState } from 'react';
 
function App() {
  const [nuevoItem, setNuevoItem] = useState([
    { name: 'Revisar material A', done: false },
    { name: 'Revisar material B', done: false },
    { name: 'Revisar material C', done: false },
    { name: 'Revisar material D', done: false },
    { name: 'Revisar material E', done: false }
  ]);

  useEffect(() => {
    const storedItems = localStorage.getItem('input');
    if (storedItems) {
      setNuevoItem(JSON.parse(storedItems));
    }
  }, []);

  const crearTarea = (nuevaTarea) => {
    if (!nuevoItem.find((tarea) => tarea.name === nuevaTarea)) {
      setNuevoItem([...nuevoItem, { name: nuevaTarea, done: false }]);
    }
  };

  const eliminarTarea = (tareaEliminar) => {
    setNuevoItem(nuevoItem.filter((tarea) => tarea.name !== tareaEliminar));
  };

  useEffect(() => {
    localStorage.setItem('input', JSON.stringify(nuevoItem));
  }, [nuevoItem]);

  return (
    <div className="App">
      <Tareas crearTarea={crearTarea} />
      <table>
        <thead>
          <tr>
            <th>Tareas</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {nuevoItem.map((tarea) => (
            <tr key={tarea.name}>
              <td>{tarea.name}</td>
              <td>
                <button onClick={() => eliminarTarea(tarea.name)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;