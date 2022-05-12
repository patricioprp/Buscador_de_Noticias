import React, {useState} from 'react';

const useSelect = () => {

    const [state,actualizarState] = useState('');

    const SelectNoticias = () => (
        <select
        className='browser-default'
        >
            <option value="">Selecciones</option>
        </select>
    );
    return [state,SelectNoticias];
}
 
export default useSelect;