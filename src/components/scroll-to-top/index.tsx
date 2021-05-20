import theme from '@/themes/styled';
import Button from '@/components/button';
import Arrow from '@/icon/arrow';
import throttle from '@/utils/simple-throttle';
import { useState } from 'react';

const Top = () => {
  const { styled } = theme;
  const [is_show_top, setShowTop] = useState(false);
  const [inner_width, setWidth] = useState(window.innerWidth);
  window.addEventListener(
    'scroll',
    throttle(() => {
      if (window.scrollY >= 100) {
        !is_show_top && setShowTop(true);
      } else {
        is_show_top && setShowTop(false);
      }
    }, 200)
  );
  window.addEventListener(
    'resize',
    throttle(() => setWidth(window.innerWidth), 100)
  );
  const right = (inner_width - 1000) / 2;

  const Container = styled.div`
    z-index: 1;
    overflow: hidden;
    position: fixed;
    right: ${right}px;
    bottom: 100px;
    display: ${is_show_top ? 'block' : 'none'};
    border-radius: 50%;
    width: 40px;
    height: 40px;
    transform: rotateZ(90deg);
    box-shadow: 0 0 3px ${({ theme }) => theme.colors.fontColor};
    @media (max-width: 1080px) {
      right: 40px;
    }
    @media (max-width: 768px) {
      bottom: 50px;
    }
  `;

  return (
    <Container>
      <Button
        variant={'fill'}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{ width: '40px', height: '40px' }}
      >
        <Arrow style={{ width: '100%' }} />
      </Button>
    </Container>
  );
};

export default Top;
