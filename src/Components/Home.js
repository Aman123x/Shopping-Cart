import React,{useContext, useEffect} from 'react'
import ContextConsumer from '../context/ContextConsumer';

const Home = () => {

    let {data,setData,addToCart}=useContext(ContextConsumer);
    
    useEffect(()=>{
        product();
    },[])

    async function product(){
        try{
            const response=await fetch("https://fakestoreapi.com/products")
            const data=await response.json();
            console.log(data);
            setData(data);
        }
        catch(err){
            console.log(err);
        }
    }

  return (
    <div>
        <h1>Product List</h1>
        <div className='product'>
            {
                data.map((item)=>(
                    <div className='product-list' key={item.id}>
                        <img src={item.image} alt={item.name} />
                        <p>{item.title}</p>
                        <div>
                            <p>Price: ₹ {item.price}</p>
                            <button onClick={()=>addToCart(item)}>Add to Cart</button>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Home