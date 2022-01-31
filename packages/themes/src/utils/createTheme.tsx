import styled from '@emotion/styled';
import { getThemeStyling, useThemeStyling } from './getThemeStyling';
import { GlobalStyles as BaseGlobal, GlobalThemeProps } from '../GlobalStyles';
import { mergeThemes } from './mergeThemes';

export interface CreateThemeProps {
  theme: GlobalThemeProps['theme'];
}

export const createTheme = (createThemeProps: CreateThemeProps) => {
  const theme = mergeThemes(createThemeProps.theme);

  console.log('theme', theme);

  const Global = (globalProps: Omit<GlobalThemeProps, 'theme'>) => (
    <BaseGlobal theme={theme} {...globalProps} />
  );

  return {
    getThemeStyling,
    useThemeStyling,
    Global,
    theme,
    styled,
  };
};
