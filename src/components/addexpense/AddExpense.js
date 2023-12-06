import React from 'react'
import Topfold from '../topfold'
import { AddForm } from '../addform/AddForm'
import './addexpense.css'

const AddExpense = () => {
  return (
    <div className='add-expense'>
      <Topfold/>
      <AddForm/>

    </div>
  )
}

export default AddExpense