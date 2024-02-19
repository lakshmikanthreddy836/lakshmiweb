// import React from 'react'
import ExpenseCategory from './components/ExpenseCategory'
import AddCategory from './components/AddCategory'
import AddExpense from './components/AddExpense'
import ExpenseReport from './components/ExpenseReport'

const Expense = () => {
     return (
          <div>
               <div className='px-2 py-2'>
                    <h2>Expense Report</h2>
               </div>
               <div>
                    <AddCategory />
                    <ExpenseCategory />
               </div>
               <div>
                    <AddExpense/>
               </div>
               <div>
                    <ExpenseReport/>
               </div>
          </div>
     )
}

export default Expense