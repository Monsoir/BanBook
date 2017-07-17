/**
 * initialPage
 */

import * as ActionType from './actionTypes';

/**
 * 正在搜索
 */
const CommencingSearching = (categoryIndex) => ({
  type: ActionType.COMMENCINGSEARCHING,
  categoryIndex,
});

/**
 * 结束搜索
 */
const TerminateSearching = (categoryIndex, items=[], error=null) => ({
  type: ActionType.TERMINATESEARCHING,
  categoryIndex,
});

export {
  CommencingSearching,
  TerminateSearching,
};
