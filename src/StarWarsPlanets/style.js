import styled from "styled-components";

export const Container = styled.div`
  font-family: sans-serif;
  text-align: center;
`;

export const Counter = styled.button`
  margin: 20px;
  padding: 30px;
  background-color: ${({ theme }) => theme.primaryColor};
  color: white;
  font-size: ${({ theme }) => theme.fontsize};
`;
export const Title = styled.h1`
  text-align: center;
  padding:20px;
  color: ${({ theme }) => theme.TitleColor};
  font-size: ${({ theme }) => theme.fontsize};
`;
