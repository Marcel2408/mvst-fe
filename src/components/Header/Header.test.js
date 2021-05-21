/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import mockUserData from '../../../test/mock';
import { findByTestAttr, checkProps } from '../../../test/testUtils';
import Header from './Header';

const defaultProps = mockUserData.repoCount;
/**
 * Factory function to create a ShallowWrapper for the Header component
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper}
 */

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Header {...setupProps} />);
};

describe('render', () => {
  test('renders header without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-header');
    expect(component.length).toBe(1);
  });

  test('renders navbar without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-navbar');
    expect(component.length).toBe(1);
  });

  test('renders list without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-list');
    expect(component.length).toBe(1);
  });

  describe('component-item', () => {
    test('renders 4 items without error', () => {
      const wrapper = setup();
      const component = findByTestAttr(wrapper, 'component-item');
      expect(component.length).toBe(4);
    });

    test('renders only 1 item with the "selected" class', () => {
      const wrapper = setup();
      const component = findByTestAttr(wrapper, 'component-item');
      expect(component.filter('.selected').length).toBe(1);
    });
  });

  describe('component-icon', () => {
    let itemComponents;
    let iconComponents;

    beforeAll(() => {
      const wrapper = setup();
      itemComponents = findByTestAttr(wrapper, 'component-item');
      iconComponents = findByTestAttr(wrapper, 'component-icon');
    });

    test('renders 4 icons without error', () => {
      expect(iconComponents.length).toBe(4);
    });

    test('renders "overview" icon in the correct tab', () => {
      const overviewIcon = iconComponents.filter('[icon="overview"]');
      expect(itemComponents.at(0).childAt(0)).toEqual(overviewIcon);
    });

    test('renders "repository" icon in the correct tab', () => {
      const repositoryIcon = iconComponents.filter('[icon="repository"]');
      expect(itemComponents.at(1).childAt(0)).toEqual(repositoryIcon);
    });

    test('renders "project" icon in the correct tab', () => {
      const projectIcon = iconComponents.filter('[icon="project"]');
      expect(itemComponents.at(2).childAt(0)).toEqual(projectIcon);
    });

    test('renders "package" icon in the correct tab', () => {
      const packageIcon = iconComponents.filter('[icon="package"]');
      expect(itemComponents.at(3).childAt(0)).toEqual(packageIcon);
    });
  });

  test('renders 4 links without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-link');
    expect(component.length).toBe(4);
  });

  describe('counter', () => {
    test('renders the counter without error', () => {
      const wrapper = setup();
      const component = findByTestAttr(wrapper, 'component-counter');
      expect(component.length).toBe(1);
    });

    test('renders the repoCount according to props', () => {
      const wrapper = setup({ repoCount: mockUserData.repoCount });
      const component = findByTestAttr(wrapper, 'component-counter');
      expect(component.text()).toBe('37');
    });
  });
});

test('doesn\'t throw error for expected props', () => {
  const expectedProps = { repoCount: mockUserData.repoCount };
  expect(checkProps(Header, expectedProps)).toBeUndefined();
});
