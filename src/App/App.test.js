/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import findByTestAttr from '../../test/testUtils';

/**
 * Setup fn for the App component
 * @returns {ShallowWrapper}
 */
const setup = () => shallow(<App />);

test('renders page template without error', () => {
  const wrapper = setup();
  const app = findByTestAttr(wrapper, 'component-app');
  expect(app).toHaveLength(1);
});
