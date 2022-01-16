import React from 'react'
import "./cart.css"


const Cart = ({setOpenCart}) =>{
  return (
    <>
    
     <div className="cartContainer"></div>
     <div className="cartBackdrop" onClick={() => setOpenCart(false)}></div>
     </>
      
  )
};


export default Cart;