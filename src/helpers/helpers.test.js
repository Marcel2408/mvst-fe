import debounce from './debounce';

describe('debounce', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });
  test('debounced fn to not been called before specified delay', () => {
    const fn = jest.fn();
    const delay = 500;
    const debounceFn = debounce(fn, delay);
    debounceFn();
    jest.advanceTimersByTime(300);
    expect(fn).toBeCalledTimes(0);
  });

  test('debounced fn call after the specified delay', () => {
    const fn = jest.fn();
    const delay = 500;
    const debounceFn = debounce(fn, delay);
    debounceFn();
    jest.advanceTimersByTime(700);
    expect(fn).toBeCalledTimes(1);
  });
});
