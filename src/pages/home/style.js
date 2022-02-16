import styled from "styled-components";

export const Container = styled.div``;

export const Pratos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const PratosContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 5rem;
  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
    padding: 30px;
  }
`;
