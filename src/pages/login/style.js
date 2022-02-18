import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
`;

export const Title = styled.h1`
  margin-bottom: 50px;
  font-size: 2.3rem;
  color: #e55252;
`;

export const InputBox = styled.div`
  margin-bottom: 50px;
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  color: #ffc01e;
  font-weight: 700;
  input {
    letter-spacing: 2px;
    background-color: transparent;
    width: 250px;
    height: 40px;
    outline: none;
    border: none;
    margin: 10px 10px;
    border: none;
    border-bottom: 2px solid black;
    transition: 0.5s;
    font-size: 1.2rem;
    padding-right: 2px;
    text-align: center;
    :focus {
      transform: translateY(3px);
    }
  }
  label {
    text-align: center;
    font-size: 1.8rem;
  }
`;

export const ButtonContent = styled.div`
  button {
    width: 400px;
    height: 50px;
    border: none;
    font-size: 1.5rem;
    letter-spacing: 5px;
    font-weight: bold;
    border: 1px solid transparent;
    background-color: #e55252;
    color: white;
    transition: 0.5s;
    :hover {
      background-color: transparent;
      color: #e55252;
      border: 1px solid #e55252;
      letter-spacing: 8px;
    }
  }
`;
