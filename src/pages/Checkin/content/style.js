import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  position: absolute;
  bottom: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const HamburguerContent = styled.div`
  left: 10%;
  position: relative;
  top: -5rem;
  @media (max-width: 2560px) {
    top: -15rem;
  }
  @media (max-width: 1024px) {
    top: -2rem;
  }
  @media (max-width: 688px) {
    display: none;
  }
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
  @media (max-width: 2560px) {
    position: relative;
    left: 9rem;
    top: -5rem;
    z-index: 6;
    h1 {
      font-size: 4rem;
      letter-spacing: 2px;
    }
    h2 {
      font-size: 4rem;
      letter-spacing: 2px;
    }
    span {
      color: #fbc900;
    }
  }
  @media (max-width: 1844px) {
    h1 {
      font-size: 3.4rem;
      letter-spacing: 2px;
    }
    h2 {
      font-size: 3.4rem;
      letter-spacing: 2px;
    }
    span {
      color: #fbc900;
    }
  }
  @media (max-width: 1675px) {
    h1 {
      font-size: 3rem;
      letter-spacing: 2px;
    }
    h2 {
      font-size: 3rem;
      letter-spacing: 2px;
    }
  }
  @media (max-width: 1440px) {
    top: 1.7rem;
    h1 {
      font-size: 2rem;
      letter-spacing: 2px;
    }
    h2 {
      font-size: 2rem;
      letter-spacing: 2px;
    }
  }
  @media (max-width: 1288px) {
    left: 6rem;
    h1 {
      font-size: 2.4rem;
    }
    h2 {
      font-size: 2.4rem;
    }
  }
  @media (max-width: 1024px) {
    h1 {
      font-size: 2.1rem;
    }
    h2 {
      font-size: 2.1rem;
    }
  }
  @media (max-width: 688px) {
    text-align: center;
    margin: auto;
    margin-top: -15rem;
    left: 8rem;
    h1 {
      font-size: 3rem;
    }
    h2 {
      font-size: 3rem;
    }
  }
`;
export const TruckContent = styled.div`
  position: absolute;
  right: 50%;
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
  @media (max-width: 870px) {
    right: 20%;
  }
  @media (max-width: 688px) {
    display: none;
  }
`;
export const SecondPhrase = styled.div`
  text-align: center;
  bottom: -15rem;
  right: 15%;
  position: relative;

  h1 {
    font-size: 3rem;
  }
  h2 {
    font-size: 3rem;
  }
  span {
    color: var(--red);
  }
  @media (max-width: 2560px) {
    h1 {
      font-size: 4rem;
    }
    h2 {
      font-size: 4rem;
    }
  }
  @media (max-width: 1844px) {
    h1 {
      font-size: 3.5rem;
    }
    h2 {
      font-size: 3.5rem;
    }
  }
  @media (max-width: 1675px) {
    h1 {
      font-size: 3rem;
    }
    h2 {
      font-size: 3rem;
    }
  }
  @media (max-width: 1440px) {
    h1 {
      font-size: 2.8rem;
    }
    h2 {
      font-size: 2.8rem;
    }
  }
  @media (max-width: 1288px) {
    text-align: center;
    bottom: -15rem;
    right: 15%;
    position: relative;
    h1 {
      font-size: 2.7rem;
    }
    h2 {
      font-size: 2.7rem;
    }
  }
  @media (max-width: 688px) {
    right: 25%;
    bottom: -20rem;
    padding: 10px;
    h1 {
      font-size: 3rem;
    }
    h2 {
      font-size: 3rem;
    }
  }
`;
