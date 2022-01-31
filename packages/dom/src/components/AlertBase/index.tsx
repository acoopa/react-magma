import * as React from 'react';
import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';
import {
  InverseContext,
  useIsInverse,
  useThemeStyling,
} from '@react-magma/themes';

import {
  InfoIcon,
  CheckCircleIcon,
  WarningIcon,
  ErrorIcon,
  IconProps,
  CloseIcon,
} from 'react-magma-icons';

import { ButtonVariant } from '../Button';
import { IconButton } from '../IconButton';
import { ProgressRing } from '../ProgressRing';
import { useGenerateId } from '../../utils';
import { I18nContext } from '../../i18n';

export const VARIANT_ICON: {
  [name: string]: React.FunctionComponent<IconProps>;
} = {
  info: InfoIcon,
  success: CheckCircleIcon,
  warning: WarningIcon,
  danger: ErrorIcon,
};

export enum AlertVariant {
  info = 'info', //default
  success = 'success',
  warning = 'warning',
  danger = 'danger',
}
export interface AlertBaseProps extends React.HTMLAttributes<HTMLDivElement> {
  closeAriaLabel?: string;
  forceDismiss?: () => void;
  hasTimerRing?: boolean;
  isExiting?: boolean;
  isDismissed?: boolean;
  isDismissible?: boolean;
  isInverse?: boolean;
  isPaused?: boolean;
  isToast?: boolean;
  onDismiss?: () => void;
  testId?: string;
  toastDuration?: number;
  variant?: AlertVariant;
}

export function buildAlertBackground(props) {
  switch (props.variant) {
    case 'success':
      return 'var(--colors-success)';
    case 'warning':
      return 'var(--colors-pop04)';
    case 'danger':
      return 'var(--colors-danger)';
    default:
      return 'var(--colors-neutral)';
  }
}

export const transitionDuration = 500;

const whitelistProps = ['icon', 'isInverse', 'variant'];

const shouldForwardProp = prop => {
  return isPropValid(prop) || whitelistProps.includes(prop);
};

const StyledAlert = styled.div<AlertBaseProps>`
  ${(props: AlertBaseProps) =>
    useThemeStyling<AlertBaseProps>({
      props,
      style: props.style,
      componentName: 'Alert',
    }) as any}
`;

const StyledAlertInner = styled.div<AlertBaseProps>`
  ${(props: AlertBaseProps) =>
    useThemeStyling<AlertBaseProps>({
      props,
      style: props.style,
      componentName: 'Alert.AlertInner',
    }) as any}
`;

const AlertContents = styled.div`
  ${(props: AlertBaseProps) =>
    useThemeStyling<AlertBaseProps>({
      props,
      style: props.style,
      componentName: 'Alert.AlertContents',
    }) as any}
`;

const IconWrapper = styled.span<{ isToast?: boolean }>`
  ${() =>
    useThemeStyling({
      props: {},
      style: {},
      componentName: 'Alert.IconWrapperStyles',
    }) as any}
  ${(props: { isToast?: boolean }) =>
    useThemeStyling<{ isToast?: boolean }>({
      props,
      style: {},
      componentName: 'Alert.IconWrapper',
    }) as any}
`;

const ProgressRingWrapper = styled.div`
  ${() =>
    useThemeStyling({
      props: {},
      style: {},
      componentName: 'Alert.ProgressRingWrapper',
    }) as any}
`;

const DismissibleIconWrapper = styled.span<AlertBaseProps>`
  ${() =>
    useThemeStyling({
      props: {},
      style: {},
      componentName: 'Alert.IconWrapperStyles',
    }) as any}
`;

const DismissButton = styled(IconButton, { shouldForwardProp })<{
  alertVariant?: AlertVariant;
}>`
  ${(props: { alertVariant?: AlertVariant }) =>
    useThemeStyling<{ alertVariant?: AlertVariant }>({
      props,
      style: {},
      componentName: 'Alert.DismissButton',
    }) as any}
`;

function renderIcon(variant = 'info', isToast?: boolean) {
  const Icon = VARIANT_ICON[variant];

  return (
    <IconWrapper isToast={isToast}>
      <Icon size={24} />
    </IconWrapper>
  );
}

export const AlertBase = React.forwardRef<HTMLDivElement, AlertBaseProps>(
  (props, ref) => {
    const {
      children,
      closeAriaLabel,
      forceDismiss,
      hasTimerRing,
      id: defaultId,
      isDismissed,
      isDismissible,
      isExiting: externalIsExiting,
      isPaused,
      isToast,
      onDismiss,
      testId,
      toastDuration,
      variant,
      ...other
    } = props;

    const id = useGenerateId(defaultId);
    const [isExiting, setIsExiting] = React.useState(false);

    const isInverse = useIsInverse(props.isInverse);

    React.useEffect(() => {
      if (isExiting) {
        setTimeout(() => {
          setIsExiting(false);
          onDismiss && typeof onDismiss === 'function' && onDismiss();
        }, transitionDuration - 300);
      }
    }, [isExiting]);

    React.useEffect(() => {
      if (isDismissed) {
        handleDismiss();
      }
    }, [isDismissed]);

    function handleDismiss() {
      setIsExiting(true);
    }

    const i18n = React.useContext(I18nContext);

    return (
      <StyledAlert
        {...other}
        data-testid={testId}
        id={id}
        tabIndex={-1}
        isInverse={isInverse}
        isExiting={isExiting}
        isToast={isToast}
        ref={ref}
      >
        <InverseContext.Provider
          value={{
            isInverse: variant !== AlertVariant.warning,
          }}
        >
          <StyledAlertInner
            isInverse={variant !== AlertVariant.warning}
            isToast={isToast}
            variant={variant}
          >
            {renderIcon(variant, isToast)}
            <AlertContents>{children}</AlertContents>
            {isDismissible && (
              <DismissibleIconWrapper variant={variant}>
                {hasTimerRing && isToast && (
                  <ProgressRingWrapper>
                    <ProgressRing
                      color={
                        variant === AlertVariant.warning
                          ? 'var(--colors-neutral)'
                          : 'var(--colors-neutral08)'
                      }
                      isActive={!isPaused}
                    />
                  </ProgressRingWrapper>
                )}
                <DismissButton
                  alertVariant={variant}
                  aria-label={
                    closeAriaLabel
                      ? closeAriaLabel
                      : i18n.alert.dismissAriaLabel
                  }
                  icon={<CloseIcon size={hasTimerRing ? 16 : 20} />}
                  isInverse
                  onClick={forceDismiss || handleDismiss}
                  variant={ButtonVariant.link}
                />
              </DismissibleIconWrapper>
            )}
          </StyledAlertInner>
        </InverseContext.Provider>
      </StyledAlert>
    );
  }
);
