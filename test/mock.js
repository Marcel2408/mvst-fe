import reposSortByDate from '../src/helpers/reposSortByDate';

const mockUserData = {
  profileData: {
    avatarUrl: 'https://avatars.githubusercontent.com/u/50625838?u=12f0f736f5d063063e8d06c9c968ba9639101735&v=4',
    name: 'MARCEL SUBIRANA CAMPANERA',
    bio: 'Software engineer with strong product development background, experienced in JavaScript technologies in both frontend and backend.',
    login: 'Marcel2408',
  },
  repoCount: 37,
  repoList: reposSortByDate([
    {
      name: 'google-login',
      url: 'https://github.com/Marcel2408/google-login',
      description: null,
      updatedAt: '2021-04-26T07:21:20Z',
      id: 'MDEwOlJlcG9zaXRvcnkzNjE2NTEzMjM=',
      stargazerCount: 0,
      primaryLanguage: {
        name: 'TypeScript',
        color: '#2b7489',
      },
    },
    {
      name: 'ng-form',
      url: 'https://github.com/Marcel2408/ng-form',
      description: null,
      updatedAt: '2021-05-06T22:30:04Z',
      id: 'MDEwOlJlcG9zaXRvcnkzNjUwNTE3MjQ=',
      stargazerCount: 0,
      primaryLanguage: {
        name: 'TypeScript',
        color: '#2b7489',
      },
    },
    {
      name: 'mvst-fe',
      url: 'https://github.com/Marcel2408/mvst-fe',
      description: null,
      updatedAt: '2021-05-20T06:18:21Z',
      id: 'MDEwOlJlcG9zaXRvcnkzNjg2MDQ5NzQ=',
      stargazerCount: 0,
      primaryLanguage: {
        name: 'JavaScript',
        color: '#f1e05a',
      },
    },
  ]),
};

export default mockUserData;
