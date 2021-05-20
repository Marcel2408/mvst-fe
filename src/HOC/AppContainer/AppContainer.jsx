import React from 'react';
import { gql, useQuery } from '@apollo/client';
import Header from '../../components/Header/Header';
import Profile from '../../components/Profile/Profile';
import RepoList from '../../components/Repo-list/RepoList';
import Searchbar from '../../components/Searchbar/Searchbar';
import PageGrid from '../../templates/PageGrid/PageGrid';
import Spinner from '../../components/Spinner/Spinner';

const GET_REPOSITORIES = gql`
query {
  user(login: "marcel2408") {
    id
    name
    url
    bio
    avatarUrl
    login
    repositories(first: 3) {
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

const AppContainer = () => {
  const { loading, error, data } = useQuery(GET_REPOSITORIES);
  if (loading) return <Spinner />;
  if (error) {
    console.log(error);
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
    repoList: data.user.repositories.nodes,
  };
  return (
    <PageGrid>
      <Header repoCount={userData.repoCount} />
      <Searchbar />
      <Profile profileData={userData.profileData} />
      <RepoList list={userData.repoList} />
    </PageGrid>
  );
};

export default AppContainer;
