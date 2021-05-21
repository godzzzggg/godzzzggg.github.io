import { CSSProperties, MouseEventHandler, ReactNode } from 'react';
import styled from '@emotion/styled';
import BackButton from './backButton';
import Github from './github';

export const getButton = (variant: string | undefined) => {
  const base = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0;
    border-radius: 5px;
    padding: 8px 10px;
    cursor: pointer;
    &:focus {
      outline: none;
    }
  `;
  const DefaultButton = styled(base)`
    border: 1px solid ${({ theme }) => theme.colors.fontColor};
    background-color: ${({ theme }) => theme.colors.backgroundColor};
    color: ${({ theme }) => theme.colors.fontColor};
    &:hover {
      background-color: ${({ theme }) => theme.colors.fontColor};
      color: ${({ theme }) => theme.colors.backgroundColor};
      & svg {
        stroke: ${({ theme }) => theme.colors.backgroundColor};
      }
    }
  `;
  const FillButton = styled(base)`
    background-color: ${({ theme }) => theme.colors.fontColor};
    color: ${({ theme }) => theme.colors.backgroundColor};
    & svg {
      stroke: ${({ theme }) => theme.colors.backgroundColor};
    }
  `;
  const TextButton = styled(base)`
    background-color: transparent;
    color: ${({ theme }) => theme.colors.fontColor};
    &:hover {
      background-color: ${({ theme }) => theme.colors.fontColor}22;
    }
  `;
  const Buttons = new Map([
    ['default', DefaultButton],
    ['fill', FillButton],
    ['text', TextButton],
  ]);
  return Buttons.get(variant || 'default') || DefaultButton;
};

type ButtonProps = {
  variant?: string;
  onClick: MouseEventHandler;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

const Button = (props: ButtonProps) => {
  const Button = getButton(props.variant);
  return (
    <Button
      onClick={props.onClick}
      style={props.style}
      className={props.className}
    >
      {props.children}
    </Button>
  );
};

export default Button;

export { BackButton, Github };
