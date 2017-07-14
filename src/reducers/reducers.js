import { combineReducers } from 'redux';
import initialPageReducer from '../reducers/initialPage/reducer';
import updateModalPickerConfigs from '../reducers/modalPicker/reducer';

export default combineReducers({
  initialPageReducer,
  updateModalPickerConfigs,
});
