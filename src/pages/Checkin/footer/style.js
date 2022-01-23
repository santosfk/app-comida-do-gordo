import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  position: absolute;
  bottom: 0;
`;

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

  .link {
    text-decoration: none;
    color: #ffb84a;
  }
  cursor: pointer;

  h1 {
    text-align: center;

    font-size: 2rem;
    color: #ffb84a;
  }
  button {
    position: relative;
    margin-top: 17px;
    width: 300px;
    height: 50px;
    border: none;
    background-color: #e76969;
    cursor: pointer;
    color: var(--white);
    font-size: 1.4rem;
    font-weight: bold;
    border: solid 3px #e76969;
    border-radius: 7px;
    transition: 0.4s;
  }
  button:hover {
    border-radius: 7px;
    background: none;
    border: solid 3px #e76969;
    color: #e76969;
    letter-spacing: 1px;
  }
`;
export const LoginContainer = styled.div`
  width: 50%;
  height: 200px;
  position: absolute;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  right: 0px;

  .link {
    text-decoration: none;
    color: #e76969;
  }
  h1 {
    text-align: center;

    font-size: 2rem;
    color: #e76969;
  }

  button {
    position: relative;
    margin-top: 17px;
    width: 300px;
    height: 50px;
    border: none;
    background-color: #ffb84a;
    color: var(--white);
    font-size: 1.4rem;
    font-weight: bold;
    cursor: pointer;
    transition: 0.4s;
    border-radius: 7px;
    border: solid 3px #ffb84a;
  }

  button:hover {
    background: none;
    border-radius: 7px;
    border: solid 3px #ffb84a;
    color: #ffb84a;
    letter-spacing: 1px;
  }
`;
