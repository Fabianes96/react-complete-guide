import React from 'react';
import './UserItem.css'

export const UserItems = ({username, age}) => {
  return(
    <li>
      {`${username} (${age} year old)`}
    </li>
  );
};
