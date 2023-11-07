import React from 'react';

function Input (props){
    return(
        <input className="input input-bordered w-full max-w-xs text-lg" type={props.type} 
         placeholder={props.placeholder} onChange={props.onChange} />
    )
}
export default Input;