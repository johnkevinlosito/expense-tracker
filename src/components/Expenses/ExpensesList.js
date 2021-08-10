import React from 'react'
import './ExpensesList.css'
import ExpenseItem from './ExpenseItem'

const ExpensesList = ({filteredExpense}) => {

    
    if(filteredExpense.length === 0){
        return <h2 className="expenses-list__fallback">Found no expenses.</h2>
    }

    return (
        <ul className="expenses-list">
            {filteredExpense.length > 0 && filteredExpense.map((expense) =>(
                <ExpenseItem key={expense.id} expense={expense} />
                )
            )}
        </ul>
    )
}

export default ExpensesList
