/**
 * modalPicker
 */

import * as ActionType from './actionTypes';

/**
 * 改变搜索类型
 */
const PresentModalPicker = (title = '', items = [], selected = 0) => ({
  type: ActionType.PRESENTMODALPICKER,
  title,
  items,
  selected,
});

/**
 * 取消改变搜索类型
 */
const DismissModalPicker = (title = '', items = [], selected = 0) => ({
  type: ActionType.DISMISSMODALPICKER,
  title,
  items,
  selected,
});

/**
 * 确认选择
 */
const ModalPickerConfirmSeletion = (selected = 0) => ({
  type: ActionType.CONFIRMSELECTION,
  selected,
});

/**
 * 选择值发生改变
 */
const ModalPickerSelectedChanged = (selected = 0) => ({
  type: ActionType.MODALPICKERSELECTEDCHANGED,
  selected,
});

export {
  PresentModalPicker,
  DismissModalPicker,
  ModalPickerConfirmSeletion,
  ModalPickerSelectedChanged,
};
