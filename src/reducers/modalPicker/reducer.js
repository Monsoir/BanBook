/**
 * modalPicker
 */

import * as ActionType from '../../actions/modalPicker/actionTypes';
import { initialState } from '../../const/commonConst';

function updateModalPickerConfigs(state = initialState, action) {
  console.log(state);
  switch (action.type) {
    case ActionType.PRESENTMODALPICKER:
      return {
        ...state,
        modalPickerConfigs: {
          present: true,
          items: action.items,
          title: action.title,
          selected: action.selected,
        },
      };
    case ActionType.DISMISSMODALPICKER:
      {
        const configs = state.modalPickerConfigs;
        return {
          ...state,
          modalPickerConfigs: {
            ...configs,
            present: false,
            items: [],
          },
        };
      }
    case ActionType.MODALPICKERSELECTEDCHANGED:
      {
        const configs = state.modalPickerConfigs;
        return {
          ...state,
          modalPickerConfigs: {
            ...configs,
            selected: action.selected,
          },
        };
      }
    case ActionType.CONFIRMSELECTION:
      {
        const configs = state.modalPickerConfigs;
        return {
          ...state,
          categoryIndex: action.selected,
          modalPickerConfigs: {
            ...configs,
            present: false,
          },
        };
      }

    default:
      return initialState;
  }
}

export default updateModalPickerConfigs;
