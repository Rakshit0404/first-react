import ExpenseItem from './ExpenseItem.js';
import './AllExpenseItems.css';
import Card from '../UI/Card.js';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';

function AllExpenseItems(props) {
    const expenses=props.data;
    const [filterYear, setFilterYear] = useState('2020');
    const filterChangeHandler = (selectedInterval) => {
        setFilterYear(selectedInterval);
    }

    const expensesFilter=expenses.filter((expense)=>{
        return expense.date.getFullYear()==filterYear;
    });

    let component=<p>No expenses in this Year</p>

    if(expensesFilter.length>0)
    {
        component=expensesFilter.map(exp=>(<ExpenseItem key={exp.id} title={exp.title} amount={exp.amount} date={exp.date}></ExpenseItem>))
    }
    
    return (
        <div className="expenses-filter">
            <Card className="expenses">
                <ExpensesFilter selected={filterYear} onChangeFilter={filterChangeHandler}></ExpensesFilter>
                {component}
            </Card>
        </div>
    );
}

export default AllExpenseItems;