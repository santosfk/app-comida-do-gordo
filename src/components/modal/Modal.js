import  React from "react";
import { AiFillCloseCircle as CloseIcon } from 'react-icons/ai';
import LoginButton from "../loginButton/LoginButton"
import * as comp from "./style"

function Modal({ usuario,setOpen }) {

    return (
       
        <>
        <comp.container> 
          <comp.headerContainer>
                <h1>{usuario}</h1>
                <CloseIcon className="closeButton" onClick={() => setOpen(false)}/>
                </comp.headerContainer>
            <h1 >Faça login</h1>
           <comp.inputbox1>
            <label htmlFor="userId">Usuário</label>
            <input type="text" id="userId"></input>
            </comp.inputbox1>
            <comp.inputbox2>
            <label htmlFor="userPassword" >Senha</label>
            <input type="password" id="userPassword" ></input>
            </comp.inputbox2>
          
            <LoginButton/>
           <comp.cadastroContainer>
            ou  <spam className="clickCadastrar"> cadastre-se</spam>
            </comp.cadastroContainer>
            
            </comp.container>
       <comp.backdrop onClick={() => setOpen(false)}></comp.backdrop>
        </>
        
    )
}

export default Modal