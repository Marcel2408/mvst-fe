import moment from 'moment';
import debounce from './debounce';
import mockRepoList from './helpers.mock';
import reposSortByDate from './reposSortByDate';
import timeDiff from './timeDiff';

describe('debounce', () => {
  const fn = jest.fn();
  const delay = 500;
  const debounceFn = debounce(fn, delay);
  beforeEach(() => {
    jest.useFakeTimers();
  });
  test('debounced fn to not been called before specified delay', () => {
    debounceFn();
    jest.advanceTimersByTime(300);
    expect(fn).toBeCalledTimes(0);
  });

  test('debounced fn call after the specified delay', () => {
    debounceFn();
    jest.advanceTimersByTime(700);
    expect(fn).toBeCalledTimes(1);
  });
});

describe('timeDiff', () => {
  test('if time is not from this year return time in "MMM D, YYYY"', () => {
    const time = '2019-04-26T07:21:20Z';
    const formatedTime = timeDiff(time);
    const timeIfNotThisYearFormat = `on ${moment(time).format('MMM D, YYYY')}`;
    expect(formatedTime).toEqual(timeIfNotThisYearFormat);
  });

  test('if time is this year and more than 29 days ago return time in "MMM D"', () => {
    const time = '2021-04-07T07:21:20Z';
    const formatedTime = timeDiff(time);
    const timeIfNotThisYearFormat = `on ${moment(time).format('MMM D')}`;
    expect(formatedTime).toEqual(timeIfNotThisYearFormat);
  });

  test('if time is this year and less than 29 days ago return time "from now"', () => {
    const time = '2021-05-07T07:21:20Z';
    const formatedTime = timeDiff(time);
    const timeIfNotThisYearFormat = moment(time).fromNow();
    expect(formatedTime).toEqual(timeIfNotThisYearFormat);
  });
});

describe('reposSortByDate', () => {
  test('correctly sorts by most recent updated repo', () => {
    const originalRepoNames = `${mockRepoList[0].name}, ${mockRepoList[1].name}, ${mockRepoList[2].name}`;

    const sortedMockRepoList = reposSortByDate(mockRepoList);

    const sortedRepoNames = `${sortedMockRepoList[0].name}, ${sortedMockRepoList[1].name}, ${sortedMockRepoList[2].name}`;

    expect(originalRepoNames).toEqual('google-login, ng-form, mvst-fe');
    expect(sortedRepoNames).toEqual('mvst-fe, ng-form, google-login');
  });
});
