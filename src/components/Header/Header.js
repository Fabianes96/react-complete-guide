import React from 'react';
import classes from './Header.module.css';
import mealsImage from '../../assets/meals.jpg';
import { HeaderCartButton } from './HeaderCartButton';



export const Header = ({title, showCart}) => {
  return(
    <header>
      <div className={classes.header}>
        <h2>{title}</h2>
        <HeaderCartButton showCart={showCart} />
      </div>
      <div className={classes["main-image"]}> 
        <img src={mealsImage} alt="Restaurant" />
      </div>
    </header>
  );
};
