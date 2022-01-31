import * as React from 'react';
import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';
import { AlertProps } from '../Alert';
import { AlertVariant, VARIANT_ICON } from '../AlertBase';
import { CloseIcon } from 'react-magma-icons';
import { Button, ButtonSize, ButtonVariant, ButtonColor } from '../Button';
import { IconButton } from '../IconButton';
import { ThemeContext } from '../../theme/ThemeContext';
import { I18nContext } from '../../i18n';
import { useThemeStyling } from '@react-magma/themes';

/**
 * @children required
 */
export interface BannerProps extends AlertProps {
  /**
   * The text displayed inside of the action button
   */
  actionButtonText?: string;
  /**
   * Action that fires when the action button is clicked. Must be present for button to appear
   */
  actionButtonOnClick?: () => void;
  /**
   * If true, the component will be able to be dismissed and will include a close button
   * @default false
   */
  isDismissible?: boolean;
}

const StyledBanner = styled.div<AlertProps>`
  ${(props: AlertProps) =>
    useThemeStyling<AlertProps>({
      props,
      style: props.style,
      componentName: 'Banner',
    }) as any}
`;

const BannerContents = styled.div`
  ${() =>
    useThemeStyling({
      props: {},
      style: {},
      componentName: 'Banner.BannerContents',
    }) as any}
`;

const ButtonWrapper = styled.span`
  ${() =>
    useThemeStyling({
      props: {},
      style: {},
      componentName: 'Banner.ButtonWrapper',
    }) as any}
`;

const allowedProps = ['icon', 'isInverse', 'theme', 'variant'];

const shouldForwardProp = prop => {
  return isPropValid(prop) || allowedProps.includes(prop);
};

const DismissButton = styled(IconButton, { shouldForwardProp })<{
  alertVariant?: AlertVariant;
}>`
  ${(props: { alertVariant?: AlertVariant }) =>
    useThemeStyling<{
      alertVariant?: AlertVariant;
    }>({
      props,
      style: {},
      componentName: 'Banner.DismissButton',
    }) as any}
`;

const IconWrapper = styled.span`
  ${() =>
    useThemeStyling({
      props: {},
      style: {},
      componentName: 'Banner.IconWrapper',
    }) as any}
`;

function renderIcon(variant = 'info', theme: any) {
  const Icon = VARIANT_ICON[variant];

  return (
    <IconWrapper theme={theme}>
      <Icon size={theme.iconSizes.medium} />
    </IconWrapper>
  );
}

function getButtonColor(variant: AlertVariant) {
  switch (variant) {
    case 'success':
      return ButtonColor.success;
    case 'warning':
      return ButtonColor.secondary;
    case 'danger':
      return ButtonColor.danger;
    default:
      return ButtonColor.primary;
  }
}

export const Banner = React.forwardRef<HTMLDivElement, BannerProps>(
  (props, ref) => {
    const {
      actionButtonText,
      actionButtonOnClick,
      children,
      closeAriaLabel,
      isDismissible,
      onDismiss,
      testId,
      variant,
      ...other
    } = props;

    const theme = React.useContext(ThemeContext);
    const i18n = React.useContext(I18nContext);

    return (
      <StyledBanner
        {...other}
        data-testid={testId}
        ref={ref}
        theme={theme}
        variant={variant}
      >
        <BannerContents theme={theme}>
          {renderIcon(variant, theme)}
          {children}
          {actionButtonText && actionButtonOnClick && (
            <Button
              color={getButtonColor(variant)}
              isInverse
              onClick={actionButtonOnClick}
              style={{ margin: `0 0 0 ${theme.spaceScale.spacing08}` }}
              size={ButtonSize.small}
            >
              {actionButtonText}
            </Button>
          )}
        </BannerContents>

        {isDismissible && (
          <ButtonWrapper>
            <DismissButton
              alertVariant={variant}
              aria-label={
                closeAriaLabel ? closeAriaLabel : i18n.alert.dismissAriaLabel
              }
              icon={<CloseIcon size={theme.iconSizes.small} />}
              isInverse
              onClick={onDismiss}
              theme={theme}
              variant={ButtonVariant.link}
            />
          </ButtonWrapper>
        )}
      </StyledBanner>
    );
  }
);
