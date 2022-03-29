// basico 
// const Titulo = () => {

import { useEffect, useState } from "react";

//     const [valor, setValor] = useState(0);
    
// 	return (
//         <div>
//             <h1>Lista de botones</h1>
//         </div>
//     );
	
// }



//declaro la interfas
interface TituloProps {
	texto:string;//typescrip declarar el tipo
	numero?:number;
	
}
//llamo o uso esa interfas
const Titulo: React.FC<TituloProps>=({ texto, numero }) => {
    
    const [valor, setValor] = useState(0);

    useEffect(() => {
        setValor(valor + 1);
    }, [texto]);

    return (
        <div>
     
            <h1>{`Titulo ${texto}`}</h1>
            <label>{`el texto se modifico ${valor} veces`}</label>
        
        </div>
    );
	
}
export default Titulo;