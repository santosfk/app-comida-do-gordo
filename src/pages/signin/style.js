import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  height: 100%;

  form {
    margin-top: 10rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  h1 {
    margin-bottom: 1rem;
    font-size: 2.5rem;
    font-weight: bold;
    letter-spacing: 2px;
  }
  input {
    font-size: 1rem;
    margin: 3rem 15px;
    outline: none;
    border: none;
    background-color: transparent;
    border-bottom: 2px solid black;
    padding: 3px;
    transition: 0.5s;
    letter-spacing: 3px;
    :focus {
      transform: translateY(5px);
    }
  }
  label {
    font-size: 1.5rem;
    color: #e55252;
    font-weight: bold;
  }
`;
export const Button = styled.button`
  font-size: 1.3rem;
  width: 250px;
  padding: 10px;
  border-radius: 7px;
  outline: none;
  border: 2px solid transparent;
  font-weight: 800;
  background-color: #ffff00;
  transition: 0.5s;
  color: #e55252;
  :hover {
    letter-spacing: 5px;
    background-color: transparent;
    border: 2px solid #ffff00;
  }
`;
