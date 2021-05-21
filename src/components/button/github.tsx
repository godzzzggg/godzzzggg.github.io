import styled from '@emotion/styled';
import GithubIcon from '@/icon/github';
import Button from './index';
import { complementaryColor } from '@/utils/colors';

const Github = () => {
  const Container = styled.div`
    position: absolute;
    top: 16px;
    right: 66px;
  `;
  const Link = styled(Button)`
    height: 50px;
    &:hover {
      background-color: ${({ theme }) =>
        complementaryColor(theme.colors.backgroundColor)}22;
      transition: background-color 0.2s linear;
    }
  `;
  return (
    <Container>
      <Link
        variant={'text'}
        onClick={() => window.open('https://github.com/godzzzggg/')}
      >
        <GithubIcon />
      </Link>
    </Container>
  );
};

export default Github;
