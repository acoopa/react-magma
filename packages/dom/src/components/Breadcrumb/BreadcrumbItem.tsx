import * as React from 'react';
import styled from '@emotion/styled';
import { ThemeContext } from '../../theme/ThemeContext';
import { Hyperlink } from '../Hyperlink';
import { useIsInverse } from '../../inverse';
import { ChevronRightIcon } from 'react-magma-icons';
import { useThemeStyling } from '@react-magma/themes';

/**
 * @children required
 */
export interface BreadcrumbItemProps
  extends React.HTMLAttributes<HTMLLIElement> {
  testId?: string;
  /**
   * The href value of the link. If left blank, the breadcrumb item will render as a span with aria-current="page" on it.
   */
  to?: string;
}

const StyledBreadcrumbItem = styled.li`
  ${() =>
    useThemeStyling({
      props: {},
      style: {},
      componentName: 'Breadcrumb.BreadcrumbItem',
    }) as any}
`;

const StyledSpan = styled.span<{ isInverse?: boolean }>`
  ${(props: { isInverse?: boolean }) =>
    useThemeStyling<{ isInverse?: boolean }>({
      props,
      style: {},
      componentName: 'Breadcrumb.StyledSpan',
    }) as any}
`;

export const BreadcrumbItem = React.forwardRef<
  HTMLLIElement,
  BreadcrumbItemProps
>((props, ref) => {
  const { children, to, testId, ...other } = props;
  const theme = React.useContext(ThemeContext);
  const isInverse = useIsInverse();

  return (
    <StyledBreadcrumbItem {...other} data-testid={testId} ref={ref}>
      {to ? (
        <>
          <Hyperlink to={to} isInverse={isInverse}>
            {children}
          </Hyperlink>
          <StyledSpan isInverse={isInverse} theme={theme}>
            <ChevronRightIcon size={theme.iconSizes.small} />
          </StyledSpan>
        </>
      ) : (
        <StyledSpan aria-current="page" isInverse={isInverse} theme={theme}>
          {children}
        </StyledSpan>
      )}
    </StyledBreadcrumbItem>
  );
});
