import type { CreateStyledComponent, StyledOptions } from '@emotion/styled';
import type { FilteringStyledOptions } from '@emotion/styled/types/base';
import type { PropsOf } from '@emotion/react';
import { ThemeProvider as BaseThemeProvider } from '@emotion/react';
import _styled from "@emotion/styled";

// emotion 11
export interface CreateStyled<Theme> {
  <
    C extends React.ComponentType<React.ComponentProps<C>>,
    ForwardedProps extends keyof React.ComponentProps<
      C
    > = keyof React.ComponentProps<C>
    >(
    component: C,
    options: FilteringStyledOptions<React.ComponentProps<C>, ForwardedProps>
  ): CreateStyledComponent<
    Pick<PropsOf<C>, ForwardedProps> & {
      theme?: Theme
      as?: React.ElementType
    }
  >

  <C extends React.ComponentType<React.ComponentProps<C>>>(
    component: C,
    options?: StyledOptions<React.ComponentProps<C>>
  ): CreateStyledComponent<
    PropsOf<C> & {
      theme?: Theme
      as?: React.ElementType
    }
  >

  <
    Tag extends keyof JSX.IntrinsicElements,
    ForwardedProps extends keyof JSX.IntrinsicElements[Tag] = keyof JSX.IntrinsicElements[Tag]
    >(
    tag: Tag,
    options: FilteringStyledOptions<JSX.IntrinsicElements[Tag], ForwardedProps>
  ): CreateStyledComponent<
    { theme?: Theme; as?: React.ElementType },
    Pick<JSX.IntrinsicElements[Tag], ForwardedProps>
  >

  <Tag extends keyof JSX.IntrinsicElements>(
    tag: Tag,
    options?: StyledOptions<JSX.IntrinsicElements[Tag]>
  ): CreateStyledComponent<
    { theme?: Theme; as?: React.ElementType },
    JSX.IntrinsicElements[Tag]
  >
}

export type StyledTags<Theme> = {
  [Tag in keyof JSX.IntrinsicElements]: CreateStyledComponent<
    {
      theme?: Theme
      as?: React.ElementType
    },
    JSX.IntrinsicElements[Tag]
  >
}

type MergedTheme<BaseTheme extends object, Theme extends object> = BaseTheme & Theme;

export function makeTheme<BaseTheme extends object, Theme extends object>() {
  type NewTheme = MergedTheme<BaseTheme, Theme>;

  const styled = _styled as CreateStyled<NewTheme> & StyledTags<NewTheme>;
  const ThemeProvider: React.FC<{ theme: NewTheme }> = ({ theme, children }) => (
    <BaseThemeProvider theme={theme}>
      {children}
    </BaseThemeProvider>
  );

  return { styled, ThemeProvider };
}
