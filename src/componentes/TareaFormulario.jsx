import React, {useState} from "react";
import '../estilos/TareaFormulario.css';
import { v4 as uuidv4 } from 'uuid';

function TareaFormulario(props) {

  const [input, setInput] = useState('');

  const manejarCambio = e => {
    setInput(e.target.value); // Extrae el valor del campo de texto y lo setea en "input"
  };

  const manejarEnvio = e => {
    e.preventDefault();
    console.log("Enviado formulario");
    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false
    };
    // Envia la tarea nueva al arreglo.
    props.onSubmit(tareaNueva);
  };

  return (
    <form 
      onSubmit={manejarEnvio}
      className="tarea-formulario"
    >
      <input 
        className="tarea-input"
        type="text"
        placeholder="Escribe una tarea"
        name="texto"
        onChange={manejarCambio}
      />
      <button className="tarea-boton">Agregar Tarea</button>
    </form>
  );
}

export default TareaFormulario;