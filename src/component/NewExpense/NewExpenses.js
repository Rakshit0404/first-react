import React from 'react';

import './NewExpenses.css';
import ExpenseForm from './ExpenseForm';

const NewExpenses =(props)=>{
    const saveExpenseDataHandler=(enteredExpenseData)=>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        console.log(expenseData);
    }

    return (<div className="new-expense">
        <ExpenseForm onSaveExpenseHandler={saveExpenseDataHandler}></ExpenseForm>
    </div>);
}

export default NewExpenses;