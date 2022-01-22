import React from 'react';
import * as comp from "./style"
import { Link } from "react-router-dom";
function Footer () {
return(
    <>
    <comp.Container>
    <comp.AccountContainer>
        <h1>Comece agora mesmo</h1>
        <button><Link to="login" className='link'>Criar Conta</Link></button>
    </comp.AccountContainer>
    <comp.LoginContainer> 
        <h1>Ja tem uma Conta?</h1>
        <button><Link to="login" className='link'>Login</Link></button>

    </comp.LoginContainer>

    </comp.Container>
    
    </>
)

}

export default Footer;