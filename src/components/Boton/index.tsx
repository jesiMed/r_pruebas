// import titulo;

import { useState } from "react";
import Titulo from "../Titulo";

const Boton = ()=>{
    const [texto, setTexto] = useState("");
    
    
    return (
        
        <div>
            <Titulo texto={texto}></Titulo>

            <button onClick={() => { 
                setTexto("hola");
            }} >siguiente</button>

            <button onClick={() => { 
                setTexto("chau");
            }}>volver</button>
        </div>
    ); 
	
}

export default Boton;

// //UN COMPONENTE DENTRO DE OTRO
// //importar el componente titulo!
// const Boton=()=>{
// 	return 
// //llamo un componente dentro de otro
// 	<Titulo texto="texto alguno" numero={5}><Titulo>
// 	<div>
// 	<button>Enviar</button>
// 	<button>Enviar</button>
// 	</div>
// }
