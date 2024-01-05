import React,{useState} from "react";
import ContextConsumer from "./ContextConsumer";

const ContextProvider=(props)=>{
    const [data,setData]=useState([]);
    const [cart,setCart]=useState([]);

    const addToCart=(item)=>{
        const existingItem=cart.find((cartItem)=>cartItem.id===item.id);

        if(existingItem){
            setCart((prevCart)=>
                prevCart.map((cartItem)=>
                cartItem.id===item.id?{
                    ...cartItem,quantity:cartItem.quantity+1
                }:cartItem
                )
            )
        }
        else{
            setCart((prevCart) => [...prevCart, { ...item, quantity: 1 }]);
        }
    }


    return(
        <ContextConsumer.Provider value={{data,setData,cart,setCart,addToCart}}>
            {props.children}
        </ContextConsumer.Provider>
    )
}

export default ContextProvider;