import React from 'react'
import Topfold from '../../components/topfold'
import './home.css'
import { Link } from 'react-router-dom'
import Expenselist from '../../components/expenselist/Expenselist'
import { AddForm } from '../../components/addform/AddForm'

const Home = () => {
  return (
    <div className='home'>
     
        <Topfold/>
     
      <Expenselist/>
    </div>
  )
}

export default Home