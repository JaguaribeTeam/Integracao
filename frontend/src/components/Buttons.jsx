import React from 'react';

const Button = (props) => {
    return ( 
        <input type='submit'  value={props.value} className={props.className}></input>
     );
}
 
export default Button;