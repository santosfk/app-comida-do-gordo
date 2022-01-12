import React,{useState} from 'react'
import { BsFillCartFill as BuyCar } from 'react-icons/bs';
import { FaUserCircle as UserIcon } from 'react-icons/fa';
import './header.css'
import Modal from "../modal/Modal"

function Header() {
  const [openModal,setOpenModal] = useState(false)
  return (
    <>
    {openModal && ( <Modal setOpen={setOpenModal}/>)}
      <div className="header-container">
        <div className='title-container'>
          <h1 className="main-title2">App de comida do gordo</h1>
          <h2 className="main-subtitle"> coma hoje pague ontem </h2>
        </div>
        
        <div className='userContainer'>
        <BuyCar className='cart'  />
        <UserIcon className='icon' onClick={() => setOpenModal(true)}/>
        </div>
      </div>

    </>
  )
}
export default Header;