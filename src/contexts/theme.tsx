import { createContext, ReactElement, useState } from 'react';
import ThemeConstant from '@/constant/theme';
import _theme from '@/themes/styled';
import themes from '@/themes';

const ThemeContext = createContext<any>({
  styled: {},
  state: { theme: ThemeConstant.DEFAULT },
  actions: { setTheme: () => {} },
});

type ProviderProps = {
  children: ReactElement | ReactElement[];
};

const ThemeProvider = ({ children }: ProviderProps) => {
  const [theme, setTheme] = useState(ThemeConstant.DEFAULT);
  const [theme_list, setThemeList] = useState(Object.entries(themes).slice(1));
  const value = {
    styled: _theme.styled,
    state: { theme, theme_list },
    actions: { setTheme, setThemeList },
  };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

const { Consumer: ThemeConsumer } = ThemeContext;
const { ThemeProvider: ThemeStyleProvider } = _theme;
export { ThemeProvider, ThemeConsumer, ThemeStyleProvider };

export default ThemeContext;
