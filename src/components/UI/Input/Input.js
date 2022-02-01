import React, { useImperativeHandle, useRef } from 'react';
import classes from './Input.module.css';
;


export const Input =React.forwardRef(({id,isValid,label,value,type,onChange,onBlur},ref) => {
    const inputRef = useRef();
    const active = ()=>{
        inputRef.current.focus();
    }
    useImperativeHandle(ref,() => {
        return{
            focus: active
        }}
    );
    
    return (
        <div className={`${classes.control} ${isValid === false ? classes.invalid : ''}`}>
            <label htmlFor={id}>{label}</label>
            <input
                ref={inputRef}
                type={type}
                id={id}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
            />
        </div>
    )
});
