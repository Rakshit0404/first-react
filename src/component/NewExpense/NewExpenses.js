import React, { useState } from 'react';

import './NewExpenses.css';
import ExpenseForm from './ExpenseForm';

const NewExpenses =(props)=>{

    const [isEditing, setIsEditing]=useState(false);

    const saveExpenseDataHandler=(enteredExpenseData)=>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    }

    const startEditingHandler=(event)=>{
        setIsEditing(true);
    }

    const stopEditingHandler=(event)=>{
        setIsEditing(false);
    }

    return (<div className="new-expense">
        {!isEditing && <button onClick={startEditingHandler}>Add new expense</button>}
        {isEditing && <ExpenseForm onSaveExpenseHandler={saveExpenseDataHandler} stopEditing={stopEditingHandler}></ExpenseForm>}
    </div>);
}

export default NewExpenses;