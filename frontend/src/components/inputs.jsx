import React from 'react';
import '../css/index.css';
import '../fonts/FredokaOne-Regular.ttf';
const InputText = (props) => {
    return ( 
        <input type={props.type} className='big_input_text' placeholder={props.placeholder}></input>
     );
}
 
export default InputText;