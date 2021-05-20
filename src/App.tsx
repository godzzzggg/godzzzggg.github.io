import {
  ThemeProvider,
  ThemeConsumer,
  ThemeStyleProvider,
} from '@/contexts/theme';
import Themes, { ThemeType } from '@/themes';
import Header from '@/components/header';
import Router from '@/router';
import ScrollToTop from '@/components/scroll-to-top';
import './App.css';

type ChildProps = {
  styled: any;
  state: {
    theme: string;
    theme_list: [string, ThemeType][];
  };
  actions: {
    setTheme: Function;
    setThemeList: Function;
  };
};

const child = ({ styled, state, actions }: ChildProps) => {
  const theme = Themes[state.theme] || Themes.Default;
  const Container = styled.div((props: any) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: props.theme.colors.backgroundColor,
    color: props.theme.colors.fontColor,
  }));
  return (
    <>
      <ThemeStyleProvider theme={theme}>
        <Header state={state} actions={actions} />
        <Container>
          <Router />
        </Container>
        <ScrollToTop />
      </ThemeStyleProvider>
    </>
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
