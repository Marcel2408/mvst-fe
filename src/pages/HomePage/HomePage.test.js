/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import mockUserData from '../../../test/mock';
import HomePage from './HomePage';
import { findByTestAttr } from '../../../test/testUtils';

const defaultProps = mockUserData;
/**
 * Factory function to create a ShallowWrapper for the HomePage component
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<HomePage userData={setupProps} />);
};

test('renders without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-homepage');
  expect(component.length).toBe(1);
});

test('renders the grid template component without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-grid');
  expect(component.length).toBe(1);
});
