import React from 'react';
import { Input } from '../UI/Input';
import classes from './MealItemForm.module.css';


export const MealItemForm = ({id}) => {
  const onSubmitHandler = (e)=>{
    e.preventDefault();
  }
  return(
    <form onSubmit={onSubmitHandler} className={classes.form}>
        <Input label="Amount" input={{
          id: 'amount' + id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1'
        }}/>
        <button>+ Add</button>
    </form>
  );
};
