import { useState } from "react/cjs/react.development";
import AllExpenseItems from "./component/Expenses/AllExpenseItems.js";
import NewExpenses from "./component/NewExpense/NewExpenses.js"

const DUMMY_EXPENSES = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: 'e2',
      title: 'New TV',
      amount: 799.49,
      date: new Date(2021, 2, 12)
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

function App() {
  const [expenses,setExpenses]=useState(DUMMY_EXPENSES);

  const onChangeHandler=(expense)=>{
    setExpenses(prevExpense=>{
      return [expense, ...prevExpense];
    })
  }

  return (
    <div>
      <NewExpenses onAddExpense={onChangeHandler}></NewExpenses>
      <AllExpenseItems data={expenses}></AllExpenseItems>
    </div>
  );
}

export default App;
