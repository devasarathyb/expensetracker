import React, { useState } from 'react'
import './topfold.css'
import {useDispatch} from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { searchExpense } from '../../redux/actions/expenses'

const Topfold = () => {
    const [query,setQuery] = useState('')
    const dispatch = useDispatch();

    const handleQuery = (e) => {
        setQuery(e.target.value)
        dispatch(searchExpense(e.target.value))
    }

   console.log(window.location.pathname)
  return (
    <div className='topfold'>
        {window.location.pathname === "/" ?
        (
        <div className='topfold-area'>
            <div className='search-icon'>
                <i class="fi-rr-search"/>
                <input placeholder='Search'
                value={query}
                onChange={(e)=>handleQuery(e)}/>
            </div>
            <Link to='/addexpense'>
            <div className='add-btn'>
              
                <i class = 'fi-rr-add'></i><label>Add</label>
                
            </div>
            </Link>
        </div> ) :  (
        <div className='topfold-area'>
            <Link to='/'>
            <div className='add-topfold-btn'>
                <i class = 'fi-rr-angle-left'></i>
                <label>Back</label>
            </div>
            </Link>
            <div className='add-topfold-btn'>
                <i class = 'fi-rr-cross-circle'></i>
                <label>Cancel</label>
            </div>
        </div>)
        
        }
        
    </div>
  )
}

export default Topfold