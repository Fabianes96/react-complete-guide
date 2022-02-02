import React, { useState } from 'react';
import classes from './Input.module.css';

export const Input = ({label,input}) => {
  const [addItem, setAddItem] = useState(1);
  const addItemHandler = ()=>{
    setAddItem((prev)=>{
      return prev +1
    });
  }
  return (
        <div className={classes.input}>
            <label htmlFor={input.id} >{label}</label>
            <input {...input}/>
        </div>
    );
};
