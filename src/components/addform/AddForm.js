import React, { useState } from 'react'
import './add-form.css'
import { categories } from '../../constants/add-expense';
import { useDispatch } from 'react-redux';
import { addExpense } from '../../redux/actions/expenses';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Successmodal from './successmodal';

export const AddForm = () => {
  const cate = categories;
  const [categoryopen, setCategoryopen] = useState(false);
  const [title,setTitle] = useState('');
  const [amount , setAmount] = useState('');
  const [category , setCategory] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const dispatch = useDispatch();

  const handleTitle = (e) => {
    setTitle(e.target.value)
  }
  const handleAmount = (e) => {
    const value= parseFloat(e.target.value)
    if(isNaN(value)){
      setAmount("")
      return
    }
    setAmount(value);
   
  }

  const handleCategory = (category) => {
    setCategory(category);
    setCategoryopen(false)
  }

  const handleSubmit = () => {
     if(title === '' || amount === '' || !category){
      const notify = () => toast("add some values");
      notify();
      return
     }
     const data = {title, amount,category, createdAt : new Date()}
     dispatch(addExpense(data))
     setModalOpen(true)
  }
  return (
    <div className='add-form'>
      {/* <ToastContainer
position="top-right"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick

pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/> */}
{/* Same as */}
<ToastContainer />
<Successmodal modalOpen={modalOpen} setModalOpen={setModalOpen}/>
      <div className='form-item'>
        <label>Title</label> 
        <input placeholder='Give a name to your expenditure' value={title} onChange={(e)=> handleTitle(e)}/>
      </div>
      <div className='form-item'>
       <label>Amount ₹</label> 
       <input placeholder='Amount spend' value={amount} onChange={(e)=> handleAmount(e)} className='amt-input'/>
      </div>
      <div className='category-container-parent'>
          <div className='category'>
                <div className='category-dropdown' onClick={()=>setCategoryopen(!categoryopen)}>
                  <label >{category? category.title : 'Category'}</label>
                  <i class='fi-rr-angle-down'></i>
                </div>
          
          {categoryopen && <div className='category-container'>
              {cate.map((category) => (
                <div className='category-item' style ={{
                  borderRight :`5px solid ${category.color}`
                }} key={category.id} onClick={()=> handleCategory(category)}>
                  <label>{category.title}</label>
                  <img src={category.icon} alt={category.title}/>
                </div>
              ))}
            </div>}
            </div>
      </div>
      <div className='form-addbtn'>
            <div onClick={() => handleSubmit()}>
              <label> Add</label>
              <i class='fi-rr-paper-plane'></i>
            </div>
      </div>
    </div>
  )
}
