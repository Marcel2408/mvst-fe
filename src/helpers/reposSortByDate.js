/**
 * @method reposSortByDate
 * @param {Array<object>} repoList
 * @return {Array<object>} - returns the repoList sorted by last update time
 */
const reposSortByDate = (repoList) => repoList.map((repo) => ({ ...repo }))
  .sort((a, b) => (
    a.updatedAt > b.updatedAt ? -1 : 1
  ));

export default reposSortByDate;
