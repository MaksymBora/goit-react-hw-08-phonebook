import styled from 'styled-components';
import { Form } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px;
  align-items: center;

  div {
    width: 100%;
    color: ${props => props.theme.colors.editContact.text};

    ::before {
      border-color: ${props => props.theme.colors.editContact.formBorder};
    }

    ::after {
      border-color: ${props => props.theme.colors.editContact.hoverBorder};
    }
  }

  svg {
    width: 28px;
    height: 28px;
    color: ${props => props.theme.colors.editContact.icons};
  }

  @media screen and (min-width: ${props => props.theme.media.m}) {
    div > div {
      width: 300px;
    }

    svg {
      width: 36px;
      height: 36px;
    }
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  font-weight: 500;
  padding: 10px;

  @media screen and (min-width: ${props => props.theme.media.m}) {
    width: 500px;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: end;
  gap: 10px;

  label {
    color: ${props => props.theme.colors.editContact.icons};
  }
`;

export const Button = styled.button`
  padding: 12px;
  align-self: flex-start;
  margin-left: 55px;
  margin-top: 15px;
  min-width: 105px;
  background-color: rgb(102, 102, 102);
  color: #fff;
  border-radius: 4px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: box-shadow 250ms ease-in-out;

  &:hover {
    box-shadow: -1px 0px 8px -2px rgba(0, 0, 0, 0.75);
  }

  &:active {
    box-shadow: -1px 0px 8px -2px rgba(0, 0, 0, 0.75);
  }
`;
