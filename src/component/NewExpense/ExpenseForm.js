import React from "react";

import './ExpenseForm.css';

const ExpenseForm = () => {
    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text'></input>
                </div>
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='number' min="0.01" max="0.01"></input>
                </div>
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='date' min="2019-01-01" max="2022-12-31"></input>
                </div>
            </div>
            <div className="new-expense__actions">
            <input type="submit" value="Add Expense"></input>
            </div>
        </form>
    );
}

export default ExpenseForm;