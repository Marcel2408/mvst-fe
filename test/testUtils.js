/**
 * Return node(s) with the given data-test attribute
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper
 * @param {string} val - value for a data-test attribute for search
 * @returns {ShallowWrapper}
 */

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test="${val}"]`);

export default findByTestAttr;
