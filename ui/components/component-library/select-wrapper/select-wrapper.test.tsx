import * as React from 'react';
import { render } from '@testing-library/react';
import { SelectWrapper } from '.';

describe('SelectWrapper', () => {
  it('should render the SelectWrapper without crashing', () => {
    const { container } = render(<SelectWrapper />);
    expect(container).toMatchSnapshot();
  });

  it('should render the SelectWrapper with additional className', () => {
    const { getByTestId } = render(
      <SelectWrapper data-testid="classname" className="mm-test" />,
    );
    expect(getByTestId('classname')).toHaveClass('mm-select-wrapper mm-test');
  });
});
