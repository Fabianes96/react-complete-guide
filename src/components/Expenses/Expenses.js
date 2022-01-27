import { useState } from "react";
import { Card } from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import ExpensesFilter from "./ExpensesFilter";

const Expenses = ({ expenses }) => {
    const [year, setYear] = useState('2020');
    const onChangeYear = (selectedYear) => {
        setYear(selectedYear);
    }
    const filterArray = expenses.filter(expense=>expense.date.getFullYear().toString()=== year);
    let expensesContent = <p>No expenses found.</p> 
    if (filterArray.length > 0) {
        expensesContent = filterArray.map((expense)=>{
            return(
                <ExpenseItem 
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            )
        })
    }
    return (
        <div>
            <Card className="expenses">                
                <ExpensesFilter selected={year} onPickedYear={onChangeYear} />
                {expensesContent}             
            </Card>
        </div>
    );
}

export default Expenses