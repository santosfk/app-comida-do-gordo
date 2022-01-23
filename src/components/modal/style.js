import styled from 'styled-components'

export const container = styled.div`
 position: fixed;
    color: var(--black);
    top: 0;
    right: 0;
    z-index: 5;
    width: 200px;
    height: 250px;
    background-color: white;
    margin: 120px 15px ;
    border-radius: 15px;
    padding: 20px;
    box-shadow: 3px 5px 20px rgba(0, 0, 0, 0.185);
    h1{
        margin-top: -23px;
    color: var(--red);


    }
`
export const headerContainer = styled.div`
display: flex;
    justify-content: space-between;
    .closeButton{
        font-size: 1.5rem;
    }
`
export const inputbox1 = styled.div `
:focus-within{
    transform: translateY(-5px);
    color: var(--red);
    letter-spacing: 1px;
    transition:  .4s;
}
margin: 2rem .4rem;
font-weight: bold;
#userId{
    outline: none;
    border: none;
    border-bottom: 2px solid var(--black);
}
`
export const inputbox2 = styled.div`
:focus-within{
    transform: translateY(-5px);
    color: var(--red);
    letter-spacing: 1px;
    transition:  .4s;
}
 margin: 2rem .4rem;
    font-weight: bold;
    #userPassword{
    outline: none;
    border: none;
    border-bottom: 2px solid var(--black);  
}
`
export const cadastroContainer = styled.div`
  display: flex;
    justify-content: center;
    margin-top: 10px;

    .clickCadastrar{
    color: var(--red);
    padding: 0px 3px;
    font-weight: bold;
}
`
export const backdrop = styled.div`
 position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.192);
    z-index: 4;

`
