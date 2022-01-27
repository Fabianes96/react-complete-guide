import { useState } from "react";
import { Card } from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import ExpensesFilter from "./ExpensesFilter";

const Expenses =({expenses})=> {
    const [year, setYear] = useState('2020');
    const onChangeYear = (selectedYear)=>{
        setYear(selectedYear);
    }
    return (
        <div>
            <Card className="expenses">
            <ExpensesFilter selected={year} onPickedYear={onChangeYear} />
            {
                expenses.map(expense => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />)
            }                
            </Card>            
        </div>
    );
}

export default Expenses