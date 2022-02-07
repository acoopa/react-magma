import * as React from 'react';
import styled from '@emotion/styled';
import { CardProps } from '../Card';
import { ThemeContext } from '../../theme/ThemeContext';
import { useThemeStyling } from '@react-magma/themes';

/**
 * @children required
 */
export interface CardBodyProps
  extends React.LabelHTMLAttributes<HTMLDivElement> {
  testId?: string;
}

const StyledCardBody = styled.div<CardProps>`
  ${(props: CardProps) =>
    useThemeStyling<CardProps>({
      props,
      style: props.style,
      componentName: 'Card.CardBody',
    }) as any}
`;

export const CardBody = React.forwardRef<HTMLDivElement, CardBodyProps>(
  (props, ref) => {
    const { children, testId, ...other } = props;
    const theme = React.useContext(ThemeContext);

    return (
      <StyledCardBody {...other} data-testid={testId} ref={ref} theme={theme}>
        {children}
      </StyledCardBody>
    );
  }
);
