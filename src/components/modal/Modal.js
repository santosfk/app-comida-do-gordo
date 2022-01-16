import  React from "react";
import "./modal.css"
import { AiFillCloseCircle as CloseIcon } from 'react-icons/ai';
import LoginButton from "../loginButton/LoginButton"

function Modal({ usuario,setOpen }) {

    return (
       
        <>
        <div className="modalContainer">
            <div className="headerContainer">
                <h1>{usuario}</h1>
                <CloseIcon className="closeButton" onClick={() => setOpen(false)}/>
            </div>
            <h1 className="formTitle">Faça login</h1>
            <div className="inputbox1">
            <label htmlFor="userId" className="labelUser">Usuário</label>
            <input type="text" id="userId"></input>
            </div>
            <div className="inputbox2">
            <label htmlFor="userPassword" className="labelPassword">Senha</label>
            <input type="password" id="userPassword" ></input>
            </div>
          
            <LoginButton/>
            <div className="cadastroContainer">
            ou  <spam className="clickCadastrar"> cadastre-se</spam>
            </div>
            
        </div>
        <div className="backdrop" onClick={() => setOpen(false)}>

        </div>
        </>
        
    )
}

export default Modal