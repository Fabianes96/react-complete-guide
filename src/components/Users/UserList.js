import React from 'react';
import { Card } from '../UI/Card';
import { UserItems } from './UserItems';
import './UserList.css'

export const UserList = ({users}) => {
  return(
    <Card>
        <div>
            <div className='card-items'>
                {
                  users.map((user)=>{
                    return(
                      <UserItems key={user.id} username={user.username} age={user.age}/>
                    );
                  })
                }
            </div>
        </div>
    </Card>
  )
};
