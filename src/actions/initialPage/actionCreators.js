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
  items,
  error,
});

const UpdateSelectedCategory = (categoryIndex = 0) => ({
  type: ActionType.UPDATESELECTEDCATEGORY,
  categoryIndex,
});

export {
  CommencingSearching,
  TerminateSearching,
  UpdateSelectedCategory,
};
