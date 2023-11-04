import React from 'react';

function Input (props){
    return(
        <input className="input input-bordered w-80 max-w-xs" type={props.type} 
         placeholder={props.placeholder} onChange={props.onChange} />
    )
}
export default Input;