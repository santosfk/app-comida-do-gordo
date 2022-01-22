import styled from 'styled-components'

export const Container = styled.div`

img{
    position: relative;
    width: 105%;
    height: 299px;
    top: -170px;
    left: -5px;
    z-index: -2;
    box-shadow: none;
   
 
}
`

export const Title = styled.div`
padding-left: 10% ;
padding-top: 1%;
h1{
    font-size: 2rem;
    color: var(--white);
}
h2{
    color: #FBC900;
    font-size: 2rem;
}

`
export const Form = styled.div`
background-color: #E55252;
position: absolute;
z-index: -1;
top: 0;
width: 100vw;
height: 250px;

`
export const TopButtons = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
position: relative;
right: 1rem;
bottom: 5.3rem;
z-index: 10;
.linkAccount{
    text-decoration: none;
    color: white;
   
}.linkLogin{
    text-decoration: none;
    color:white
}
.accountTop{
width: 200px;
height: 47px;
padding: 5px ;
margin: 0px 10px ;
border: none ;
font-size: 1.3rem;
background-color: #FBC900;
color: var(--white);
font-weight: 700;
text-shadow: 2px 2px rgb(0,0,0,0.300);
border-radius: 5px;
transition: .5s ease;
}
.accountTop:hover{
border: 1px solid  var(--white);
background: none;
text-shadow: none;
color: #FBC900;
letter-spacing: 1px;
}
.loginTop{
width: 200px;
height: 47px;
padding: 5px ;
margin: 0px 10px ;
border: none;
border: 1px solid  #FBC900;
background: none;
color:var(--white);
border-radius: 5px;
font-size: 1.3rem;
font-weight: 700;
transition:.5s ease-in-out;
}
.loginTop:hover{
    background: #FBC900 ;
    color: #E55252;
    border: none;
   letter-spacing: 1px;
   text-shadow: 2px 2px rgb(0,0,0,0.100);
}
`
