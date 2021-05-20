import moment from 'moment';
/**
 * @method timeDiff
 * @param {string} time - repo last updated time
 * @return {string} - Formatted time since last update
 */

const timeDiff = (time) => {
  const lastUpdate = time;
  const now = Date.now();
  const daysPassed = moment(lastUpdate).diff(moment(now), 'days');
  const currentYear = new Date().getFullYear();
  const isLastYear = Number(moment(lastUpdate).format('YYYY')) < currentYear;

  if (isLastYear) {
    return `on ${moment(lastUpdate).format('MMM D, YYYY')}`;
  } if (daysPassed < -29) {
    return `on ${moment(lastUpdate).format('MMM D')}`;
  }
  return moment(lastUpdate).fromNow();
};

export default timeDiff;
