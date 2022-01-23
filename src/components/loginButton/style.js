import styled from 'styled-components'

export const container  = styled.div`
  display: flex;
    justify-content: center;
    button{
        background-color: var(--yellow);
    width: 10rem;
    height: 3rem;
    border: none;
    border-radius: 7px;
    margin-top: -10px;
    color: var(--red);
    font-weight: bold;
    font-size: 1.4rem;
    transition: .5s;
    }
    button:hover{
        letter-spacing: 2px;
    padding: 1px;
    color: var(--yellow);
    background-color: var(--red);
    }
`
