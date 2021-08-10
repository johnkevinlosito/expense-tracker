import { useState } from 'react';
import './Expenses.css'
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = ({expenses}) => {
    const [filteredYear, setFilteredYear] = useState('2021');
    const filterChangeHandler = selectedYear =>{
        setFilteredYear(selectedYear)
    }

    const  filteredExpense = expenses.filter( expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selectedYear={filteredYear} onFilterChange={filterChangeHandler}/>
                <ExpensesChart expenses={filteredExpense}/>
                <ExpensesList filteredExpense={filteredExpense} />
            </Card>
        </div>
    )
}

export default Expenses
