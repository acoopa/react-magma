import * as React from 'react';
import styled from '@emotion/styled';
import { ThemeContext } from '../../theme/ThemeContext';
import { useThemeStyling } from '@react-magma/themes';

/**
 * @children required
 */
export interface BadgeProps extends React.HTMLAttributes<HTMLButtonElement> {
  /**
   * The color variant of the badge
   * @default BadgeColor.primary
   */
  color?: BadgeColor;
  /**
   * Action that fires when the badge is clicked. Causes the Badge to render as a button instead of a span.
   */
  onClick?: () => void;
  testId?: string;
  /**
   * Indicates the style variant of the component
   * @default BadgeVariant.label
   */
  variant?: BadgeVariant;
}

export enum BadgeColor {
  danger = 'danger',
  primary = 'primary',
  secondary = 'secondary', // default
  success = 'success',
  light = 'light',
}

export enum BadgeVariant {
  counter = 'counter',
  label = 'label', // default
}

const BadgeSpan = styled.span<BadgeProps>`
  ${(props: BadgeProps) =>
    useThemeStyling<BadgeProps>({
      props,
      style: props.style,
      componentName: 'Badge',
    }) as any}
`;

const BadgeButton = styled.button<BadgeProps>`
  ${(props: BadgeProps) =>
    useThemeStyling<BadgeProps>({
      props,
      style: props.style,
      componentName: 'Badge',
    }) as any}
  ${(props: BadgeProps) =>
    useThemeStyling<BadgeProps>({
      props,
      style: props.style,
      componentName: 'Badge.BadgeButton',
    }) as any}
`;

function getStyledBadgeComponent(isClickable: boolean) {
  return isClickable ? BadgeButton : BadgeSpan;
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (props, ref) => {
    const { children, onClick, testId, variant, ...other } = props;

    const BadgeComponent = getStyledBadgeComponent(Boolean(onClick));

    const theme = React.useContext(ThemeContext);

    return (
      <BadgeComponent
        {...other}
        data-testid={testId}
        variant={variant ? variant : BadgeVariant.label}
        onClick={onClick}
        ref={ref}
        theme={theme}
      >
        {children}
      </BadgeComponent>
    );
  }
);
