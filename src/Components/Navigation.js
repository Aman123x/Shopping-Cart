import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import "./Navigation.css"
import ContextConsumer from '../context/ContextConsumer'
import cartt from "../Assets/shopping-cart.png"

const Navigation = () => {

  let {cart}=useContext(ContextConsumer);

  const totalQuantity=cart.reduce((total,item)=>total+item.quantity,0);

  return (
    <div className='nav'>
        <Link to="/">Home</Link>
        <Link to="/cart" className='cart-link'>
        <img src={cartt} alt='cart' />
        <span className='cart-count'>{totalQuantity}</span>
      </Link>
    </div>
  )
}

export default Navigation;