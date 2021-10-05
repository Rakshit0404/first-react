import ExpenseItem from './ExpenseItem.js';
import './AllExpenseItems.css';
import Card from '../UI/Card.js';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';

function AllExpenseItems(props) {
    const expenses = props.data;
    const [filterYear, setFilterYear] = useState('2020');
    const filterChangeHandler = (selectedInterval) => {
        setFilterYear(selectedInterval);
    }

    return (
        <div className="expenses-filter">
            <Card className="expenses">
                <ExpensesFilter selected={filterYear} onChangeFilter={filterChangeHandler}></ExpensesFilter>
                <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
                <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
                <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItem>
                <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}></ExpenseItem>
            </Card>
        </div>
    );
}

export default AllExpenseItems;