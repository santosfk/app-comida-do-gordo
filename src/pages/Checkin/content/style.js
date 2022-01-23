import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  position: absolute;
  bottom: 50%;
`;
export const HamburguerContent = styled.div`
  left: 50%;
  position: absolute;
  bottom: 55%;
`;

export const FirstPhrase = styled.div`
  position: relative;
  top: -15.5rem;
  left: 20%;
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
  position: absolute;

  right: 47%;
  top: 50%;
  display: flex;
  justify-content: center;
  img {
    width: 250px;
    height: 200px;
    position: relative;
    box-shadow: none;
    right: 320px;
    bottom: -50px;
    z-index: -3;
    padding: 2px;
  }
`;
export const SecondPhrase = styled.div`
  text-align: center;
  margin-bottom: -20rem;

  h1 {
    font-size: 2.5rem;
  }
  h2 {
    font-size: 2.5rem;
  }
  span {
    color: var(--red);
  }
`;
