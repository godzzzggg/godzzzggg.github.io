import React from 'react';
import styled from '@emotion/styled';
import { complementaryColor } from '@/utils/colors';

type ThemeIconProps = {
  backgroundColor: string;
  fontColor: string;
  onClick: React.MouseEventHandler;
};

const ThemeIcon = ({ backgroundColor, fontColor, onClick }: ThemeIconProps) => {
  const Icon = styled.div`
    overflow: hidden;
    display: flex;
    border: 2px solid
      ${({ theme }) => complementaryColor(theme.colors.backgroundColor)};
    border-radius: 50%;
    width: 30px;
    height: 30px;
    cursor: pointer;
  `;
  const BackgroundColor = styled.div`
    width: 50%;
    height: 100%;
    background-color: ${backgroundColor};
  `;
  const FontColor = styled.div`
    width: 50%;
    height: 100%;
    background-color: ${fontColor};
  `;

  return (
    <Icon onClick={onClick}>
      <BackgroundColor />
      <FontColor />
    </Icon>
  );
};

export default ThemeIcon;
