// import React from 'react'
import ExpenseCategory from './components/ExpenseCategory'
import AddCategory from './components/AddCategory'
import AddExpense from './components/AddExpense'
import ExpenseReport from './components/ExpenseReport'

const Expense = () => {
     return (
          <div className="h-full w-full bg-white flex flex-col justify-start overflow-hidden">
               <div className="overflow-y-auto p-3 overflow-visible h-fit">
                    <div className='px-2 py-2'>
                         <h2 className='text-2xl font-bold text-black'>Expense Report</h2>
                    </div>
                    <div>
                         <AddCategory />
                         <ExpenseCategory />
                    </div>
                    <div>
                         <AddExpense />
                    </div>
                    <div>
                         <ExpenseReport />
                    </div>
               </div>
          </div>
     )
}

export default Expense