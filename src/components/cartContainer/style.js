import styled from 'styled-components'

export const cartContainer = styled.div`
width: 300px;
    height:350px;
    background-color: white;
    position: fixed;
    left: 77%;
    bottom: 42%;
    border-radius: 10px;
    box-shadow: 3px 5px 20px rgba(0, 0, 0, 0.185);
    z-index: 11;
`
export const backdrop = styled.div`
  position: fixed;
   left: 0;
   top: 0;
   z-index: 10;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.192);
`