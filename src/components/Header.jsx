import React, { useState } from 'react'
import { searchProduct } from '../redux/action'
import { useDispatch } from 'react-redux'

const Header = () => {

const [value, setvalue] = useState('')
const dispatch = useDispatch();
const handleChange=(value)=>{
    setvalue(value);
    dispatch(searchProduct(value))
}
  return (
    <div className='header d-flex align-items-center justify-content-between gap-10'>
        <div className='logo'>
            <img src='./Logo.png' alt='logo' />
        </div>
        <div className="search form-group flex-grow-1">
            <input type='search' placeholder='Search' className='form-control' name='search' value={value} onChange={(e)=>handleChange(e.target.value)}/>
        </div>
        <div className="menus">
            <ul className='d-flex list-group list-group-horizontal'>
                <li className='list-group-item'>
                    <a className='btn btn-link text-decoration-none text-secondary d-flex gap-1 align-items-center justify-content-center'>
                        <span>Store</span>
                    </a>
                </li>
                <li className='list-group-item'>
                    <a className='btn btn-link text-decoration-none text-secondary d-flex gap-1 align-items-center justify-content-center'>
                        <span>Account</span>
                    </a>
                </li>
                <li className='list-group-item'>
                    <a className='btn btn-link text-decoration-none text-secondary d-flex gap-1 align-items-center justify-content-center'>
                        <span>Wish List</span>
                    </a>
                </li>
                <li className='list-group-item'>
                    <a className='btn btn-link text-decoration-none text-secondary d-flex gap-1 align-items-center justify-content-center'>
                        <span>Basket</span>  
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart4" viewBox="0 0 16 16">
                            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                        </svg>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Header