/**
 * @method debounce
 * @param {function} func
 * @param {number} delay
 * @return {function} - Function to execute after the delay has passed
 */
const debounce = (func, delay = 1000) => {
  let timeoutId;
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func.call(null, ...args);
    }, delay);
  };
};

export default debounce;
