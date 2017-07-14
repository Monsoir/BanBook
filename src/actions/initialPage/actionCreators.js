/**
 * initialPage
 */

import * as ActionType from './actionTypes';

/**
 * 正在搜索
 */
const CommencingSearching = (category) => ({
  type: ActionType.COMMENCINGSEARCHING,
  category: category,
});

/**
 * 结束搜索
 */
const TerminateSearching = (category) => ({
  type: ActionType.TERMINATESEARCHING,
  category: category,
});

export {
  CommencingSearching,
  TerminateSearching,
};
