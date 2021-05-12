import { ThemeProvider, ThemeConsumer, ThemeStyleProvider } from "@/contexts/theme";
import Themes from "@/themes";
import SelectTheme from "@/components/theme";
import Router from "@/router";
import './App.css';

type ChildProps = {
  styled: any,
  state: {
    theme: string
  }
  actions: {
    setTheme: Function
  }
}

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
        <SelectTheme actions={actions} />
        <Container>
          <Router />
        </Container>
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
