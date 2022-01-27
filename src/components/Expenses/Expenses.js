import { useState } from "react";
import { Card } from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { ExpensesList } from "./ExpensesList";
import './Expenses.css'

const Expenses = ({ expenses }) => {
    const [year, setYear] = useState('2020');
    const onChangeYear = (selectedYear) => {
        setYear(selectedYear);
    }
    const filterArray = expenses.filter(expense=>expense.date.getFullYear().toString()=== year);
    
    return (
        <div>
            <Card className="expenses">                
                <ExpensesFilter selected={year} onPickedYear={onChangeYear} />
                <ExpensesList items={filterArray}/>         
            </Card>
        </div>
    );
}

export default Expenses