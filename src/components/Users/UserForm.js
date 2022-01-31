import React, { useState } from 'react';
import { Button } from '../UI/Button';
import { Card } from '../UI/Card';
import { ErrorModal } from '../UI/ErrorModal';
import classes from './UserForm.module.css'

export const UserForm = ({addUser}) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState();
  const addUserHandler = (e)=>{
    e.preventDefault()
    if(enteredAge.trim().length!==0 && enteredUsername.trim().length!==0){
      if(+enteredAge < 1){
        setError({
          title: 'Invalid input',
          message:'Please enter a valid age (> 0)'
        })
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
    }else{
      setError({
        title: 'Invalid input',
        message:'Please enter a valid name and age (non-empty values)'
      })
    }
    
  }
  const enteredUsernameHandler = ({target})=>{
    setEnteredUsername(target.value)
  }
  const enteredAgeHandler = ({target})=>{
    setEnteredAge(target.value)
  }
  const errorHandler = () =>{
    setError(null)
  }
  return(
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
      <Card className={classes.input}>          
        <form onSubmit={addUserHandler}>
          <label htmlFor='username'>Username</label>
          <input id="username" type="text" value={enteredUsername} onChange={enteredUsernameHandler} />
          <label htmlFor='age'>Age (Years)</label>
          <input id='age' type="number" value={enteredAge} onChange={enteredAgeHandler} />
          <Button type='submit'>Add User</Button>            
        </form>
      </Card>
    </div>
  )
};
