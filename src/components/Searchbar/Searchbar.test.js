/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import mockUserData from '../../../test/mock';
import { findByTestAttr } from '../../../test/testUtils';
import Searchbar from './Searchbar';

const defaultProps = { handleOnChange: jest.fn(), searchValue: '', resultsCount: mockUserData.repoList.length };
/**
 * Factory function to create a ShallowWrapper for the Searchbar component
 * @param {object} props
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Searchbar {...setupProps} />);
};

test('input box value changes upon change', () => {
  const wrapper = setup();
  const inputBox = findByTestAttr(wrapper, 'component-input');
  const mockEvent = { target: { value: 'hello' } };
  inputBox.simulate('change', mockEvent);
  const searchValue = mockEvent.target.value;
  expect(searchValue).toBe('hello');
});

describe('render Results conditionally', () => {
  test('doesn\'t render Results component if searchValue is empty', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-results');
    expect(component.length).toBe(0);
  });

  test('render Results component if searchValue is not empty', () => {
    const wrapper = setup({ searchValue: 'google' });
    const component = findByTestAttr(wrapper, 'component-results');
    expect(component.length).toBe(1);
  });
});
