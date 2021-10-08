import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card.js';

function ExpenseItem(props) {
    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={props.date}></ExpenseDate>
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <div className="expense-item__price">Rs {props.amount}</div>
                </div>
            </Card>
        </li>
    );
}

export default ExpenseItem;