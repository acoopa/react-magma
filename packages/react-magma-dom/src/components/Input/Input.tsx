import * as React from 'react';
import { InputCore } from 'react-magma-core';
import styled from '../../theme/styled-components';
import { HiddenStyles } from '../SelectionControls/InputStyles';
import { Icon } from '../Icon/Icon';
import { magma } from '../../theme/magma';

enum IconPosition {
  left = 'left',
  right = 'right'
}

enum InputSize {
  large = 'large',
  medium = 'medium', //default
  small = 'small'
}

enum Type {
  text = 'text',
  password = 'password',
  number = 'number'
}

export interface InputProps {
  autoFocus?: boolean;
  disabled?: boolean;
  errorMessage?: string;
  handleBlur?: () => void;
  handleChange?: (value: string) => void;
  handleFocus?: () => void;
  helperMessage?: string;
  icon?: string;
  iconPosition?: IconPosition;
  id: string;
  inputSize?: InputSize;
  inputStyle?: React.CSSProperties;
  inverse?: boolean;
  labelStyle?: React.CSSProperties;
  labelText: string;
  labelVisuallyHidden?: boolean;
  placeholder?: string;
  required?: boolean;
  style?: React.CSSProperties;
  type?: Type;
  value?: string;
}

interface IconWrapperProps {
  iconPosition?: IconPosition;
}

interface TextProps {
  inverse?: boolean;
}

const Container = styled.div`
  margin-bottom: 10px;
`;

const InputWrapper = styled.div`
  position: relative;
`;

const StyledLabel = styled<TextProps, 'label'>('label')`
  color: ${props =>
    props.inverse ? magma.colors.neutral08 : magma.colors.neutral02};
  display: inline-block;
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 5px;
  max-width: 100%;
`;

const HiddenLabel = styled.label`
  ${HiddenStyles};
`;

const StyledInput = styled<InputProps, 'input'>('input')`
  background: ${magma.colors.neutral08};
  border: 1px solid;
  border-color: ${props =>
    props.errorMessage ? magma.colors.danger : magma.colors.neutral05};
  border-radius: 5px;
  box-shadow: ${props => (props.errorMessage ? '0 0 0 1px #E70000' : '0 0 0')};
  color: ${magma.colors.neutral02};
  display: block;
  font-size: ${props => {
    switch (props.inputSize) {
      case 'large':
        return '1.125rem';
      case 'small':
        return '.875rem';
      default:
        return '1rem';
    }
  }};
  height: ${props => {
    switch (props.inputSize) {
      case 'large':
        return '45px';
      case 'small':
        return '29px';
      default:
        return '37px';
    }
  }};
  line-height: 1.25rem;
  padding: 0;
  padding-left: ${props => (props.iconPosition === 'left' ? '35px' : '8px')};
  padding-right: ${props =>
    props.iconPosition === 'right' || props.errorMessage ? '35px' : '8px'};
  width: 100%;

  &::placeholder {
    color: ${magma.colors.neutral04};
    opacity: 1;
  }

  &:focus {
    border-color: ${magma.colors.pop03};
    box-shadow: 0 0 0 1px ${magma.colors.pop03};
    outline: 0;
  }

  &[disabled] {
    background: ${magma.colors.neutral07};
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled<TextProps, 'div'>('div')`
  background: ${props => (props.inverse ? magma.colors.danger : 'none')};
  border-radius: 5px;
  color: ${props =>
    props.inverse ? magma.colors.neutral08 : magma.colors.danger};
  font-size: 13px;
  margin-top: 5px;
  padding: ${props => (props.inverse ? '5px 10px' : '0')};
`;

const HelperMessage = styled<TextProps, 'div'>('div')`
  color: ${props =>
    props.inverse ? magma.colors.neutral08 : magma.colors.neutral04};
  font-size: 13px;
  margin-top: 5px;
`;

const IconWrapper = styled<IconWrapperProps, 'span'>('span')`
  left: ${props => (props.iconPosition === 'left' ? '10px' : 'auto')};
  right: ${props => (props.iconPosition === 'right' ? '10px' : 'auto')};
  color: ${magma.colors.neutral02};
  position: absolute;
  margin-top: -8px;
  top: 50%;
`;

const ErrorIconWrapper = styled.span`
  align-items: center;
  background: ${magma.colors.danger};
  border-radius: 100%;
  color: ${magma.colors.neutral08};
  display: flex;
  height: 18px;
  justify-content: center;
  margin-top: -9px;
  padding: 3px;
  right: 10px;
  position: absolute;
  top: 50%;
  width: 18px;
`;

export const Input: React.FunctionComponent<InputProps> = (
  props: InputProps
) => (
  <InputCore
    value={props.value}
    handleBlur={props.handleBlur}
    handleChange={props.handleChange}
    handleFocus={props.handleFocus}
  >
    {({ handleBlur, handleChange, handleFocus, value }) => {
      const {
        autoFocus,
        disabled,
        errorMessage,
        helperMessage,
        icon,
        iconPosition,
        id,
        inputSize,
        inputStyle,
        inverse,
        labelStyle,
        labelText,
        labelVisuallyHidden,
        placeholder,
        style,
        type,
        required
      } = props;

      return (
        <Container style={style}>
          {labelVisuallyHidden ? (
            <HiddenLabel htmlFor={id}>{labelText}</HiddenLabel>
          ) : (
            <StyledLabel inverse={inverse} htmlFor={id} style={labelStyle}>
              {labelText}
            </StyledLabel>
          )}
          <InputWrapper>
            <StyledInput
              autoFocus={autoFocus}
              id={id}
              disabled={disabled}
              errorMessage={errorMessage}
              iconPosition={iconPosition}
              inputSize={inputSize ? inputSize : InputSize.medium}
              labelText={labelText}
              placeholder={placeholder}
              required={required}
              style={inputStyle}
              type={type ? type : Type.text}
              value={value}
              onBlur={handleBlur}
              onChange={handleChange}
              onFocus={handleFocus}
            />
            {errorMessage && (
              <ErrorIconWrapper>
                <Icon size={10} type="alert" />
              </ErrorIconWrapper>
            )}
            {icon && (
              <IconWrapper iconPosition={iconPosition}>
                <Icon size={17} type={icon} />
              </IconWrapper>
            )}
          </InputWrapper>
          {errorMessage && (
            <ErrorMessage inverse={inverse}>{errorMessage}</ErrorMessage>
          )}
          {helperMessage && !errorMessage && (
            <HelperMessage inverse={inverse}>{helperMessage}</HelperMessage>
          )}
        </Container>
      );
    }}
  </InputCore>
);
