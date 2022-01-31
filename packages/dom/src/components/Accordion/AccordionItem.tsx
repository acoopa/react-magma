import * as React from 'react';
import {
  AccordionItemContext,
  UseAccordionItemProps,
  useAccordionItem,
} from './useAccordionItem';
import styled from '@emotion/styled';
import { useThemeStyling } from '@react-magma/themes';

/**
 * @children required
 */
export interface AccordionItemProps
  extends UseAccordionItemProps,
    React.HTMLAttributes<HTMLDivElement> {}

const StyledItem = styled.div`
  ${() =>
    useThemeStyling({
      props: {},
      style: {},
      componentName: 'Accordion.AccordionItem',
    }) as any}
`;

export const AccordionItem = React.forwardRef<
  HTMLDivElement,
  AccordionItemProps
>((props, ref) => {
  const { children, testId, ...rest } = props;

  const { contextValue } = useAccordionItem(props);

  return (
    <AccordionItemContext.Provider value={contextValue}>
      <StyledItem ref={ref} data-testid={testId} {...rest}>
        {children}
      </StyledItem>
    </AccordionItemContext.Provider>
  );
});
