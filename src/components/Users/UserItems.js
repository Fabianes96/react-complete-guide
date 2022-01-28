import React from 'react';
import './UserItem.css'

export const UserItems = ({username, age}) => {
  return(
    <div className='item'>
      <span>{`${username} (${age} year old)`}</span>
    </div>
  );
};
