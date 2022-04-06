import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 15%;
  position: absolute;
  bottom: 85%;
`;

export const Title = styled.div`
  position: relative;
  margin-left: 10%;
  margin-top: 1%;
  h1 {
    font-size: 2rem;
    color: var(--white);
  }
  h2 {
    color: #fbc900;
    font-size: 2rem;
  }
  @media (max-width: 2560px) {
    h1 {
      font-size: 3.5rem;
      color: var(--white);
    }
    h2 {
      color: #fbc900;
      font-size: 3.5rem;
    }
  }
  @media (max-width: 1560px) {
    h1 {
      font-size: 2.5rem;
    }
    h2 {
      font-size: 2.5rem;
    }
  }
  @media (max-width: 1253px) {
    h1 {
      font-size: 2rem;
    }
    h2 {
      font-size: 2rem;
    }
  }
  @media (max-width: 1000px) {
    h1 {
      font-size: 1.7rem;
    }
    h2 {
      font-size: 1.7rem;
    }
  }
  @media (max-width: 738px) {
    h1 {
      font-size: 1.5rem;
    }
    h2 {
      font-size: 1.5rem;
    }
  }
  @media (max-width: 644px) {
    display: none;
  }
`;

export const TopButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  right: 3rem;
  top: -4rem;
  border-radius: 7px;
  bottom: 5.3rem;
  z-index: 10;
  cursor: pointer;
  .linkAccount {
    position: relative;
    text-decoration: none;
    color: white;
  }
  .linkLogin {
    position: relative;
    text-decoration: none;
    color: white;
  }
  .accountTop {
    width: 15rem;
    height: 3rem;
    padding: 5px;
    margin: 0px 10px;
    font-size: 1.3rem;
    background-color: #fbc900;
    color: var(--white);
    font-weight: 700;
    text-shadow: 2px 2px rgb(0, 0, 0, 0.3);
    border-radius: 5px;
    border: 3px solid #fbc900;
    transition: 0.3s ease;
    cursor: pointer;
  }
  .accountTop:hover {
    border: 3px solid #fbc900;
    background: none;
    text-shadow: none;
    color: #fbc900;
    letter-spacing: 1px;
  }
  .loginTop {
    cursor: pointer;
    width: 15rem;
    height: 3rem;
    padding: 5px;
    margin: 0px 10px;
    border: none;
    border: 3px solid #fbc900;
    background: none;
    color: var(--white);
    border-radius: 5px;
    font-size: 1.3rem;
    font-weight: 700;
    transition: 0.3s ease-in-out;
  }
  .loginTop:hover {
    background: #fbc900;
    color: #e55252;
    border: 3px solid #fbc900;
    border: none;
    text-shadow: 2px 2px rgb(0, 0, 0, 0.3);
    letter-spacing: 1px;
  }
  @media (max-width: 2560px) {
    .accountTop {
      width: 18rem;
      height: 5rem;
      padding: 5px;
      margin: 0px 10px;
      font-size: 2rem;
      background-color: #fbc900;
      color: var(--white);
      font-weight: 700;
      text-shadow: 2px 2px rgb(0, 0, 0, 0.3);
      border-radius: 5px;
      border: 3px solid #fbc900;
      transition: 0.3s ease;
      cursor: pointer;
    }
    .loginTop {
      cursor: pointer;
      width: 18rem;
      height: 5rem;
      padding: 5px;
      margin: 0px 10px;
      border: none;
      border: 3px solid #fbc900;
      background: none;
      color: var(--white);
      border-radius: 5px;
      font-size: 2rem;
      font-weight: 700;
      transition: 0.3s ease-in-out;
    }
  }
  @media (max-width: 1560px) {
    .accountTop {
      width: 15rem;
      height: 4rem;
      font-size: 1.5rem;
    }
    .loginTop {
      width: 15rem;
      height: 4rem;
      font-size: 1.5rem;
    }
  }
  @media (max-width: 1253px) {
    .accountTop {
      width: 12rem;
      height: 3.5rem;
      font-size: 1rem;
    }
    .loginTop {
      width: 12rem;
      height: 3.5rem;
      font-size: 1rem;
    }
  }
  @media (max-width: 1000px) {
    .accountTop {
      width: 10rem;
      height: 3.2rem;
      font-size: 1rem;
    }
    .loginTop {
      width: 10rem;
      height: 3.2rem;
      font-size: 1rem;
    }
  }
  @media (max-width: 738px) {
    margin: 10px 10px;
    .accountTop {
      width: 8rem;
      height: 2.5rem;
      font-size: 0.8rem;
    }
    .loginTop {
      width: 8rem;
      height: 2.5rem;
      font-size: 0.8rem;
    }
  }
  @media (max-width: 644px) {
    align-items: center;
    justify-content: space-evenly;
    margin-left: 10rem;
    margin-top: 5rem;
    .accountTop {
      width: 10rem;
      height: 2.5rem;
      font-size: 0.8rem;
    }
    .loginTop {
      width: 10rem;
      height: 2.5rem;
      font-size: 0.8rem;
    }
  }
`;
export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  top: -15rem;
  height: 5rem;

  img {
    position: relative;
    width: 100%;
    z-index: -3;
    box-shadow: none;
  }
  @media (max-width: 1560px) {
    top: -12rem;
  }
`;
