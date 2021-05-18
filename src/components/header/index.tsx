import { withRouter, RouteComponentProps } from 'react-router';
import theme from '@/themes/styled';
import { ThemeType } from '@/themes';
import SelectTheme from '@/components/theme';
import CommonStyle from '@/style';
import { BackButton } from '@/components/button';
import { Github } from '@/components/button';

type HeaderProps = {
  state: {
    theme: string;
    theme_list: [string, ThemeType][];
  };
  actions: {
    setTheme: Function;
    setThemeList: Function;
  };
};

const Header = ({
  state,
  actions,
  location,
}: HeaderProps & RouteComponentProps) => {
  const { styled } = theme;
  const Container = styled.div`
    z-index: 1;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    width: 100%;
    height: ${CommonStyle.headerHeight};
    background-color: ${({ theme }) => theme.colors.backgroundColor};
    color: ${({ theme }) => theme.colors.fontColor};
    box-shadow: 0 0 8px ${({ theme }) => theme.colors.backgroundColor};
  `;
  return (
    <Container>
      {location.pathname !== '/' && (
        <BackButton variant={'text'} style={{ marginLeft: '16px' }} />
      )}
      <Github />
      <SelectTheme state={state} actions={actions} />
    </Container>
  );
};

export default withRouter(Header);
