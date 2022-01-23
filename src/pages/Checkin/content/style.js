import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  position: absolute;
  bottom: 50%;
  display: flex;
  justify-content:center ;
  align-items: center;


  
  
`;
export const HamburguerContent = styled.div`
  left: 10%;
  position: relative;
  top: -5rem;
 
`;

export const FirstPhrase = styled.div`
 position: relative;
  bottom: -2rem;
  left: 12rem;
  z-index: 6;
  h1 {
    font-size: 2.5rem;
    letter-spacing: 2px;
  }
  h2 {
    font-size: 2.5rem;
    letter-spacing: 2px;
  }
  span {
    color: #fbc900;
  }
`;
export const TruckContent = styled.div`
  position:absolute;
  right:50%;
  top: 60%;
 align-items: center;
  display: flex;
  justify-content: center;
  img {
    width: 250px;
    height: 200px;
    position: relative;
    box-shadow: none;
    right: 320px;
  
    z-index: -3;
    padding: 2px;
  }
`;
export const SecondPhrase = styled.div`
  
  text-align: center;
  bottom: -15rem;
  right: 15%;
  position:relative ;

  h1 {
    font-size: 3rem;
  }
  h2 {
    font-size: 3rem;
  }
  span {
    color: var(--red);
  }
`;
