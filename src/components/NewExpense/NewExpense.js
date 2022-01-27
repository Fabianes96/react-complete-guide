import { useState } from 'react';
import { ExpenseForm } from './ExpenseForm';
import './NewExpense.css';

export const NewExpense = ({onAddExpense}) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData)=>{
    const expenseData={
      ...enteredExpenseData,
      id:Math.random().toString()
    };    
    onAddExpense(expenseData);
    setIsEditing(false);
  }
  const onAddNewExpense = ()=>{
    setIsEditing(!isEditing)
  }
  return(
      <div className='new-expense'>
        {
          isEditing 
          ? <ExpenseForm isEditing={onAddNewExpense} onSaveExpenseData={saveExpenseDataHandler} />
          : <button onClick={onAddNewExpense}>Add New Expense</button>
        }
      </div>
  );
};
