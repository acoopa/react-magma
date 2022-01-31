import * as React from 'react';
import styled from '@emotion/styled';
import { ThemeContext } from '../../theme/ThemeContext';
import { ThemeInterface } from '../../theme/magma';
import { InverseContext, useIsInverse } from '../../inverse';
import { useThemeStyling } from '@react-magma/themes';

/**
 * @children required
 */
export interface AppBarProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * If true, the component will render at a shorter height with less padding
   * @default false
   **/
  isCompact?: boolean;
  isInverse?: boolean;
  position?: AppBarPosition;
  testId?: string;
  /**
   * @internal
   */
  theme?: ThemeInterface;
}

export enum AppBarPosition {
  absolute = 'absolute',
  fixed = 'fixed',
  relative = 'relative',
  static = 'static', // default
  sticky = 'sticky',
}

const StyledAppBar = styled.header<AppBarProps>`
  ${(props: AppBarProps) =>
    useThemeStyling<AppBarProps>({
      props,
      style: props.style,
      componentName: 'AppBar',
    }) as any}
`;

export const AppBar = React.forwardRef<HTMLDivElement, AppBarProps>(
  (props, ref) => {
    const {
      children,
      position = AppBarPosition.static,
      testId,
      ...other
    } = props;
    const theme = React.useContext(ThemeContext);
    const isInverse = useIsInverse(props.isInverse);

    return (
      <InverseContext.Provider
        value={{
          isInverse,
        }}
      >
        <StyledAppBar
          {...other}
          data-testid={testId}
          position={position}
          ref={ref}
          theme={theme}
        >
          {children}
        </StyledAppBar>
      </InverseContext.Provider>
    );
  }
);
