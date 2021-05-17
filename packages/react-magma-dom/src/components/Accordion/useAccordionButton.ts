import { isArray } from 'lodash';
import * as React from 'react';

import { AccordionContext } from './useAccordion';
import { AccordionItemContext } from './useAccordionItem';
import { useForceUpdate, useForkedRef } from '../../utils';

export interface UseAccordionButtonProps {
  testId?: string;
  isInverse?: boolean;
}

export function useAccordionButton(
  props: UseAccordionButtonProps,
  forwardedRef
) {
  const {
    buttonRefArray,
    expandedIndex,
    iconPosition,
    isMultiple,
    registerAccordionButton,
    setExpandedIndex,
  } = React.useContext(AccordionContext);

  const { buttonId, index, isDisabled, isExpanded, panelId } = React.useContext(
    AccordionItemContext
  );

  const handleClick = () => {
    if (isMultiple && isArray(expandedIndex)) {
      if (isExpanded) {
        setExpandedIndex(expandedIndex.filter(item => item !== index));
      } else {
        setExpandedIndex(expandedIndex.concat([index]));
      }
    } else if (isExpanded) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  const focusFirst = () => {
    (buttonRefArray.current[0].current as HTMLButtonElement).focus();
  };

  const focusNext = () => {
    (buttonRefArray.current[index + 1].current as HTMLButtonElement).focus();
  };

  const focusPrev = () => {
    (buttonRefArray.current[index - 1].current as HTMLButtonElement).focus();
  };

  const focusLast = () => {
    const arrLength = buttonRefArray.current.length;
    (buttonRefArray.current[arrLength - 1]
      .current as HTMLButtonElement).focus();
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    const arrLength = buttonRefArray.current.length;

    switch (event.key) {
      case 'ArrowDown': {
        if (index === arrLength - 1) {
          focusFirst();
        } else {
          focusNext();
        }
        break;
      }
      case 'ArrowUp': {
        if (index === 0) {
          focusLast();
        } else {
          focusPrev();
        }
        break;
      }
      case 'Home': {
        focusFirst();
        break;
      }
      case 'End': {
        focusLast();
        break;
      }
      default:
        return;
    }
  };

  const ownRef = React.useRef<HTMLDivElement>();
  const forceUpdate = useForceUpdate();

  const ref = useForkedRef(forwardedRef, ownRef);

  React.useEffect(() => {
    if (!isDisabled) {
      registerAccordionButton(buttonRefArray, ownRef);
    }

    forceUpdate();
  }, []);

  return {
    buttonId,
    handleClick,
    handleKeyDown,
    iconPosition,
    index,
    isDisabled,
    isExpanded,
    panelId,
    ref,
  };
}

export type UseAccordionButtonReturn = ReturnType<typeof useAccordionButton>;
