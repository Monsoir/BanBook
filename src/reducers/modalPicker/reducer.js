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
        const modalPickerconfigs = state.modalPickerConfigs;
        return {
          ...state,
          modalPickerConfigs: {
            ...modalPickerconfigs,
            present: false,
          },
        };
      }

    default:
      return initialState;
  }
}

export default updateModalPickerConfigs;
