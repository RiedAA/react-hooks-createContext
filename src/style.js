import styled from "styled-components";

export const Title = styled.h1`
  text-align: center;
  padding:20px;
  color: ${({ theme }) => theme.TitleColor};
  font-size: ${({ theme }) => theme.fontsize};
`;
export const Text = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.TitleColor};
  font-size: ${({ theme }) => theme.fontsize};
`;
export const NameInput = styled.input`
  align-self: center;
  text-align: center;
  color: ${({ theme }) => theme.TitleColor};
  margin: 20px;
  padding: 10px;
  font-size: ${({ theme }) => theme.fontsize};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  && img{
    margin:0 auto;
  }
`;

export const Confirm = styled.button`
  margin: 20px;
  padding: 10px;
  text-align: center;
  background-color:#1460b8;
  color: white;
  font-size: ${({ theme }) => theme.fontsize};
`;
