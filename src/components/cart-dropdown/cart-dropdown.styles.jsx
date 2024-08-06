import styled from 'styled-components';
import { BaseButton, GoogleSignInButton, invertedButton } from '../button/button.styles';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 280px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

 ${BaseButton},
 ${GoogleSignInButton},
 ${invertedButton} {
  margin-top: auto;
 }
`;

export const EmptyMessage = styled.span`
  font - size: 18px;
  margin: 50px auto;
`;

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;
