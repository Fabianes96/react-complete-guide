import React, { useState } from 'react';
import { Card } from '../UI/Card';
import './UserForm.css'

export const UserForm = ({addUser}) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const onSubmitForm = (e)=>{
    e.preventDefault()
    if(enteredAge.length!==0 && enteredUsername!==0){
      const formData = {
        id: Math.random(),
        username: enteredUsername,
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
      <Card>          
        <form className='form' onSubmit={onSubmitForm}>
            <div className='form-field'>
                <label>Username</label>
                <input type="text" value={enteredUsername} onChange={enteredUsernameHandler} />
            </div>
            <div className='form-field'>
                <label>Age (Years)</label>
                <input type="number" onChange={enteredAgeHandler} />
            </div>
            <div>
                <button type='submit'>Add User</button>
            </div>
        </form>
      </Card>
  )
};
