import React from 'react';
import useFormApi from '@data-driven-forms/react-form-renderer/dist/cjs/use-form-api';
import {
  FormGroup as MagmaFormGroup,
  FormGroupProps as MagmaFormGroupProps,
} from 'react-magma-dom';

export interface FormGroupProps extends MagmaFormGroupProps {
  fields: any;
  showError?: boolean;
}

const FormGroupMapping: React.FunctionComponent<FormGroupProps> = props => {
  const { renderForm } = useFormApi();

  const subfields = React.useMemo(() => {
    return props.fields.map((field: any) => ({
      ...field,
      showError: props.showError,
    }));
  }, [props.fields, props.showError]);

  return <MagmaFormGroup {...props}>{renderForm(subfields)}</MagmaFormGroup>;
};

export const FormGroup = React.memo(FormGroupMapping);
