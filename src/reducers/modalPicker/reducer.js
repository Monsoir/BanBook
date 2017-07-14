/**
 * modalPicker
 */

import * as ActionType from '../../actions/modalPicker/actionTypes';
import { initialState } from '../../const/commonConst';

function updateModalPickerConfigs(state = initialState, action) {
  switch (action.type) {
    case ActionType.PRESENTMODALPICKER:
      return {
        ...state,
        modalPickerConfigs: {
          present: true,
          items: action.items,
        },
      };
    case ActionType.DISMISSMODALPICKER:
      return {
        ...state,
        modalPickerConfigs: {
          present: false,
          items: [],
        },
      };

    default:
      return initialState;
  }
}

export default updateModalPickerConfigs;
