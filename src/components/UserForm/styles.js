import styled from 'styled-components'
import { Colors } from '../../styles/Colors'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: max-content;
  margin: 0 auto;
  padding: 18px;
  background-color: rgba(0, 0, 0, 0.02);
  border-radius: 3px;
  border: 1px solid rgba(0, 0, 0, .1);
`

export const Figure = styled.figure`
  width: 76px;
  height: 100px;
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
`

export const DataContainer = styled.div`
  margin-bottom: 18px;
  text-align: center;
`
export const DataContainerText = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: ${Colors.darkGray};
`

export const Form = styled.form`
  width: 100%;
  &[disabled] {
    opacity: .7;
  };
`

export const Input = styled.input`
  width: 100%;
  height: 36px;
  margin-bottom: 18px;
  padding-left: 9px;
  font-size: 1rem;
  font-weight: 400;
  color: ${Colors.darkGray};
  border: none;
  outline: none;
  border-radius: 3px;
  border: 1px solid rgba(0, 0, 0, .1);
  &::placeholder {
    font-size: .8rem;
    font-weight: 400;
    color: ${Colors.mediumGray};
  };
  &[disabled] {
    opacity: .7;
  };
`

export const Button = styled.button`
  width: 100%;
  height: 36px;
  font-size: 1.1rem;
  font-weight: 500;
  background-color: ${Colors.secondary};
  color: ${Colors.lightGray};
  border: none;
  outline: none;
  border-radius: 3px;
`

export const AlertError = styled.span`
  width: 100%;
  height: max-content;
  margin-top: 12px;
  padding: 8px 0; 
  font-size: 1rem;
  background-color: ${Colors.alertBg};
  color: ${Colors.alertText};
  border-radius: 3px;
  border: 1px solid rgba(0, 0, 0, .1);
  text-align: center;
`

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 26px;
`

export const Text = styled.p`
  font-size: 1rem;
  color: ${Colors.darkGray};
`

export const ButtonFooter = styled.button`
  margin-left: 4px;
  font-size: 1rem;
  font-weight: 600;
  color: ${Colors.secondary};
  border: none;
  outline: none;
`
