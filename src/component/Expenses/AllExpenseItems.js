import './AllExpenseItems.css';
import { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import Card from '../UI/Card.js';

function AllExpenseItems(props) {
    const expenses = props.data;
    const [filterYear, setFilterYear] = useState('2020');
    const filterChangeHandler = (selectedInterval) => {
        setFilterYear(selectedInterval);
    }

    const expensesFilter = expenses.filter((expense) => {
        return expense.date.getFullYear() == filterYear;
    });
    return (
        <div className="expenses-filter">
            <Card className="expenses">
                <ExpensesFilter selected={filterYear} onChangeFilter={filterChangeHandler}></ExpensesFilter>
                <ExpensesChart expenses={expensesFilter}></ExpensesChart>
                <ExpensesList items={expensesFilter}></ExpensesList>
            </Card>
        </div>
    );
}

export default AllExpenseItems;