import React, { useState } from 'react';
import { UserForm } from './components/Users/UserForm';
import { UserList } from './components/Users/UserList';

function App() {
  const users =[
    {id:'1',username: 'Usuario 1', age: 40}
  ]
  const [userArray, setUserArray] = useState(users);
  const addUser = (newUser)=>{
    
    setUserArray((prev)=>{
      return [...prev,newUser]
    })
  }
  return (
    <div className="App">
      <UserForm addUser={addUser}/>
      <UserList users={userArray} />      
    </div>
  );
}

export default App;
