import * as React from 'react';
import styled from '@emotion/styled';
import { ThemeContext } from '../../theme/ThemeContext';
import { useIsInverse } from '../../inverse';
import { useThemeStyling } from '@react-magma/themes';

/**
 * @children required
 */
export interface CardProps extends React.LabelHTMLAttributes<HTMLDivElement> {
  /**
   * Sets the alignment of the card content
   * @default CardAlignment.left
   */
  align?: CardAlignment;
  /**
   * If a value is passed, the card will be styled as a callout for the specified type.
   * @default none
   */
  calloutType?: CardCalloutType;
  /**
   * If true, card will render with a box-shadow
   * @default false
   */
  hasDropShadow?: boolean;
  isInverse?: boolean;
  testId?: string;
}

export enum CardAlignment {
  center = 'center',
  left = 'left',
  right = 'right',
}

export enum CardCalloutType {
  danger = 'danger',
  primary = 'primary',
  success = 'success',
  warning = 'warning',
}

const StyledCard = styled.div<CardProps>`
  ${(props: CardProps) =>
    useThemeStyling<CardProps>({
      props,
      style: props.style,
      componentName: 'Card',
    }) as any}
`;

interface NavTabsContextInterface {
  isInverse?: boolean;
}

export const CardContext = React.createContext<NavTabsContextInterface>({
  isInverse: false,
});

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (props, ref) => {
    const { align, children, testId, ...other } = props;

    const isInverse = useIsInverse(props.isInverse);

    const theme = React.useContext(ThemeContext);

    return (
      <StyledCard
        {...other}
        align={align ? align : CardAlignment.left}
        data-testid={testId}
        isInverse={isInverse}
        ref={ref}
        theme={theme}
      >
        <CardContext.Provider
          value={{
            isInverse,
          }}
        >
          {children}
        </CardContext.Provider>
      </StyledCard>
    );
  }
);
