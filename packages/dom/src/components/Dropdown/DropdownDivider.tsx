import * as React from 'react';
import styled from '@emotion/styled';
import { ThemeContext } from '../../theme/ThemeContext';

export interface DropdownDividerProps
  extends React.HTMLAttributes<HTMLHRElement> {
  testId?: string;
}

const StyledHr = styled.hr`
  background: ${props => props.theme.colors.neutral06};
  border: 0;
  height: 1px;
  margin: ${props => props.theme.spaceScale.spacing02} 0;
`;

export const DropdownDivider: React.FunctionComponent<DropdownDividerProps> = (
  props: DropdownDividerProps
) => {
  const { testId, ...other } = props;

  const theme = React.useContext(ThemeContext);
  return <StyledHr {...other} data-testid={testId} theme={theme} />;
};
