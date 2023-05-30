import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  let [year, setYear] = useState("2020");

  function getYear(year) {
    setYear(year);
  }

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === year
  })

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter defaultYear={year} getYear={getYear} />

        {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}

      </Card>
    </div>
  );
};

export default Expenses;
