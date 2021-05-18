import { CSSProperties } from 'react';
import theme from '@/themes/styled';

type ArrowProps = {
  style?: CSSProperties;
};

const Arrow = ({ style }: ArrowProps) => {
  const { styled } = theme;
  const Svg = styled.svg`
    stroke: ${({ theme }) => theme.colors.fontColor};
    stroke-width: 5px;
    stroke-linecap: round;
  `;
  return (
    <Svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" style={style}>
      <line x1={10} y1={25} x2={40} y2={25} />
      <line x1={10} y1={25} x2={25} y2={10} />
      <line x1={10} y1={25} x2={25} y2={40} />
    </Svg>
  );
};

export default Arrow;
