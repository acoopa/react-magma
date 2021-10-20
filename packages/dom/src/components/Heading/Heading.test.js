import React from 'react';
import { axe } from '../../../axe-helper';
import { Heading } from '.';
import { render } from '@testing-library/react';

describe('Heading', () => {
  it('should find element by testId', () => {
    const testId = 'test-id';
    const { getByTestId } = render(
      <Heading level={1} testId={testId}>
        test
      </Heading>
    );

    expect(getByTestId(testId)).toBeInTheDocument();
  });

  it('should render an h1', () => {
    const headingText = 'test';
    const { getByText } = render(<Heading level={1}>{headingText}</Heading>);
    const heading = getByText(headingText);

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(headingText);
    expect(heading).toHaveStyleRule(
      'font-size',
      'var(--typeScale-size07-fontSize)'
    );
    expect(heading).toHaveStyleRule(
      'margin',
      '0 0 var(--spaceScale-spacing05)'
    );
  });

  it('should render an h2', () => {
    const headingText = 'test';
    const { getByText } = render(<Heading level={2}>{headingText}</Heading>);
    const heading = getByText(headingText);

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(headingText);
    expect(heading).toHaveStyleRule(
      'font-size',
      'var(--typeScale-size06-fontSize)'
    );
    expect(heading).toHaveStyleRule(
      'margin',
      'var(--spaceScale-spacing10) 0 var(--spaceScale-spacing05)'
    );
  });

  it('should render an h3', () => {
    const headingText = 'test';
    const { getByText } = render(<Heading level={3}>{headingText}</Heading>);
    const heading = getByText(headingText);

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(headingText);
    expect(heading).toHaveStyleRule(
      'font-size',
      'var(--typeScale-size05-fontSize)'
    );
    expect(heading).toHaveStyleRule(
      'margin',
      'var(--spaceScale-spacing09} 0 var(--spaceScale-spacing05)'
    );
  });

  it('should render an h4', () => {
    const headingText = 'test';
    const { getByText } = render(<Heading level={4}>{headingText}</Heading>);
    const heading = getByText(headingText);

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(headingText);
    expect(heading).toHaveStyleRule(
      'font-size',
      'var(--typeScale-size04-fontSize)'
    );
    expect(heading).toHaveStyleRule(
      'margin',
      'var(--spaceScale-spacing08) 0 var(--spaceScale-spacing05)'
    );
  });

  it('should render an h5', () => {
    const headingText = 'test';
    const { getByText } = render(<Heading level={5}>{headingText}</Heading>);
    const heading = getByText(headingText);

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(headingText);
    expect(heading).toHaveStyleRule(
      'font-size',
      'var(--typeScale-size04-fontSize)'
    );
    expect(heading).toHaveStyleRule(
      'margin',
      'var(--spaceScale-spacing06) 0 var(--spaceScale-spacing05)'
    );
  });

  it('should render an h6', () => {
    const headingText = 'test';
    const { getByText } = render(<Heading level={6}>{headingText}</Heading>);
    const heading = getByText(headingText);

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(headingText);
    expect(heading).toHaveStyleRule(
      'font-size',
      'var(--typeScale-size01-fontSize)'
    );
    expect(heading).toHaveStyleRule(
      'margin',
      'var(--spaceScale-spacing06) 0 var(--spaceScale-spacing03)'
    );
  });

  it('should render an component with a different size', () => {
    const headingText = 'test';
    const { container, getByText } = render(
      <Heading visualStyle="headingXLarge" level={6}>
        {headingText}
      </Heading>
    );
    const heading = getByText(headingText);

    expect(container.querySelector('h6')).toBeInTheDocument();
    expect(heading).toHaveTextContent(headingText);
    expect(heading).toHaveStyleRule(
      'font-size',
      'var(--typeScale-size07-fontSize)'
    );
  });

  it('should render headings without margins styles', () => {
    const headingText1 = 'test 1';
    const headingText2 = 'test 2';
    const headingText3 = 'test 3';
    const headingText4 = 'test 4';
    const headingText5 = 'test 5';
    const headingText6 = 'test 6';

    const { getByText } = render(
      <>
        <Heading noMargins level={1}>
          {headingText1}
        </Heading>
        <Heading noMargins level={2}>
          {headingText2}
        </Heading>
        <Heading noMargins level={3}>
          {headingText3}
        </Heading>
        <Heading noMargins level={4}>
          {headingText4}
        </Heading>
        <Heading noMargins level={5}>
          {headingText5}
        </Heading>
        <Heading noMargins level={6}>
          {headingText6}
        </Heading>
      </>
    );

    expect(getByText(headingText1)).toHaveStyleRule('margin', '0');
    expect(getByText(headingText2)).toHaveStyleRule('margin', '0');
    expect(getByText(headingText3)).toHaveStyleRule('margin', '0');
    expect(getByText(headingText4)).toHaveStyleRule('margin', '0');
    expect(getByText(headingText5)).toHaveStyleRule('margin', '0');
    expect(getByText(headingText6)).toHaveStyleRule('margin', '0');
  });

  it('should render inverse styles', () => {
    const headingText = 'test';
    const { getByText } = render(
      <Heading isInverse level={1}>
        {headingText}
      </Heading>
    );
    const heading = getByText(headingText);

    expect(heading).toHaveStyleRule('color', 'var(--colors-neutral08)');

    expect(heading).toHaveStyleRule(
      'border-bottom',
      '2px dotted var(--colors-focusInverse)',
      {
        target: ':focus',
      }
    );
  });

  it('should render custom styles', () => {
    const color = '#cccccc';
    const headingText = 'test';
    const { getByText } = render(
      <Heading level={1} style={{ color }}>
        {headingText}
      </Heading>
    );
    const heading = getByText(headingText);

    expect(heading).toHaveStyle(`color: ${color}`);
  });

  describe('Snapshot', () => {
    it('should render heading 1 correctly', () => {
      const { container } = render(
        <Heading level={1} id="testId">
          Heading 1
        </Heading>
      );

      expect(container).toMatchSnapshot();
    });

    it('should render heading 2 correctly', () => {
      const { container } = render(<Heading level={2}>Heading 2</Heading>);

      expect(container).toMatchSnapshot();
    });

    it('should render heading 3 correctly', () => {
      const { container } = render(<Heading level={3}>Heading 3</Heading>);

      expect(container).toMatchSnapshot();
    });

    it('should render heading 4 correctly', () => {
      const { container } = render(<Heading level={4}>Heading 4</Heading>);

      expect(container).toMatchSnapshot();
    });

    it('should render heading 5 correctly', () => {
      const { container } = render(<Heading level={5}>Heading 5</Heading>);

      expect(container).toMatchSnapshot();
    });

    it('should render heading 6 correctly', () => {
      const { container } = render(<Heading level={6}>Heading 6</Heading>);

      expect(container).toMatchSnapshot();
    });
  });

  describe('expressive styles', () => {
    it('should render expressive h1 styles', () => {
      const headingText = 'test';
      const { getByText } = render(
        <Heading contextVariant="expressive" level={1}>
          {headingText}
        </Heading>
      );
      const heading = getByText(headingText);

      expect(heading).toHaveStyleRule('color', 'var(--colors-foundation02)');
      expect(heading).toHaveStyleRule(
        'font-family',
        'var(--headingExpressiveFont)'
      );
      expect(heading).toHaveStyleRule(
        'font-size',
        'var(--typographyExpressiveVisualStyles-headingXLarge-mobile-fontSize)'
      );
    });

    it('should render expressive h2 styles', () => {
      const headingText = 'test';
      const { getByText } = render(
        <Heading contextVariant="expressive" level={2}>
          {headingText}
        </Heading>
      );
      const heading = getByText(headingText);

      expect(heading).toHaveStyleRule(
        'font-size',
        'var(--typographyExpressiveVisualStyles-headingLarge-mobile-fontSize)'
      );
    });

    it('should render expressive h3 styles', () => {
      const headingText = 'test';
      const { getByText } = render(
        <Heading contextVariant="expressive" level={3}>
          {headingText}
        </Heading>
      );
      const heading = getByText(headingText);

      expect(heading).toHaveStyleRule(
        'font-size',
        'var(--typographyExpressiveVisualStyles-headingMedium-mobile-fontSize)'
      );
    });

    it('should render expressive h4 styles', () => {
      const headingText = 'test';
      const { getByText } = render(
        <Heading contextVariant="expressive" level={4}>
          {headingText}
        </Heading>
      );
      const heading = getByText(headingText);

      expect(heading).toHaveStyleRule(
        'font-size',
        'var(--typographyExpressiveVisualStyles-headingSmall-mobile-fontSize)'
      );
    });

    it('should render expressive h5 styles', () => {
      const headingText = 'test';
      const { getByText } = render(
        <Heading contextVariant="expressive" level={5}>
          {headingText}
        </Heading>
      );
      const heading = getByText(headingText);

      expect(heading).toHaveStyleRule(
        'font-size',
        'var(--typographyExpressiveVisualStyles-headingXSmall-mobile-fontSize)'
      );
    });

    it('should render expressive h6 styles', () => {
      const headingText = 'test';
      const { getByText } = render(
        <Heading contextVariant="expressive" level={6}>
          {headingText}
        </Heading>
      );
      const heading = getByText(headingText);

      expect(heading).toHaveStyleRule(
        'font-size',
        'var(--typographyExpressiveVisualStyles-heading2XSmall-mobile-fontSize)'
      );
    });
  });

  describe('narrative styles', () => {
    it('should render narrative h1 styles', () => {
      const headingText = 'test';
      const { getByText } = render(
        <Heading contextVariant="narrative" level={1}>
          {headingText}
        </Heading>
      );
      const heading = getByText(headingText);

      expect(heading).toHaveStyleRule('color', 'var(--colors-neutral)');
      expect(heading).toHaveStyleRule(
        'font-family',
        'var(--headingNarrativeFont)'
      );
      expect(heading).toHaveStyleRule(
        'font-size',
        'var(--typographyNarrativeVisualStyles-headingXLarge-mobile-fontSize)'
      );
    });

    it('should render narrative h2 styles', () => {
      const headingText = 'test';
      const { getByText } = render(
        <Heading contextVariant="narrative" level={2}>
          {headingText}
        </Heading>
      );
      const heading = getByText(headingText);

      expect(heading).toHaveStyleRule(
        'font-size',
        'var(--typographyNarrativeVisualStyles-headingLarge-mobile-fontSize)'
      );
    });

    it('should render narrative h3 styles', () => {
      const headingText = 'test';
      const { getByText } = render(
        <Heading contextVariant="narrative" level={3}>
          {headingText}
        </Heading>
      );
      const heading = getByText(headingText);

      expect(heading).toHaveStyleRule(
        'font-size',
        'var(--typographyNarrativeVisualStyles-headingMedium-mobile-fontSize)'
      );
    });

    it('should render narrative h4 styles', () => {
      const headingText = 'test';
      const { getByText } = render(
        <Heading contextVariant="narrative" level={4}>
          {headingText}
        </Heading>
      );
      const heading = getByText(headingText);

      expect(heading).toHaveStyleRule(
        'font-size',
        'var(--typographyNarrativeVisualStyles-headingSmall-mobile-fontSize)'
      );
    });

    it('should render narrative h5 styles', () => {
      const headingText = 'test';
      const { getByText } = render(
        <Heading contextVariant="narrative" level={5}>
          {headingText}
        </Heading>
      );
      const heading = getByText(headingText);

      expect(heading).toHaveStyleRule(
        'font-size',
        'var(--typographyNarrativeVisualStyles-headingXSmall-mobile-fontSize)'
      );
    });

    it('should render narrative h6 styles', () => {
      const headingText = 'test';
      const { getByText } = render(
        <Heading contextVariant="narrative" level={6}>
          {headingText}
        </Heading>
      );
      const heading = getByText(headingText);

      expect(heading).toHaveStyleRule(
        'font-size',
        'var(--typographyNarrativeVisualStyles-heading2XSmall-mobile-fontSize)'
      );
    });
  });

  it('Does not violate accessibility standards', () => {
    const { container } = render(<Heading level={1}>test</Heading>);
    return axe(container.innerHTML).then(result => {
      return expect(result).toHaveNoViolations();
    });
  });
});
