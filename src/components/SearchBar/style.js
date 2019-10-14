import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 30px;
  padding: 0 20px 30px;
  border-bottom: 1px solid #D3D3D3;
`;

export const Label = styled.label`
  line-height: 25px;
`;

export const Input = styled.input`
  width: 100%;
  margin-left: 10px;
  border: 1px solid #888;
  border-radius: 5px;
  line-height: 25px;
  &:focus{
    box-shadow: 1px 1px #999 inset;
    outline: none;
  }
`;
