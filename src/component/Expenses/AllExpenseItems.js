import './AllExpenseItems.css';
import { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpensesFilter from './ExpensesFilter';
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
                <ExpensesList items={expensesFilter}></ExpensesList>
            </Card>
        </div>
    );
}

export default AllExpenseItems;