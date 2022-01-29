import React from 'react';
import { Card } from '../UI/Card';
import { UserItems } from './UserItems';
import classes from './UserList.module.css'

export const UserList = ({users}) => {
  return(
    <Card className={classes.users}>
        <ul>           
            {
              users.map((user)=>{
                return(
                  <UserItems key={user.id} username={user.username} age={user.age}/>
                );
              })
            }            
        </ul>
    </Card>
  )
};
