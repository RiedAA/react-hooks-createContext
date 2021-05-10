import styled from "styled-components";

export const Container = styled.div`
  font-family: sans-serif;
  text-align: center;
`;

export const ShowImageButton = styled.button`
  margin: 20px;
  padding: 30px;
  background-color: ${({ theme }) => theme.primaryColor};
  color: white;
  font-size: 25px;
`;
export const Catimage = styled.img`
  margin: auto;
  margin-top: 20px;
  width: 300px;
  display: block;
`;
export const Title = styled.h1`
  text-align: center;
  padding:20px;
  color: ${({ theme }) => theme.TitleColor};
`;
