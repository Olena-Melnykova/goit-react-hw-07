import styled from "styled-components"

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; 
  margin: auto; 
  width: fit-content; 
`;

export const Input = styled.input`
  width: 260px;
  padding: 10px 16px;
  margin-bottom: 16px;
  border-radius: 4px;
  border: 2px solid #D3D3D3;
`;

export const Label = styled.label`
  align-self: flex-start; 
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 16px;
`;

export const Button = styled.button`
  width: 260px; 
  padding: 10px 16px;
  border: none; 
  border-radius: 4px;
  background-color: #00FFFF;
  color: #778899;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer; 
  margin-bottom: 16px; 
`;