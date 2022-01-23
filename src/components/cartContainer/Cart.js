import React from 'react'
import * as comp from "./style"

const Cart = ({setOpenCart}) =>{
  return (
    <>
    
     <comp.cartContainer></comp.cartContainer>
     <comp.backdrop onClick={() => setOpenCart(false)}></comp.backdrop>
     </>
      
  )
};


export default Cart;