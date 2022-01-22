import React from 'react'
 import * as comp from "./style"
 import vector from "./Vector.svg"
 import { Link } from "react-router-dom";


const Header = () => {
return (
    <>
    <comp.Container>
    <comp.Title>
    <h1>app de comida do gordo</h1>
    <h2>coma hoje, pague ontem!</h2>
    </comp.Title>
    <comp.TopButtons>
        <button className="accountTop" > <Link to="signin" className='linkAccount'>Criar Conta</Link></button>
        <button className="loginTop" ><Link to="login" className='linkLogin'>Fazer Login</Link></button>
    </comp.TopButtons>
  
    <img src={vector} alt='background'/>
  
    </comp.Container>
    </>
)
}


export default Header;