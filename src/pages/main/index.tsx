import React, { useState } from "react";
import { Link } from "react-router-dom";
import theme from "@/themes/styled";

const Main: React.FC = () => {
  const { styled } = theme;
  const MainContainer = styled.div`
    max-width: 420px;
    width: 100%;
  `;
  // 아래에서 위로 올라오는 효과, opacity 조정
  const HoverText = styled.div`
    margin-bottom: 50px;
    font-size: 36px;
    font-weight: bold;
    text-align: center;
  `;
  const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
  `;
  const Button = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    border: 2px solid ${({ theme }) => theme.colors.fontColor};
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.backgroundColor};
    color: ${({ theme }) => theme.colors.fontColor};
    text-decoration: none;
    cursor: pointer;
    &:hover {
      background-color: ${({ theme }) => theme.colors.fontColor};
      color: ${({ theme }) => theme.colors.backgroundColor};
      box-shadow: 0 0 4px inset ${({ theme }) => theme.colors.backgroundColor};
    }
    &:focus {
      outline: none;
    }
    &:not(:first-of-type) {
      margin-left: 10px;
    }
  `;

  const [hover_text, setText] = useState('　');
  const buttons = [
    { title: '소개', href: '/introduce', hover: 'I AM' },
    { title: '프로젝트', href: '/projects', hover: 'PROJECTS' },
  ];
  const onMouseEnter = (index: number) => setText(buttons[index].hover);
  const onMouseLeave = () => setText('　');
  return (
    <MainContainer>
      <HoverText>{hover_text}</HoverText>
      <ButtonContainer>
        {buttons.map((btn, i) =>
          <Button
            key={`btn-${i}`}
            to={btn.href}
            onMouseOver={() => onMouseEnter(i)}
            onMouseOut={onMouseLeave}
          >
            {btn.title}
          </Button>
        )}
      </ButtonContainer>
    </MainContainer>
  );
};

export default Main;
