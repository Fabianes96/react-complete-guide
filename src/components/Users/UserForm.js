import React, { useState } from 'react';
import { Card } from '../UI/Card';
import classes from './UserForm.module.css'

export const UserForm = ({addUser}) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const addUserHandler = (e)=>{
    e.preventDefault()
    if(enteredAge.length!==0 && enteredUsername!==0){
      const formData = {
        username: enteredUsername,
        id: Math.random(),
        age: enteredAge      
      }      
      addUser(formData)
    }
    
  }
  const enteredUsernameHandler = ({target})=>{
    setEnteredUsername(target.value)
  }
  const enteredAgeHandler = ({target})=>{
    setEnteredAge(target.value)
  }
  return(
      <Card className={classes.input}>          
        <form onSubmit={addUserHandler}>
          <label htmlFor='username'>Username</label>
          <input id="username" type="text" value={enteredUsername} onChange={enteredUsernameHandler} />
          <label htmlFor='age'>Age (Years)</label>
          <input id='age' type="number" onChange={enteredAgeHandler} />
          <button type='submit'>Add User</button>            
        </form>
      </Card>
  )
};
