/**
 * modalPicker
 */

import * as ActionType from './actionTypes';

/**
 * 改变搜索类型
 */
const PresentModalPicker = (items) => ({
  type: ActionType.PRESENTMODALPICKER,
});

/**
 * 取消改变搜索类型
 */
const DismissModalPicker = (items) => ({
  type: ActionType.DISMISSMODALPICKER,
});

export {
  PresentModalPicker,
  DismissModalPicker,
};
