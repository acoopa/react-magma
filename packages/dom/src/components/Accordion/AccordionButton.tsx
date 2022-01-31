import * as React from 'react';
import styled from '@emotion/styled';
import { useIsInverse, useThemeStyling } from '@react-magma/themes';

import { AccordionIconPosition } from './useAccordion';
import { Spacer } from '../Spacer';
import { ExpandMoreIcon } from 'react-magma-icons';
import {
  useAccordionButton,
  UseAccordionButtonProps,
} from './useAccordionButton';
import { Transition } from '../Transition';

/**
 * @children required
 */
export interface AccordionButtonProps
  extends UseAccordionButtonProps,
    React.HTMLAttributes<HTMLButtonElement> {
  /**
   * @internal
   */
}

const StyledButton = styled.button<{
  isInverse?: boolean;
  isExpanded?: boolean;
}>`
  ${(props: { isInverse?: boolean; isExpanded?: boolean }) =>
    useThemeStyling<{
      isInverse?: boolean;
      isExpanded?: boolean;
    }>({
      props,
      style: {},
      componentName: 'Accordion.AccordionButton',
    }) as any}
`;

const TextWrapper = styled.span`
  ${() =>
    useThemeStyling({
      props: {},
      style: {},
      componentName: 'Accordion.TextWrapper',
    }) as any}
`;

export const AccordionButton = React.forwardRef<
  HTMLButtonElement,
  AccordionButtonProps
>((props, forwardedRef) => {
  const { children, testId, isInverse: isInverseProp, ...rest } = props;
  const isInverse = useIsInverse(isInverseProp);

  const {
    iconPosition,
    buttonId,
    isDisabled,
    isExpanded,
    panelId,
    handleClick,
    handleKeyDown,
    ref,
  } = useAccordionButton(props, forwardedRef);

  const caret = (
    <Transition
      isOpen={isExpanded}
      rotate180
      style={{ height: 'var(--spacing-06)' }}
    >
      <ExpandMoreIcon />
    </Transition>
  );

  return (
    <StyledButton
      {...rest}
      aria-controls={panelId}
      aria-expanded={Boolean(isExpanded)}
      data-testid={testId}
      disabled={isDisabled}
      id={buttonId}
      isExpanded={isExpanded}
      isInverse={isInverse}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      ref={ref}
    >
      {iconPosition === AccordionIconPosition.left && (
        <>
          {caret}
          <Spacer size={12} />
        </>
      )}
      <TextWrapper>{children}</TextWrapper>
      {iconPosition === AccordionIconPosition.right && (
        <>
          <Spacer size={12} />
          {caret}
        </>
      )}
    </StyledButton>
  );
});
