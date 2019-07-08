/// <reference types="jest-dom/extend-expect"/>
import React from 'react';
import { axe } from 'jest-axe';
import {
  Button,
  IButtonColor,
  IButtonShape,
  IButtonSize,
  IButtonTextTransform,
  IButtonVariant,
  IButtonIconPosition
} from '.';
import { render } from 'react-testing-library';
import { CheckIcon } from '../Icon/types/CheckIcon';

describe('Button', () => {
  it('should correctly apply the testId', () => {
    const testId = 'test-id';
    const { getByTestId } = render(<Button testId="test-id">click</Button>);

    expect(getByTestId(testId)).toBeInTheDocument();
  });

  it('should render a button with the passed in text', () => {
    const buttonText = 'Click me';
    const { getByText } = render(
      <Button testId="test-id">{buttonText}</Button>
    );

    expect(getByText(buttonText)).toBeInTheDocument();
  });

  it('A text-only button does not violate detectible accessibility standards', () => {
    const { container } = render(<Button>click</Button>);
    return axe(container.innerHTML).then(result => {
      return expect(result).toHaveNoViolations();
    });
  });

  it('An icon-only button does not violate detectible accessibility standards', () => {
    const icon = <CheckIcon />;
    const { container } = render(<Button icon={icon} ariaLabel="Click me" />);
    return axe(container.innerHTML).then(result => {
      return expect(result).toHaveNoViolations();
    });
  });

  describe('Base Button', () => {
    describe('Snapshot', () => {
      it('should render with updated color', () => {
        const { container } = render(
          <Button
            id="testId"
            onClick={jest.fn()}
            color={IButtonColor.secondary}
          >
            Test Text
          </Button>
        );

        expect(container).toMatchSnapshot();
      });

      it('should render with updated shape', () => {
        const { container } = render(
          <Button id="testId" onClick={jest.fn()} shape={IButtonShape.round}>
            Test Text
          </Button>
        );

        expect(container).toMatchSnapshot();
      });

      it('should render with small size', () => {
        const { container } = render(
          <Button id="testId" onClick={jest.fn()} size={IButtonSize.small}>
            Test Text
          </Button>
        );

        expect(container).toMatchSnapshot();
      });

      it('should render with large size', () => {
        const { container } = render(
          <Button id="testId" onClick={jest.fn()} size={IButtonSize.large}>
            Test Text
          </Button>
        );

        expect(container).toMatchSnapshot();
      });

      it('should render with updated textTransform', () => {
        const { container } = render(
          <Button
            id="testId"
            onClick={jest.fn()}
            textTransform={IButtonTextTransform.none}
          >
            Test Text
          </Button>
        );

        expect(container).toMatchSnapshot();
      });

      it('should render with updated variant', () => {
        const { container } = render(
          <Button
            id="testId"
            onClick={jest.fn()}
            variant={IButtonVariant.outline}
          >
            Test Text
          </Button>
        );

        expect(container).toMatchSnapshot();
      });
    });
  });

  describe('Icon Only Button', () => {
    it('should render an icon only button with passed in icon', () => {
      const icon = <CheckIcon />;
      const buttonLabel = 'check icon';
      const { getByLabelText } = render(
        <Button icon={icon} ariaLabel={buttonLabel} />
      );

      expect(getByLabelText(buttonLabel)).toBeInTheDocument();
    });

    describe('Size', () => {
      it('Large', () => {
        const icon = <CheckIcon id="testId" />;
        const { container } = render(
          <Button
            ariaLabel="Check Icon"
            id="testId"
            icon={icon}
            iconPosition={IButtonIconPosition.right}
            size={IButtonSize.large}
          />
        );
        expect(container.querySelector('svg')).toHaveAttribute('height', '24');
        expect(container.querySelector('svg')).toHaveAttribute('width', '24');
      });

      it('Medium', () => {
        const icon = <CheckIcon id="testId" />;
        const { container } = render(
          <Button
            ariaLabel="Check Icon"
            id="testId"
            icon={icon}
            iconPosition={IButtonIconPosition.right}
            size={IButtonSize.medium}
          />
        );
        expect(container.querySelector('svg')).toHaveAttribute('height', '18');
        expect(container.querySelector('svg')).toHaveAttribute('width', '18');
      });

      it('Small', () => {
        const icon = <CheckIcon id="testId" />;
        const { container } = render(
          <Button
            ariaLabel="Check Icon"
            id="testId"
            icon={icon}
            iconPosition={IButtonIconPosition.right}
            size={IButtonSize.small}
          />
        );
        expect(container.querySelector('svg')).toHaveAttribute('height', '14');
        expect(container.querySelector('svg')).toHaveAttribute('width', '14');
      });
    });

    describe('Snapshot', () => {
      it('should render with updated color', () => {
        const icon = <CheckIcon id="testId" />;
        const { container } = render(
          <Button
            ariaLabel="Check Icon"
            id="testId"
            icon={icon}
            iconPosition={IButtonIconPosition.right}
            color={IButtonColor.secondary}
          />
        );

        expect(container).toMatchSnapshot();
      });

      it('should render with updated shape', () => {
        const icon = <CheckIcon id="testId" />;
        const { container } = render(
          <Button
            ariaLabel="Check Icon"
            id="testId"
            icon={icon}
            iconPosition={IButtonIconPosition.right}
            shape={IButtonShape.fill}
          />
        );

        expect(container).toMatchSnapshot();
      });

      it('should render with small size', () => {
        const icon = <CheckIcon id="testId" />;
        const { container } = render(
          <Button
            ariaLabel="Check Icon"
            id="testId"
            icon={icon}
            iconPosition={IButtonIconPosition.right}
            size={IButtonSize.small}
          />
        );

        expect(container).toMatchSnapshot();
      });

      it('should render with large size', () => {
        const icon = <CheckIcon id="testId" />;
        const { container } = render(
          <Button
            ariaLabel="Check Icon"
            id="testId"
            icon={icon}
            iconPosition={IButtonIconPosition.right}
            size={IButtonSize.large}
          />
        );

        expect(container).toMatchSnapshot();
      });

      it('should render with updated variant', () => {
        const icon = <CheckIcon id="testId" />;
        const { container } = render(
          <Button
            ariaLabel="Check Icon"
            id="testId"
            icon={icon}
            iconPosition={IButtonIconPosition.right}
            variant={IButtonVariant.outline}
          />
        );

        expect(container).toMatchSnapshot();
      });
    });
  });

  describe('Icon With Text Button', () => {
    it('should find element by testId', () => {
      const testId = 'test-id';
      const icon = <CheckIcon />;
      const { getByTestId } = render(
        <Button icon={icon} testId={testId}>
          click
        </Button>
      );

      expect(getByTestId(testId)).toBeInTheDocument();
    });

    it('should render an icon with text button with passed in icon and text', () => {
      const buttonText = 'Click me';
      const iconTestId = 'check-icon';
      const icon = <CheckIcon testId={iconTestId} />;
      const { getByTestId, getByText } = render(
        <Button icon={icon}>{buttonText}</Button>
      );
      expect(getByTestId(iconTestId, { selector: 'svg' })).toBeInTheDocument();
      expect(getByText(buttonText)).toBeInTheDocument();
    });

    it('should change the icon position', () => {
      const buttonText = 'Click me';
      const icon = <CheckIcon />;

      const { container, getByText } = render(
        <Button iconPosition={IButtonIconPosition.left} icon={icon}>
          {buttonText}
        </Button>
      );

      const [firstEl, secondEl] = container.firstChild.childNodes;
      expect(firstEl.nodeName).toBe('svg');
      expect(getByText(buttonText)).toBe(secondEl);
    });

    it('should change padding based on position and size', () => {
      const icon = <CheckIcon />;
      const { container } = render(
        <Button
          icon={icon}
          iconPosition={IButtonIconPosition.left}
          size={IButtonSize.large}
        >
          Click me
        </Button>
      );

      expect(container.querySelector('span')).toHaveStyleRule(
        'padding-left',
        '15px'
      );
    });

    describe('Size', () => {
      it('Large', () => {
        const icon = <CheckIcon />;
        const { container } = render(
          <Button icon={icon} size={IButtonSize.large}>
            click
          </Button>
        );

        const svg = container.querySelector('svg');

        expect(svg).toHaveAttribute('height', '20');
        expect(svg).toHaveAttribute('width', '20');
      });

      it('Medium', () => {
        const icon = <CheckIcon />;
        const { container } = render(
          <Button icon={icon} size={IButtonSize.medium}>
            click
          </Button>
        );

        const svg = container.querySelector('svg');
        expect(svg).toHaveAttribute('height', '16');
        expect(svg).toHaveAttribute('width', '16');
      });

      it('Small', () => {
        const icon = <CheckIcon />;
        const { container } = render(
          <Button icon={icon} size={IButtonSize.small}>
            click
          </Button>
        );

        const svg = container.querySelector('svg');
        expect(svg).toHaveAttribute('height', '12');
        expect(svg).toHaveAttribute('width', '12');
      });
    });

    describe('Snapshot', () => {
      it('should render with updated color', () => {
        const icon = <CheckIcon id="testId" />;
        const { container } = render(
          <Button
            ariaLabel="Check Icon"
            id="testId"
            icon={icon}
            iconPosition={IButtonIconPosition.right}
            color={IButtonColor.secondary}
          >
            Test Text
          </Button>
        );

        expect(container).toMatchSnapshot();
      });

      it('should render with updated shape', () => {
        const icon = <CheckIcon id="testId" />;
        const { container } = render(
          <Button
            ariaLabel="Check Icon"
            id="testId"
            icon={icon}
            iconPosition={IButtonIconPosition.right}
            shape={IButtonShape.fill}
          >
            Test Text
          </Button>
        );

        expect(container).toMatchSnapshot();
      });

      it('should render with small size', () => {
        const icon = <CheckIcon id="testId" />;
        const { container } = render(
          <Button
            ariaLabel="Check Icon"
            id="testId"
            icon={icon}
            iconPosition={IButtonIconPosition.right}
            size={IButtonSize.small}
          >
            Test Text
          </Button>
        );

        expect(container).toMatchSnapshot();
      });

      it('should render with medium size', () => {
        const icon = <CheckIcon id="testId" />;
        const { container } = render(
          <Button
            ariaLabel="Check Icon"
            id="testId"
            icon={icon}
            iconPosition={IButtonIconPosition.right}
            size={IButtonSize.medium}
          >
            Test Text
          </Button>
        );

        expect(container).toMatchSnapshot();
      });

      it('should render with large size', () => {
        // const { container } = renderIconWithTextButton({
        //   size: IButtonSize.small
        // });

        // expect(container).toMatchSnapshot();
        const icon = <CheckIcon id="testId" />;
        const { container } = render(
          <Button
            ariaLabel="Check Icon"
            id="testId"
            icon={icon}
            iconPosition={IButtonIconPosition.right}
            size={IButtonSize.large}
          >
            Test Text
          </Button>
        );

        expect(container).toMatchSnapshot();
      });

      it('should render with updated text transform', () => {
        const icon = <CheckIcon id="testId" />;
        const { container } = render(
          <Button
            ariaLabel="Check Icon"
            id="testId"
            icon={icon}
            iconPosition={IButtonIconPosition.right}
            textTransform={IButtonTextTransform.none}
          >
            Test Text
          </Button>
        );

        expect(container).toMatchSnapshot();
      });

      it('should render with updated variant', () => {
        const icon = <CheckIcon id="testId" />;
        const { container } = render(
          <Button
            ariaLabel="Check Icon"
            id="testId"
            icon={icon}
            iconPosition={IButtonIconPosition.right}
            variant={IButtonVariant.outline}
          >
            Test Text
          </Button>
        );

        expect(container).toMatchSnapshot();
      });
    });
  });
});
