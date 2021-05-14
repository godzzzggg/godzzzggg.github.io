import { useState } from "react";
import theme from "@/themes/styled";
import themes, { ThemeType } from "@/themes";
import ThemeIcon from "./icon";
import { complementaryColor } from "@/utils/colors";

type SelectThemeProps = {
  state: {
    theme: string
  }
  actions: {
    setTheme: Function
  }
}

const SelectTheme = ({ state, actions }: SelectThemeProps) => {
  const { styled } = theme;
  const [theme_list, setThemeList] = useState(Object.entries(themes).slice(1));
  const ThemeIconList = styled.div`
    overflow: hidden;
    position: absolute;
    top: 16px;
    right: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 30px;
    border-radius: 5px;
    padding: 10px;
    transition: height 0.4s linear;
    &:hover {
      background-color: ${({ theme }) => complementaryColor(theme.colors.backgroundColor)}22;
      height: ${theme_list.length * 40 - 10}px;
      transition: height 0.4s linear, background-color 0.2s linear;
    }
  `;
  const IconContainer = styled.div`
    &:not(:first-of-type) {
      margin-top: 10px;
    }
  `;

  const onClick = (theme: [string, ThemeType]) => {
    const [key] = theme;
    if (state.theme !== key) {
      actions.setTheme(key);
      const temp_list = [...theme_list.filter(([k]) => key !== k)];
      setThemeList([theme, ...temp_list]);
    }
  };
  return (
    <ThemeIconList>
      {theme_list.map((theme) =>
        <IconContainer key={theme[0]}>
          <ThemeIcon
            backgroundColor={theme[1].colors.backgroundColor}
            fontColor={theme[1].colors.fontColor}
            onClick={() => onClick(theme)}
          />
        </IconContainer>
      )}
    </ThemeIconList>
  );
}

export default SelectTheme;
