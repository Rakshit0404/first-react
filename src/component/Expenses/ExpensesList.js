import React from 'react';
import ExpenseItem from './ExpenseItem.js';
import './ExpensesList.css';


const ExpensesList = (props) => {

    if (props.items.length == 0) {
        return (
            <h2 className="expenses-list__fallback">No expenses to display</h2>
        )
    }
    return (
        <ul className="expenses-list">
            {props.items.map(exp => (<ExpenseItem key={exp.id} title={exp.title} amount={exp.amount} date={exp.date}></ExpenseItem>))}
        </ul>
    );
}

export default ExpensesList;