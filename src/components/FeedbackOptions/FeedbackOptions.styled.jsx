import styled from 'styled-components';

export const FormButtons = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  :first-child{background-color: green;}
`;

export const Buttons = styled.button`
  height: 40px;
  width: 100px;
  font-size: 15px;
  font-weight: 600;
  border-radius: 10px;
  cursor: pointer;
  :first-child{
    background-color: #00FA9A;
  }
  :last-child{
    background-color: #F08080	;
  }
`