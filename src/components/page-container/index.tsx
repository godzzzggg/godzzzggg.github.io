import { ReactNode } from 'react';
import styled from '@emotion/styled';
import CommonStyle from '@/style';

type ContainerProps = {
  children: ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  const Container = styled.div`
    padding-top: ${CommonStyle.headerHeight};
    max-width: 768px;
    width: 100%;
    height: calc(100% - ${CommonStyle.headerHeight});
    @media (max-width: 768px) {
      max-width: 420px;
    }
  `;
  return <Container>{children}</Container>;
};

export default Container;
