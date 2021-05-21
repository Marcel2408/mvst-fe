import React from 'react';
import { gql, useQuery } from '@apollo/client';

import Spinner from '../../components/Spinner/Spinner';
import HomePage from '../../pages/HomePage/HomePage';
import reposSortByDate from '../../helpers/reposSortByDate';

const GET_REPOSITORIES = gql`
query {
  user(login: "marcel2408") {
    id
    name
    url
    bio
    avatarUrl
    login
    repositories(last: 10) {
      totalCount
      nodes {
        name
        description
        updatedAt
        id
        stargazerCount
        primaryLanguage {
          name
          color
        }

      }
    }
  }
}
`;

/**
 * Functional High Order React component querying data from the API
 * @function HomePageContainer
 * @param {object} userData - data from API to display the user info
 * @returns {JSX.Element} - HomePage component
 */

const HomePageContainer = () => {
  const { loading, error, data } = useQuery(GET_REPOSITORIES);
  if (loading) return <Spinner />;
  if (error) {
    return <p>{error}</p>;
  }

  const userData = {
    profileData: {
      avatarUrl: data.user.avatarUrl,
      name: data.user.name,
      bio: data.user.bio,
      login: data.user.login,
    },
    repoCount: data.user.repositories.totalCount,
    repoList: reposSortByDate(data.user.repositories.nodes),
  };
  return (
    <HomePage userData={userData} />
  );
};

export default HomePageContainer;
