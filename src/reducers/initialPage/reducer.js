/**
 * initialPage
 */

import * as ActionType from '../../actions/initialPage/actionTypes';
import { initialState } from '../../const/commonConst';

function category(state = initialState, action) {
  console.log('find me for changing category');
  switch (action.type) {
    case ActionType.COMMENCINGSEARCHING:
      return {
        ...state,
      };
    case ActionType.TERMINATESEARCHING:
      return {
        ...state,
      };
    default:
      return initialState;
  }
}

export default category;
