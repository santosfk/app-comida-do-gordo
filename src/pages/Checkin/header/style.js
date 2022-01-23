import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 15%;
  position: absolute;
  bottom: 85%;
`;

export const Title = styled.div`
  position: relative;
  padding-left: 10%;
  padding-top: 1%;
  h1 {
    font-size: 2rem;
    color: var(--white);
  }
  h2 {
    color: #fbc900;
    font-size: 2rem;
  }
`;

export const TopButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  right: 3rem;
  bottom: 5.3rem;
  z-index: 10;

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
    width: 10rem;
    height: 3rem;
    padding: 5px;
    margin: 0px 10px;
    border: none;
    font-size: 1.3rem;
    background-color: #fbc900;
    color: var(--white);
    font-weight: 700;
    text-shadow: 2px 2px rgb(0, 0, 0, 0.3);
    border-radius: 5px;
    transition: 0.5s ease;
  }
  .accountTop:hover {
    border: 1px solid var(--white);
    background: none;
    text-shadow: none;
    color: #fbc900;
    letter-spacing: 1px;
  }
  .loginTop {
    width: 10rem;
    height: 3rem;
    padding: 5px;
    margin: 0px 10px;
    border: none;
    border: 1px solid #fbc900;
    background: none;
    color: var(--white);
    border-radius: 5px;
    font-size: 1.3rem;
    font-weight: 700;
    transition: 0.5s ease-in-out;
  }
  .loginTop:hover {
    background: #fbc900;
    color: #e55252;
    border: none;
    letter-spacing: 1px;
    text-shadow: 2px 2px rgb(0, 0, 0, 0.1);
  }
`;
export const ImageContainer = styled.div`
  position: relative;
  width: 100%;

  top: -10rem;

  img {
    position: relative;
    width: 100%;
    z-index: -3;
  }
`;
