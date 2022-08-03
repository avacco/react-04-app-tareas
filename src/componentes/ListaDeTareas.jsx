import React, {useState} from "react";
import TareaFormulario from "./TareaFormulario";
import Tarea from "./Tarea";
import '../estilos/ListaDeTareas.css';

function ListaDeTareas() {
  
  // tareas será un arreglo vacio, listo para ser poblado.
  const [tareas, setTareas] = useState([]);

  // Recibe un objeto tarea desde TareaFormulario
  const agregarTarea = tarea => {
    if(tarea.texto.trim()){ // Si no esta vacio
      tarea.texto = tarea.texto.trim(); // quita espacios antes y despues del texto
      const tareasActualizadas = [tarea, ...tareas]; // con ... convierte de vuelta a objetos singulares
      setTareas(tareasActualizadas);
    };
    console.log("Tarea agregada");
    console.log(tarea);
  };

  const eliminarTarea = id => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
    setTareas(tareasActualizadas);
  };

  const completarTarea = id => {
    const tareasActualizadas = tareas.map(tarea => {
      if(tarea.id === id) {
        tarea.completada = !tarea.completada;
      };
      return tarea;
    });
    setTareas(tareasActualizadas);
  };

  return (
    // Fragmentos
    // onSubmit de aqui funciona paralelamente a la funcion onSubmit de TareaFormulario.jsx
    <>
      <TareaFormulario onSubmit={agregarTarea} />
      <div className="tarea-lista-contenedor">
        { // Crea un componente "Tarea" por cada elemento en el arreglo
          tareas.map((tarea) =>
            <Tarea
              key={tarea.id}
              id={tarea.id}
              texto={tarea.texto}
              completada={tarea.completada}
              completarTarea={completarTarea}
              eliminarTarea={eliminarTarea}
            />
          )
        };
      </div>
    </>
  );
}

export default ListaDeTareas;