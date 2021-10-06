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
                {expenses.map(exp=>(<ExpenseItem key={exp.id} title={exp.title} amount={exp.amount} date={exp.date}></ExpenseItem>))}
            </Card>
        </div>
    );
}

export default AllExpenseItems;