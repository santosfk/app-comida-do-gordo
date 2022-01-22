import styled from 'styled-components'

export const HeaderContainer = styled.div `
  background-color: var(--red);
  display: flex;
  justify-content: space-between;
  align-items: center;
 box-shadow: 0px -5px 20px rgba(0, 0, 0, 0.705);
  width:100%;
  height: 100px;
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
`

export const TitleContainer = styled.div `
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  h1{
    color: var(--white);
    font-size: 2rem;
  }
  h2{
    font-size: 2rem;
  }
`
export const NavigationBar = styled.div`
 display: flex;
  justify-content: center;
  align-items: center;
 .links{
    padding: 3rem;
  text-decoration: none;
  color: var(--white);
  font-weight: bold;
  font-size: 1.2rem;
  transition: .4s;
 }
 .links:hover{
  transform: translateY(-5px);
  color: var(--black);
}
`
export const UserContainer = styled.div`
 margin-right: 10px;
  display: flex;
  gap: 2rem;
  .cart {
  color: var(--white);
  font-size: 1.7rem;
  cursor: pointer;
  transition: .4s;
}
.icon {
  color: var(--white);
  font-size: 1.7rem;
  transition: .4s;
}
.cart:hover{
    transform: translateY(-10px);
    color: var(--black);
}
.icon:hover{
    transform: translateY(-10px);
    color: var(--black);
}
`