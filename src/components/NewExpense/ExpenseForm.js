import { useState } from 'react';
import './ExpenseForm.css'

export const ExpenseForm = () => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });
    const titleChangeHandler = (e) => {
        setEnteredTitle(e.target.value);
        // setUserInput((prevState)=>{
        //     return {
        //         ...prevState,
        //         enteredTitle: e.target.value
        //     }
        // });
    }
    const amountChangeHandler = (e) => {
        setEnteredAmount(e.target.value);
        // setUserInput((prevState)=>{
        //     return{
        //         ...prevState,
        //         enteredAmount: e.target.value
        //     }
        // });
    }
    const dateChangeHandler = (e) => {
        setEnteredDate(e.target.value);
        // setUserInput((prevState)=>{
        //     return {
        //         ...prevState,
        //         enteredDate: e.value.target
        //     }
        // });
    }
    const submitHandler = (e)=>{
        e.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        console.log(expenseData);
    }
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="">Title</label>
                    <input type="text" onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="">Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="">Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type='submit'>Add Expense</button>
            </div>
            
        </form>

    );
};
