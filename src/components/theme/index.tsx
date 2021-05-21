import { Theme } from '@emotion/react';
import styled from '@emotion/styled';
import ThemeIcon from './icon';
import { complementaryColor } from '@/utils/colors';

type SelectThemeProps = {
  state: {
    theme: string;
    theme_list: [string, Theme][];
  };
  actions: {
    setTheme: Function;
    setThemeList: Function;
  };
};

const SelectTheme = ({ state, actions }: SelectThemeProps) => {
  const { theme_list } = state;
  const { setThemeList } = actions;
  const ThemeIconList = styled.div`
    overflow: hidden;
    position: absolute;
    top: 16px;
    right: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 50px;
    border-radius: 5px;
    padding: 10px;
    transition: height 0.4s linear;
    &:hover {
      background-color: ${({ theme }) =>
        complementaryColor(theme.colors.backgroundColor)}22;
      height: ${theme_list.length * 40 + 10}px;
      transition: height 0.4s linear, background-color 0.2s linear;
    }
  `;
  const IconContainer = styled.div`
    &:not(:first-of-type) {
      margin-top: 10px;
    }
  `;

  const onClick = (theme: [string, Theme]) => {
    const [key] = theme;
    if (state.theme !== key) {
      actions.setTheme(key);
      const temp_list = [...theme_list.filter(([k]) => key !== k)];
      setThemeList([theme, ...temp_list]);
    }
  };
  return (
    <ThemeIconList>
      {theme_list.map((theme) => (
        <IconContainer key={theme[0]}>
          <ThemeIcon
            backgroundColor={theme[1].colors.backgroundColor}
            fontColor={theme[1].colors.fontColor}
            onClick={() => onClick(theme)}
          />
        </IconContainer>
      ))}
    </ThemeIconList>
  );
};

export default SelectTheme;
