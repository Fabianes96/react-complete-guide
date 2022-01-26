import { useState } from 'react';
import { Card } from '../UI/Card';
import { ExpenseDate } from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = ({title,amount,date}) => {   
    
    const [titleName, setTitleName] = useState(title);
    const clickHandler = ()=>{
        setTitleName('Updated') 
    }
    
    return (
        <Card className='expense-item'>
            <ExpenseDate date={date}/>
            <div className='expense-item__description'>
                <h2>{titleName}</h2>
            </div>
            <div className='expense-item__price'>{amount}</div>
            <button onClick={clickHandler}>Change title</button>            
        </Card>
    );
}

export default ExpenseItem;