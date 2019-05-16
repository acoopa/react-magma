import * as React from 'react';
import { RadioGroup } from '.';
import { Radio } from '../Radio';
import { render, fireEvent, wait } from 'react-testing-library';
import { magma } from '../../theme/magma';

const RADIO_GROUP_PROPS = {
  value: 'default',
  labelText: 'Colors',
  id: 'colorsGroup',
  name: 'colors',
  onChange: jest.fn()
};

const renderRadioGroup = (myProps = {}) => {
  const props = {
    ...RADIO_GROUP_PROPS,
    ...myProps
  };

  return render(
    <RadioGroup {...props}>
      <Radio id="colorRadio" labelText="Default Color" value="default" />
      <Radio
        color={magma.colors.success01}
        id="successColorRadio"
        labelText="Success Color"
        value="success"
      />
    </RadioGroup>
  );
};

describe('Radio Group', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  it('should find element by testId', () => {
    const testId = 'test-id';
    const { getByTestId } = renderRadioGroup({ testId });

    expect(getByTestId(testId)).toBeInTheDocument();
  });

  it('should render a label for the radiogroup', () => {
    const { getByText } = renderRadioGroup();
    const label = getByText(RADIO_GROUP_PROPS.labelText);

    expect(label).toBeInTheDocument();
  });

  it('should render children under radiogroup', () => {
    const { container } = renderRadioGroup();
    const radiogroup = container.querySelector('div[role="radiogroup"]');

    expect(radiogroup.firstChild).not.toBeNull();
  });

  it('should render a radio group with hidden label text with the correct styles', () => {
    const { getByText } = renderRadioGroup({ textVisuallyHidden: true });
    const label = getByText(RADIO_GROUP_PROPS.labelText);

    expect(label).toHaveStyleRule('clip', 'rect(1px,1px,1px,1px)');
  });

  it('should render a radio group with the aria-labelledby attribute', () => {
    const { container } = render(
      <RadioGroup name="colors" labelledById="myID">
        <h3 id="myID">Heading</h3>
        <Radio labelText="Default Color" value="default" />
        <Radio
          color={magma.colors.success01}
          labelText="Success Color"
          value="success"
        />
      </RadioGroup>
    );

    const group = container.querySelector('div');

    expect(group).toHaveAttribute('aria-labelledby', 'myID');
  });

  it('should not render anything when invalid children are present', () => {
    const { container } = render(
      <RadioGroup>
        <Radio id="colorRadio" labelText="Default Color" value="default" />
        {null}
      </RadioGroup>
    );

    expect(container.firstChild.children.length).toBe(2);
  });
});

describe('Radio Clone', () => {
  it('Clone children and pass down props', () => {
    const { getByLabelText } = renderRadioGroup();

    expect(getByLabelText('Default Color')).toHaveAttribute('checked');
    expect(getByLabelText('Success Color')).not.toHaveAttribute('checked');
  });

  it('Changes the selected radio when clicked', () => {
    const onChangeSpy = jest.fn();
    const { getByLabelText } = render(
      <RadioGroup
        value="default"
        labelText="Colors"
        id="colorsGroup"
        name="colors"
        onChange={onChangeSpy}
      >
        <Radio id="colorRadio" labelText="Default Color" value="default" />
        <Radio
          color={magma.colors.success01}
          id="successColorRadio"
          labelText="Success Color"
          value="success"
        />
      </RadioGroup>
    );

    fireEvent.click(getByLabelText('Success Color'));

    expect(onChangeSpy).toHaveBeenCalledTimes(1);

    wait(() => {
      expect(getByLabelText('Default Color')).not.toHaveAttribute('checked');
      expect(getByLabelText('Success Color')).toHaveAttribute('checked');
    }, 1000);
  });
});
