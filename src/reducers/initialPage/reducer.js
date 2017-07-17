/**
 * initialPage
 */

import * as ActionType from '../../actions/initialPage/actionTypes';
import { initialState } from '../../const/commonConst';

function category(state = initialState, action) {
  const searchConfigs = state.searchConfigs;
  switch (action.type) {
    case ActionType.COMMENCINGSEARCHING:
      return {
        ...state,
        searchConfigs: {
          ...searchConfigs,
          categoryIndex: action.categoryIndex,
        },
      };
    case ActionType.TERMINATESEARCHING:
      return {
        ...state,
        searchConfigs: {
          ...searchConfigs,
          items: action.items,
          error: action.error,
        },
      };
    default:
      return initialState;
  }
}

export default category;
