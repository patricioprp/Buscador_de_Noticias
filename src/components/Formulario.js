import React from 'react';
import styles from './Formulario.module.css';
import useSelect from './hooks/useSelect';


const Formulario = ({guardarCategoria}) => {

    const OPCIONES = [
        {value:'entertainment',label:'ENTRETENIMIENTO'},
        {value:'business',label:'NEGOCIOS'},
        {value:'general',label:'GENERAL'},
        {value:'health',label:'SALUD'},
        {value:'science',label:'CIENCIA'},
        {value:'sports',label:'DEPORTE'},
        {value:'technology',label:'TECNOLOGIA'}
    ];

    const[categoria,SelectNoticias] = useSelect('general',OPCIONES);

    const buscarNoticias = e =>{
        e.preventDefault();
    };

    return ( 
        <div className={`${styles.buscador} row`}>
            <div className='col s12 m8 offset-m2'>
                <form
                onSubmit={buscarNoticias}
                >
                    <h2 className={styles.heading}>Encuentra Noticias por Categoria</h2>
                    <SelectNoticias />
                        <div className='input-field col s12'>
                            <input
                            type="submit"
                            className={`${styles.btn_block} btn-large amber darken-2`}
                            value="Buscar"
                            />
                        </div>
                </form>
            </div>
        </div>
     );
}
 
export default Formulario;