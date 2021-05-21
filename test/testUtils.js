/* eslint-disable react/forbid-foreign-prop-types */
import checkPropTypes from 'check-prop-types';

/**
 * Return node(s) with the given data-test attribute
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper
 * @param {string} val - value for a data-test attribute for search
 * @returns {ShallowWrapper}
 */

export const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test="${val}"]`);

/**
 * Checks the expected props are passed into the component
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper
 * @param {object} conformingProps - props passed into the component
 * @returns {string | null} - Return a type error message or null
*/
export const checkProps = (component, conformingProps) => checkPropTypes(
  component.propTypes,
  conformingProps,
  'prop',
  component.name,
);
