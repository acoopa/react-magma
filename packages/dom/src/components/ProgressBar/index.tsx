import * as React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ThemeContext } from '../../theme/ThemeContext';
import { convertStyleValueToString, useGenerateId } from '../../utils';
import { useIsInverse } from '../../inverse';
import { VisuallyHidden } from '../VisuallyHidden';

export interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The color variant of the progress bar
   * @default ProgressBarColor.primary
   */
  color?: ProgressBarColor;
  /**
   * The height of the progress bar. Can be a string or number; if number is provided height is in px
   * @default 8
   */
  height?: number | string;
  /**
   * If true, the progress bar with have a shimmer animation
   * @default false
   */
  isAnimated?: boolean;
  isInverse?: boolean;
  /**
   * @internal
   */
  isLoadingIndicator?: boolean;
  /**
   * If true, the label with the percentage value will display to the right of the progress bar
   * @default false
   */
  isLabelVisible?: boolean;
  /**
   * The percentage of which the bar is filled
   * @default 0
   */
  percentage?: number;
  testId?: string;
}

export enum ProgressBarColor {
  danger = 'danger',
  primary = 'primary', // default
  pop = 'pop',
  pop02 = 'pop02',
  success = 'success',
}

function buildProgressBarBackground(props) {
  if (props.isInverse) {
    switch (props.color) {
      case 'danger':
        return props.theme.colors.dangerInverse;
      case 'success':
        return props.theme.colors.successInverse;
      default:
        return props.theme.colors.primaryInverse;
    }
  }
  switch (props.color) {
    case 'danger':
      return props.theme.colors.danger;
    case 'pop':
      return props.theme.colors.pop;
    case 'pop02':
      return props.theme.colors.pop02;
    case 'success':
      return props.theme.colors.success;
    default:
      return props.theme.colors.primary;
  }
}

const Container = styled.div<{ isLoadingIndicator?: boolean }>`
  align-items: center;
  display: ${props => (props.isLoadingIndicator ? 'block' : 'flex')};
`;

const Track = styled.div<ProgressBarProps>`
  background: ${props =>
    props.isInverse ? 'rgba(0,0,0,0.25)' : props.theme.colors.neutral08};
  box-shadow: inset 0 0 0 1px
    ${props =>
      props.isInverse
        ? `${props.theme.colors.neutral08}80`
        : props.theme.colors.neutral04};
  border-radius: 50em;
  overflow: hidden;
  display: flex;
  height: ${props => props.height};
  /* padding: 1px; */
  width: 100%;
`;

const Bar = styled.div<ProgressBarProps>`
  background: ${props => buildProgressBarBackground(props)};
  border-radius: 50em;
  display: flex;
  transition: width 0.3s;
  width: ${props => props.percentage}%;

  ${props =>
    props.isAnimated &&
    css`
      background-image: linear-gradient(
        to right,
        ${buildProgressBarBackground(props)} 0%,
        rgba(255, 255, 255, 0.5) 20%,
        ${buildProgressBarBackground(props)} 40%,
        ${buildProgressBarBackground(props)} 100%
      );
      background-repeat: no-repeat;
      background-size: 1800px 104px;
      display: inline-block;
      position: relative;

      animation-duration: 1s;
      animation-fill-mode: forwards;
      animation-iteration-count: infinite;
      animation-name: placeholderShimmer;
      animation-timing-function: linear;

      @keyframes placeholderShimmer {
        0% {
          background-position: -600px 0;
        }

        100% {
          background-position: 600px 0;
        }
      }
    `}
`;

const Percentage = styled.span`
  font-size: ${props => props.theme.typeScale.size02.fontSize};
  line-height: ${props => props.theme.typeScale.size02.lineHeight};
  margin-left: ${props => props.theme.spaceScale.spacing03};
`;

const TopPercentage = styled.div`
  font-size: ${props => props.theme.typeScale.size05.fontSize};
  line-height: ${props => props.theme.typeScale.size05.lineHeight};
  margin-bottom: ${props => props.theme.spaceScale.spacing03};
  text-align: center;
`;

export const ProgressBar = React.forwardRef<HTMLDivElement, ProgressBarProps>(
  (props, ref) => {
    const {
      color,
      height,
      id: defaultId,
      isAnimated,
      isLabelVisible,
      isLoadingIndicator,
      percentage,
      testId,
      ...other
    } = props;

    const id = useGenerateId(defaultId);
    const labelId = `${id}__label`;

    const percentageValue = percentage ? percentage : 0;

    const theme = React.useContext(ThemeContext);

    const heightString = convertStyleValueToString(
      height,
      theme.spaceScale.spacing03
    );

    const isInverse = useIsInverse(props.isInverse);

    return (
      <Container
        {...other}
        id={defaultId}
        isLoadingIndicator={isLoadingIndicator}
      >
        {isLoadingIndicator && (
          <TopPercentage theme={theme}>{percentageValue}%</TopPercentage>
        )}
        <Track
          data-testid={testId}
          height={heightString}
          isInverse={isInverse}
          ref={ref}
          theme={theme}
        >
          <Bar
            aria-labelledby={labelId}
            aria-valuenow={percentageValue}
            aria-valuemin={0}
            aria-valuemax={100}
            color={color}
            isAnimated={isAnimated}
            isInverse={isInverse}
            percentage={percentageValue}
            role="progressbar"
            theme={theme}
          />
        </Track>
        {isLabelVisible ? (
          <Percentage id={labelId} theme={theme}>
            {percentageValue}%
          </Percentage>
        ) : (
          <VisuallyHidden id={labelId}>{percentageValue}%</VisuallyHidden>
        )}
      </Container>
    );
  }
);
