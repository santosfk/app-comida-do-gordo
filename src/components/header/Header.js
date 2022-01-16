import React,{useState} from 'react'
import { BsFillCartFill as BuyCar } from 'react-icons/bs';
import { FaUserCircle as UserIcon } from 'react-icons/fa';
import './header.css'
import Modal from "../modal/Modal"
import { Link } from "react-router-dom";
import Cart from "../cartContainer/Cart"

function Header() {
  const [openModal,setOpenModal] = useState(false)
  const [openCart,setOpenCart] = useState(false)
  
  return (
    <>
    {openCart && (<Cart setOpenCart={setOpenCart}/>)}
    {openModal && ( <Modal setOpen={setOpenModal}/>)};
   
      <div className="header-container">
        <div className='title-container'>
          <h1 className="main-title2">App de comida do gordo</h1>
          <h2 className="main-subtitle"> coma hoje pague ontem </h2>
        </div>
        <nav className="navigationBar">
        <Link className="links" to="/">Home</Link> 
        <Link className="links" to="foods">Foods</Link>
        <Link className="links" to="login">Login</Link>
        <Link className="links" to="signin">Signin</Link>
      </nav>
      
        <div className='userContainer'>
        <BuyCar className='cart' onClick={() => setOpenCart(true)}/>
        <UserIcon className='icon' onClick={() => setOpenModal(true)}/>
        </div>
      </div>
      
    </>
  )
}
export default Header;