import { Global, css, useTheme, Theme } from '@emotion/react';
import styled from '@emotion/styled';
import {
  ThemeProvider,
  ThemeConsumer,
  ThemeStyleProvider,
} from '@/contexts/theme';
import Themes from '@/themes';
import Header from '@/components/header';
import Router from '@/router';
import ScrollToTop from '@/components/scroll-to-top';
import './App.css';

type ChildProps = {
  state: {
    theme: string;
    theme_list: [string, Theme][];
  };
  actions: {
    setTheme: Function;
    setThemeList: Function;
  };
};

const GlobalStyle = () => {
  const theme = useTheme();
  return (
    <Global
      styles={css`
        body {
          background-color: ${theme.colors.backgroundColor};
          color: ${theme.colors.fontColor};
        }
      `}
    />
  );
};

const child = ({ state, actions }: ChildProps) => {
  const theme = Themes[state.theme] || Themes.Default;
  const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.backgroundColor};
    color: ${({ theme }) => theme.colors.fontColor};
  `;
  return (
    <ThemeStyleProvider theme={theme}>
      <GlobalStyle />
      <Header state={state} actions={actions} />
      <Container>
        <Router />
      </Container>
      <ScrollToTop />
    </ThemeStyleProvider>
  );
};

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <ThemeConsumer>{child}</ThemeConsumer>
      </ThemeProvider>
    </div>
  );
}

export default App;
