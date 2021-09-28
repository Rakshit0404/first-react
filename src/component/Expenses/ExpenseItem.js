import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card.js';

function ExpenseItem(props) {
    const clickHandler=()=>{
        console.log("click");
    }
    return (
        <Card className="expense-item">
        <ExpenseDate date={props.date}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">Rs {props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change title</button>
        </Card>
    );
}

export default ExpenseItem;