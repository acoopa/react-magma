import { Global, css } from '@emotion/react';

import { ThemeInterface } from '../ThemeInterface';
import { useIsInverse } from '../inverse';
import { magmav3 as v3 } from '../magma';
import { mergeThemes } from '../utils';

import { convertThemeToCssVariables } from '../utils';

export interface GlobalThemeProps {
  theme: ThemeInterface;
}

function getStyles(isInverse: boolean, vars: Record<string, string>) {
  return css`
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap');

    :root {
      ${vars}
    }

    *,
    *:before,
    *:after {
      box-sizing: border-box;
    }

    *:focus {
      outline: 2px dotted
        ${isInverse ? 'var(--colors-focusInverse)' : 'var(--colors-focus)'};
      outline-offset: 4px;
    }

    html {
      -ms-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
      font-size: var(--typeScale-size03-fontSize);
      line-height: var(--typeScale-size03-lineHeight);
      scroll-behavior: smooth;
    }

    html,
    body {
      background: ${isInverse
        ? 'var(--colors-foundation)'
        : 'var(--colors-neutral08)'};
      color: ${isInverse ? 'var(--colors-neutral08)' : 'var(--colors-neutral)'};
      margin: 0;
      padding: 0;
    }

    body {
      font-family: var(--bodyFont);
      font-style: normal;
      font-weight: 400;
      font-size: var(--typeScale-size03-fontSize);
      line-height: var(--typeScale-size03-lineHeight);
    }

    a {
      color: ${isInverse ? 'var(--colors-neutral07)' : 'var(--colors-primary)'};
      cursor: pointer;
      text-decoration: underline;

      &:hover,
      &:focus {
        color: ${isInverse ? 'var(--colors-neutral06)' : 'var(--colors-focus)'};
      }
    }

    button,
    input,
    optgroup,
    select,
    textarea {
      font: inherit;
      margin: 0;
    }

    svg:not(:root) {
      overflow: hidden;
    }
  `;
}

export const GlobalStyles = ({ theme }: GlobalThemeProps) => {
  const isInverse = useIsInverse() || false;
  const vars = convertThemeToCssVariables(mergeThemes(theme, v3));

  return <Global styles={getStyles(isInverse, vars)} />;
};
