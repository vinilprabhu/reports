import _debug from 'debug';
import { DateTime } from 'luxon';

const LUXON_DATE_FORMAT = {
  YYYY_LL_DD: 'yyyy-LL-dd',
  YYYY_LL: 'yyyy-LL',
  YYYY_DOT_LL: 'yyyy. LL',
  YYYY_DOT_LL_DOT_DD: 'yyyy. LL. dd',
  KINDNESS_FULL: 'DDDD',

  DURATION_KINDNESS: `y 'years' M 'months'`,
  DURATION_KINDNESS_ONLY_MONTH: 'months',

  MONTH_YYYY: 'MMMM yyyy',
}

function getFormattingDuration(from, to = DateTime.local()) {

  const diff = to.plus({ month: 1 }).diff(from);

  const experienceYears = parseInt(diff.as('years'));
  const experienceMonths = parseInt(diff.as('months')) - 12 * experienceYears;
  return `${experienceYears ? `${experienceYears} years ` : ''}${experienceMonths ? `${experienceMonths} months` : ''}`;
}

function debug(channel) {
  return _debug(`yosume:${channel}`);
}

const Util = {
  LUXON_DATE_FORMAT,
  getFormattingDuration,
  debug,
};

export default Util;
