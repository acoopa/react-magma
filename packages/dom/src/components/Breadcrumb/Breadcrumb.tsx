import * as React from 'react';
import styled from '@emotion/styled';
import { ThemeContext } from '../../theme/ThemeContext';
import { I18nContext } from '../../i18n';
import { InverseContext, useIsInverse } from '../../inverse';
import { useThemeStyling } from '@react-magma/themes';

/**
 * @children required
 */
export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  isInverse?: boolean;
  testId?: string;
}

const StyledList = styled.ol<BreadcrumbProps>`
  ${(props: BreadcrumbProps) =>
    useThemeStyling<BreadcrumbProps>({
      props,
      style: props.style,
      componentName: 'Breadcrumb',
    }) as any}
`;

export const Breadcrumb = React.forwardRef<HTMLOListElement, BreadcrumbProps>(
  (props, ref) => {
    const {
      'aria-label': ariaLabel,
      children,
      isInverse: isInverseProp,
      testId,
      ...other
    } = props;

    const theme = React.useContext(ThemeContext);
    const i18n = React.useContext(I18nContext);
    const isInverse = useIsInverse(isInverseProp);

    return (
      <InverseContext.Provider value={{ isInverse }}>
        <nav
          {...other}
          aria-label={ariaLabel ? ariaLabel : i18n.breadcrumb.navAriaLabel}
          data-testid={testId}
        >
          <StyledList isInverse={isInverse} ref={ref} theme={theme}>
            {children}
          </StyledList>
        </nav>
      </InverseContext.Provider>
    );
  }
);
