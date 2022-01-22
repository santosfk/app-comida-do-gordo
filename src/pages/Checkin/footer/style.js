import styled from 'styled-components'

export const Container = styled.div`
display: flex;

`

export const AccountContainer = styled.div`
width: 50%;
height: 200px;
position: absolute;
border-right: 2px solid grey;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 10px;

.link{
    text-decoration: none;
    color: #FFB84A;
}

h1{
    text-align: center;
  
    font-size: 2rem;
    color: #FFB84A;
}
button{
    position:relative;
    margin-top: 17px;
    width: 300px;
    height: 50px;
    border: none;
    background-color: #E76969;
    color: var(--white);
    font-size: 1.4rem;
    font-weight: bold;
    transition: .4s;

}
button:hover{
    background: none;
    border: solid 1px  #E76969;
    color: #E76969;
    letter-spacing: 1px;
}



`
export const LoginContainer = styled.div`
width: 50%;
height: 200px;
position: absolute;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 10px;
right: 0px;

.link{
    text-decoration: none;
    color :#E76969;
    
}
h1{
    text-align: center;
  
    font-size: 2rem;
    color: #E76969;
}
button{
    position:relative;
    margin-top: 17px;
    width: 300px;
    height: 50px;
    border: none;
    background-color: #FFB84A;
;
    color: var(--white);
    font-size: 1.4rem;
    font-weight: bold;
    transition: .4s;

}
button:hover{
    background: none;
    border: solid 1px   #FFB84A;
    color:#FFB84A;
    letter-spacing: 1px;
}

`