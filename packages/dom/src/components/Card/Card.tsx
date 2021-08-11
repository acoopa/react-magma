import * as React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ThemeContext } from '../../theme/ThemeContext';
import { ThemeInterface } from '../../theme/magma';
import { useIsInverse } from '../../inverse';

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
   * Color for the background and border-color, set by CSS.
   */
  background?: string;
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
  /**
   * Width of the component, set by CSS.
   */
  width?: string | number;
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

export function buildCalloutBackground(
  props: CardProps & { theme: ThemeInterface }
) {
  if (props.isInverse) {
    switch (props.calloutType) {
      case 'danger':
        return props.theme.colors.dangerInverse;
      case 'success':
        return props.theme.colors.successInverse;
      case 'warning':
        return props.theme.colors.pop04;
      default:
        return props.theme.colors.foundation04;
    }
  }

  switch (props.calloutType) {
    case 'danger':
      return props.theme.colors.danger;
    case 'success':
      return props.theme.colors.success;
    case 'warning':
      return props.theme.colors.pop04;
    default:
      return props.theme.colors.primary;
  }
}

const StyledCard = styled.div<CardProps>`
  background: ${props =>
    props.background
      ? props.background
      : props.isInverse
      ? props.theme.colors.foundation
      : props.theme.colors.neutral08};
  border: 1px solid
    ${props =>
      props.background ? props.background : props.theme.colors.neutral06};
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props =>
    props.hasDropShadow ? '0 2px 6px 0 rgba(0,0,0,0.18)' : '0 0 0'};
  color: ${props =>
    props.isInverse
      ? props.theme.colors.neutral08
      : props.theme.colors.neutral};
  display: flex;
  flex-direction: column;
  overflow: visible;
  padding-left: ${props =>
    props.calloutType ? props.theme.spaceScale.spacing02 : '0'};
  position: relative;
  text-align: ${props => props.align};
  width: ${props => props.width};

  ${props =>
    props.calloutType &&
    css`
      &:before {
        background: ${buildCalloutBackground(props)};
        border-radius: ${props.theme.borderRadius} 0 0
          ${props.theme.borderRadius};
        content: '';
        display: block;
        height: 100%;
        position: absolute;
        left: 0;
        width: ${props.theme.spaceScale.spacing02};
      }
    `}
`;

interface NavTabsContextInterface {
  isInverse?: boolean;
}

export const CardContext = React.createContext<NavTabsContextInterface>({
  isInverse: false,
});

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (props, ref) => {
    const { align, children, testId, width, ...other } = props;

    const isInverse = useIsInverse(props.isInverse);

    const theme = React.useContext(ThemeContext);

    const widthString = width
      ? typeof width === 'number'
        ? `${width}px`
        : width
      : 'auto';

    return (
      <StyledCard
        {...other}
        align={align ? align : CardAlignment.left}
        data-testid={testId}
        isInverse={isInverse}
        ref={ref}
        theme={theme}
        width={widthString}
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
