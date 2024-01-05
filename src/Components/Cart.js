import React,{useContext,useState} from 'react'
import ContextConsumer from '../context/ContextConsumer'
import "./Cart.css"

const Cart = () => {

    let {cart,setCart}=useContext(ContextConsumer);

    function handleIncrease(itemId){
        setCart((prevCart)=>
            prevCart.map((item)=>
                item.id===itemId?{...item,quantity:item.quantity+1}:item
            )
        );
    };

    function handleDecrease(itemId){
        setCart((prevCart)=>
            prevCart.map((item)=>
                item.id===itemId?{...item,quantity:item.quantity-1}:item
            )
            .filter((item) => item.quantity > 0)
        );
    };

    const calculateTotal=cart.reduce((total,item)=>total+item.quantity*item.price,0);


    console.log(cart);
  return (
    <div className='parent'>
        <div>
            {
                cart.map((item)=>(
                    <div className='cart-class' key={item.id}>
                        <div className='cart-class-left'>
                            <img src={item.image} alt={item.name} />
                            <p>{item.title}</p>
                            <p>Price: ₹ {item.price}</p>
                        </div>
                        <div className='cart-class-right'>
                            <p>Quantity: {item.quantity}</p>
                            <p>
                                <button onClick={()=>handleIncrease(item.id)}>+</button>
                                <button onClick={()=>handleDecrease(item.id)}>-</button>
                            </p>
                        </div>
                    </div>
                ))
            }
        </div>
        <div className='price'>
            <h1>Total Price: ₹ {calculateTotal.toFixed(2)}</h1>
        </div>
    </div>
  )
}

export default Cart