import React,{useState} from 'react'
import { BsFillCartFill as BuyCar } from 'react-icons/bs';
import { FaUserCircle as UserIcon } from 'react-icons/fa';
import Modal from "../modal/Modal"
import { Link } from "react-router-dom";
import Cart from "../cartContainer/Cart"
import {HeaderContainer}  from "./style"
import {TitleContainer} from "./style"
import {NavigationBar} from "./style"
import {UserContainer} from "./style"

function Header() {
  const [openModal,setOpenModal] = useState(false)
  const [openCart,setOpenCart] = useState(false)

  return (
    <>
    {openCart && (<Cart setOpenCart={setOpenCart}/>)}
    {openModal && ( <Modal setOpen={setOpenModal}/>)};
   
      <HeaderContainer>
       <TitleContainer>
          <h1 >App de comida do gordo</h1>
          <h2 > coma hoje pague ontem </h2>
          </TitleContainer>
        <NavigationBar>
        <Link className="links" to="/">Home</Link> 
        <Link className="links" to="foods">Foods</Link>
        
        </NavigationBar>
      
        <UserContainer>
        <BuyCar className='cart' onClick={() => setOpenCart(true)}/>
        <UserIcon className='icon' onClick={() => setOpenModal(true)}/>
        </UserContainer>
        </HeaderContainer>
        
    </>
  )
}
export default Header;