import React from 'react'
import './expenselist.css'
import Card from './Card'
import { useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';

const Expenselist = () => {

  const notifysuccess = () => {
    toast.success('Expense Deleted')
  }

  const  {expenseList : list, query} = useSelector((state) => state.expenses)
  console.log(list)
  const filterList = list.filter(item => item.title.includes(query)) 
  console.log(filterList)


  return (
    <div className='expense-list'>

<ToastContainer />
        {filterList.length ? filterList.map((item) =>  <Card item={item} notifysuccess = {notifysuccess}/>) : 
        
          <div className='empty-state'>
             <img src={require('../../assets/images/empty.png')} alt='empty list' className='empty-img'/> 
             <label>Oh! Ur List is Empty</label>
          </div>
        }
    </div>
  )
}

export default Expenselist