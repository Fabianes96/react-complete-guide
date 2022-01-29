import React, { useState } from 'react';
import { Button } from '../UI/Button';
import { Card } from '../UI/Card';
import classes from './UserForm.module.css'

export const UserForm = ({addUser}) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const addUserHandler = (e)=>{
    e.preventDefault()
    if(enteredAge.trim().length!==0 && enteredUsername.trim().length!==0){
      if(+enteredAge < 1){
        return;
      }
      const formData = {
        username: enteredUsername,
        id: Math.random(),
        age: enteredAge      
      }      
      addUser(formData);
      setEnteredAge('')
      setEnteredUsername('')
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
          <input id='age' type="number" value={enteredAge} onChange={enteredAgeHandler} />
          <Button type='submit'>Add User</Button>            
        </form>
      </Card>
  )
};
